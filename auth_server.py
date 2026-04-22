import hashlib
import hmac
import json
import os
import secrets
from http.server import BaseHTTPRequestHandler, HTTPServer


HOST = "127.0.0.1"
PORT = 5050
DATA_PATH = os.path.join(os.path.dirname(__file__), "auth_store.json")


def load_store():
    if not os.path.exists(DATA_PATH):
        return {"users": [], "sessions": []}
    with open(DATA_PATH, "r", encoding="utf-8") as file:
        return json.load(file)


def save_store(store):
    with open(DATA_PATH, "w", encoding="utf-8") as file:
        json.dump(store, file, indent=2)


def hash_password(password, salt):
    return hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), 120000).hex()


def json_response(handler, status, payload):
    body = json.dumps(payload).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json")
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
    handler.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)


class AuthHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.end_headers()

    def do_GET(self):
        if self.path == "/health":
            json_response(self, 200, {"status": "running"})
            return
        json_response(self, 404, {"message": "Not found"})

    def do_POST(self):
        content_length = int(self.headers.get("Content-Length", "0"))
        raw_body = self.rfile.read(content_length) if content_length else b"{}"

        try:
            payload = json.loads(raw_body.decode("utf-8"))
        except json.JSONDecodeError:
            json_response(self, 400, {"message": "Invalid JSON body."})
            return

        if self.path == "/signup":
            self.handle_signup(payload)
            return

        if self.path == "/login":
            self.handle_login(payload)
            return

        json_response(self, 404, {"message": "Not found"})

    def handle_signup(self, payload):
        username = str(payload.get("username", "")).strip()
        email = str(payload.get("email", "")).strip().lower()
        password = str(payload.get("password", "")).strip()

        if not username or not email or not password:
            json_response(self, 400, {"message": "Username, email and password are required."})
            return

        store = load_store()
        if any(user["email"] == email for user in store["users"]):
            json_response(self, 409, {"message": "Account already exists with this email."})
            return

        salt = secrets.token_hex(16)
        password_hash = hash_password(password, salt)
        user_id = (max((user["id"] for user in store["users"]), default=0) + 1)
        token = secrets.token_urlsafe(32)

        store["users"].append({
            "id": user_id,
            "username": username,
            "email": email,
            "password_hash": password_hash,
            "salt": salt
        })
        store["sessions"].append({
            "token": token,
            "user_id": user_id
        })
        save_store(store)

        json_response(self, 201, {
            "message": "Account created successfully.",
            "token": token,
            "user": {"email": email, "username": username}
        })

    def handle_login(self, payload):
        email = str(payload.get("email", "")).strip().lower()
        password = str(payload.get("password", "")).strip()

        if not email or not password:
            json_response(self, 400, {"message": "Email and password are required."})
            return

        store = load_store()
        user = next((entry for entry in store["users"] if entry["email"] == email), None)

        if user is None:
            json_response(self, 404, {"message": "No account found with this email. Please sign up."})
            return

        computed_hash = hash_password(password, user["salt"])
        if not hmac.compare_digest(computed_hash, user["password_hash"]):
            json_response(self, 401, {"message": "Incorrect password."})
            return

        token = secrets.token_urlsafe(32)
        store["sessions"].append({
            "token": token,
            "user_id": user["id"]
        })
        save_store(store)

        json_response(self, 200, {
            "message": "Login successful.",
            "token": token,
            "user": {"email": user["email"], "username": user.get("username", user["email"].split("@")[0])}
        })


if __name__ == "__main__":
    if not os.path.exists(DATA_PATH):
        save_store({"users": [], "sessions": []})
    server = HTTPServer((HOST, PORT), AuthHandler)
    print(f"Auth server running on http://{HOST}:{PORT}")
    server.serve_forever()
