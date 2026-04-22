(function () {
  const THEME_KEY = "theme";
  const LANGUAGE_KEY = "refurbtech-language";
  const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
    { code: "fr", label: "French" },
    { code: "es", label: "Spanish" },
    { code: "zh", label: "Mandarin" },
    { code: "ru", label: "Russian" }
  ];

  const translations = {
    ar: {
      "Light": "فاتح",
      "Dark": "داكن",
      "Language": "اللغة",
      "Log in / Sign up": "تسجيل الدخول / إنشاء حساب",
      "Logout": "تسجيل الخروج",
      "Login / Backend Connect": "تسجيل الدخول / ربط الخلفية",
      "Demo Login": "تسجيل دخول تجريبي",
      "Demo Sign Up": "إنشاء حساب تجريبي",
      "Backend Connection": "اتصال الخلفية",
      "Email": "البريد الإلكتروني",
      "Password": "كلمة المرور",
      "Login": "تسجيل الدخول",
      "Sign Up": "إنشاء حساب",
      "Don't have an account? Sign up": "ليس لديك حساب؟ أنشئ حسابًا",
      "Already have an account? Login": "لديك حساب بالفعل؟ سجّل الدخول",
      "Save Backend Settings": "حفظ إعدادات الخلفية",
      "Clear Saved Token": "مسح الرمز المحفوظ",
      "Auth API URL": "رابط Auth API",
      "Java API URL": "رابط Java API",
      "Recommendation API URL": "رابط API للتوصيات",
      "Paste JWT token here without the word Bearer": "ألصق رمز JWT هنا بدون كلمة Bearer",
      "Pick your category": "اختر الفئة",
      "Curated, refurbished tech with up to 2-year warranty.": "تقنيات مجددة ومنتقاة بعناية مع ضمان يصل إلى سنتين.",
      "Phones": "الهواتف",
      "Laptops": "الحواسيب المحمولة",
      "Consoles": "أجهزة الألعاب",
      "Mobile Phones": "الهواتف المحمولة",
      "Our best sellers": "الأكثر مبيعًا",
      "Search here": "ابحث هنا",
      "Back": "رجوع",
      "Cart": "السلة",
      "Categories": "الفئات",
      "Brands": "العلامات التجارية",
      "Continue Shopping": "متابعة التسوق",
      "Your Bag": "سلتك",
      "Review your selected devices before checkout.": "راجع أجهزتك المحددة قبل الدفع.",
      "Order Summary": "ملخص الطلب",
      "Items": "العناصر",
      "Shipping": "الشحن",
      "Free": "مجاني",
      "Total": "الإجمالي",
      "Proceed to Checkout": "المتابعة إلى الدفع",
      "Delivery Address": "عنوان التوصيل",
      "Country": "الدولة",
      "City": "المدينة",
      "Postcode": "الرمز البريدي",
      "Nearby place": "مكان قريب",
      "Save Address To Backend": "حفظ العنوان في الخلفية",
      "Refresh Addresses": "تحديث العناوين",
      "Storage": "السعة",
      "Color": "اللون",
      "Quantity": "الكمية",
      "Add to Bag": "أضف إلى السلة",
      "Similar phones": "هواتف مشابهة",
      "Similar laptops": "حواسيب مشابهة",
      "Similar consoles": "أجهزة مشابهة",
      "Price unavailable": "السعر غير متوفر",
      "Remove": "إزالة",
      "No backend token saved. Address features stay disabled until you add one on the login page.": "لم يتم حفظ رمز الخلفية. ستبقى ميزات العنوان معطلة حتى تضيفه في صفحة تسجيل الدخول.",
      "Backend address integration is waiting for a saved JWT token.": "تكامل عنوان الخلفية ينتظر رمز JWT محفوظًا.",
      "No backend addresses found for this user yet.": "لم يتم العثور على عناوين محفوظة لهذا المستخدم بعد.",
      "Loading saved addresses from backend...": "جاري تحميل العناوين المحفوظة من الخلفية...",
      "Backend connected. Saved addresses loaded.": "تم الاتصال بالخلفية وتحميل العناوين المحفوظة.",
      "Address deleted.": "تم حذف العنوان.",
      "Save a backend token first on the login page.": "احفظ رمز الخلفية أولًا في صفحة تسجيل الدخول.",
      "Saving address to backend...": "جاري حفظ العنوان في الخلفية...",
      "Address saved to backend.": "تم حفظ العنوان في الخلفية.",
      "Checking backend connection...": "جاري التحقق من اتصال الخلفية...",
      "Using local product data.": "يتم استخدام بيانات منتجات محلية.",
      "Recommendation service unavailable. Using local catalogue.": "خدمة التوصيات غير متاحة. يتم استخدام الكتالوج المحلي."
    },
    fr: {
      "Light": "Clair",
      "Dark": "Sombre",
      "Language": "Langue",
      "Log in / Sign up": "Connexion / Inscription",
      "Logout": "Déconnexion",
      "Login / Backend Connect": "Connexion / Liaison backend",
      "Demo Login": "Connexion démo",
      "Demo Sign Up": "Inscription démo",
      "Backend Connection": "Connexion backend",
      "Email": "E-mail",
      "Password": "Mot de passe",
      "Login": "Connexion",
      "Sign Up": "S'inscrire",
      "Don't have an account? Sign up": "Pas de compte ? Inscrivez-vous",
      "Already have an account? Login": "Vous avez déjà un compte ? Connectez-vous",
      "Save Backend Settings": "Enregistrer les paramètres backend",
      "Clear Saved Token": "Effacer le jeton enregistré",
      "Auth API URL": "URL API Auth",
      "Java API URL": "URL API Java",
      "Recommendation API URL": "URL API de recommandation",
      "Paste JWT token here without the word Bearer": "Collez ici le jeton JWT sans le mot Bearer",
      "Pick your category": "Choisissez votre catégorie",
      "Curated, refurbished tech with up to 2-year warranty.": "Technologie reconditionnée sélectionnée avec jusqu'à 2 ans de garantie.",
      "Phones": "Téléphones",
      "Laptops": "Ordinateurs portables",
      "Consoles": "Consoles",
      "Mobile Phones": "Téléphones mobiles",
      "Our best sellers": "Nos meilleures ventes",
      "Search here": "Rechercher ici",
      "Back": "Retour",
      "Cart": "Panier",
      "Categories": "Catégories",
      "Brands": "Marques",
      "Continue Shopping": "Continuer vos achats",
      "Your Bag": "Votre panier",
      "Review your selected devices before checkout.": "Vérifiez vos appareils sélectionnés avant le paiement.",
      "Order Summary": "Récapitulatif de commande",
      "Items": "Articles",
      "Shipping": "Livraison",
      "Free": "Gratuit",
      "Total": "Total",
      "Proceed to Checkout": "Passer au paiement",
      "Delivery Address": "Adresse de livraison",
      "Country": "Pays",
      "City": "Ville",
      "Postcode": "Code postal",
      "Nearby place": "Lieu à proximité",
      "Save Address To Backend": "Enregistrer l'adresse dans le backend",
      "Refresh Addresses": "Actualiser les adresses",
      "Storage": "Stockage",
      "Color": "Couleur",
      "Quantity": "Quantité",
      "Add to Bag": "Ajouter au panier",
      "Similar phones": "Téléphones similaires",
      "Similar laptops": "Ordinateurs similaires",
      "Similar consoles": "Consoles similaires",
      "Price unavailable": "Prix indisponible",
      "Remove": "Supprimer",
      "Checking backend connection...": "Vérification de la connexion backend...",
      "Using local product data.": "Utilisation des données produit locales.",
      "Recommendation service unavailable. Using local catalogue.": "Service de recommandation indisponible. Utilisation du catalogue local."
    },
    es: {
      "Light": "Claro",
      "Dark": "Oscuro",
      "Language": "Idioma",
      "Log in / Sign up": "Iniciar sesión / Registrarse",
      "Logout": "Cerrar sesión",
      "Login / Backend Connect": "Inicio de sesión / Conexión backend",
      "Demo Login": "Inicio de sesión demo",
      "Demo Sign Up": "Registro demo",
      "Backend Connection": "Conexión backend",
      "Email": "Correo electrónico",
      "Password": "Contraseña",
      "Login": "Iniciar sesión",
      "Sign Up": "Registrarse",
      "Don't have an account? Sign up": "¿No tienes cuenta? Regístrate",
      "Already have an account? Login": "¿Ya tienes cuenta? Inicia sesión",
      "Save Backend Settings": "Guardar configuración backend",
      "Clear Saved Token": "Borrar token guardado",
      "Auth API URL": "URL de API de autenticación",
      "Java API URL": "URL de API Java",
      "Recommendation API URL": "URL de API de recomendaciones",
      "Paste JWT token here without the word Bearer": "Pega aquí el token JWT sin la palabra Bearer",
      "Pick your category": "Elige tu categoría",
      "Curated, refurbished tech with up to 2-year warranty.": "Tecnología reacondicionada y seleccionada con hasta 2 años de garantía.",
      "Phones": "Teléfonos",
      "Laptops": "Portátiles",
      "Consoles": "Consolas",
      "Mobile Phones": "Teléfonos móviles",
      "Our best sellers": "Nuestros más vendidos",
      "Search here": "Buscar aquí",
      "Back": "Atrás",
      "Cart": "Carrito",
      "Categories": "Categorías",
      "Brands": "Marcas",
      "Continue Shopping": "Seguir comprando",
      "Your Bag": "Tu carrito",
      "Review your selected devices before checkout.": "Revisa tus dispositivos seleccionados antes de pagar.",
      "Order Summary": "Resumen del pedido",
      "Items": "Artículos",
      "Shipping": "Envío",
      "Free": "Gratis",
      "Total": "Total",
      "Proceed to Checkout": "Ir al pago",
      "Delivery Address": "Dirección de entrega",
      "Country": "País",
      "City": "Ciudad",
      "Postcode": "Código postal",
      "Nearby place": "Lugar cercano",
      "Save Address To Backend": "Guardar dirección en el backend",
      "Refresh Addresses": "Actualizar direcciones",
      "Storage": "Almacenamiento",
      "Color": "Color",
      "Quantity": "Cantidad",
      "Add to Bag": "Añadir al carrito",
      "Similar phones": "Teléfonos similares",
      "Similar laptops": "Portátiles similares",
      "Similar consoles": "Consolas similares",
      "Price unavailable": "Precio no disponible",
      "Remove": "Eliminar"
    },
    zh: {
      "Light": "浅色",
      "Dark": "深色",
      "Language": "语言",
      "Log in / Sign up": "登录 / 注册",
      "Logout": "退出登录",
      "Login / Backend Connect": "登录 / 后端连接",
      "Demo Login": "演示登录",
      "Demo Sign Up": "演示注册",
      "Backend Connection": "后端连接",
      "Email": "邮箱",
      "Password": "密码",
      "Login": "登录",
      "Sign Up": "注册",
      "Don't have an account? Sign up": "还没有账号？注册",
      "Already have an account? Login": "已有账号？登录",
      "Save Backend Settings": "保存后端设置",
      "Clear Saved Token": "清除已保存令牌",
      "Auth API URL": "认证 API 地址",
      "Java API URL": "Java API 地址",
      "Recommendation API URL": "推荐 API 地址",
      "Paste JWT token here without the word Bearer": "在此粘贴 JWT 令牌，不要包含 Bearer",
      "Pick your category": "选择你的分类",
      "Curated, refurbished tech with up to 2-year warranty.": "精选翻新科技产品，最长 2 年保修。",
      "Phones": "手机",
      "Laptops": "笔记本电脑",
      "Consoles": "游戏主机",
      "Mobile Phones": "移动电话",
      "Our best sellers": "热销产品",
      "Search here": "在这里搜索",
      "Back": "返回",
      "Cart": "购物车",
      "Categories": "分类",
      "Brands": "品牌",
      "Continue Shopping": "继续购物",
      "Your Bag": "你的购物袋",
      "Review your selected devices before checkout.": "结账前请检查你选择的设备。",
      "Order Summary": "订单摘要",
      "Items": "商品",
      "Shipping": "配送",
      "Free": "免费",
      "Total": "总计",
      "Proceed to Checkout": "前往结账",
      "Delivery Address": "收货地址",
      "Country": "国家",
      "City": "城市",
      "Postcode": "邮编",
      "Nearby place": "附近地点",
      "Save Address To Backend": "保存地址到后端",
      "Refresh Addresses": "刷新地址",
      "Storage": "存储",
      "Color": "颜色",
      "Quantity": "数量",
      "Add to Bag": "加入购物袋",
      "Price unavailable": "价格不可用",
      "Remove": "移除"
    },
    ru: {
      "Light": "Светлая",
      "Dark": "Тёмная",
      "Language": "Язык",
      "Log in / Sign up": "Войти / Регистрация",
      "Logout": "Выйти",
      "Login / Backend Connect": "Вход / Подключение backend",
      "Demo Login": "Демо-вход",
      "Demo Sign Up": "Демо-регистрация",
      "Backend Connection": "Подключение backend",
      "Email": "Эл. почта",
      "Password": "Пароль",
      "Login": "Войти",
      "Sign Up": "Регистрация",
      "Don't have an account? Sign up": "Нет аккаунта? Зарегистрируйтесь",
      "Already have an account? Login": "Уже есть аккаунт? Войдите",
      "Save Backend Settings": "Сохранить настройки backend",
      "Clear Saved Token": "Очистить сохранённый токен",
      "Auth API URL": "URL Auth API",
      "Java API URL": "URL Java API",
      "Recommendation API URL": "URL API рекомендаций",
      "Paste JWT token here without the word Bearer": "Вставьте JWT токен без слова Bearer",
      "Pick your category": "Выберите категорию",
      "Curated, refurbished tech with up to 2-year warranty.": "Отобранная восстановленная техника с гарантией до 2 лет.",
      "Phones": "Телефоны",
      "Laptops": "Ноутбуки",
      "Consoles": "Консоли",
      "Mobile Phones": "Мобильные телефоны",
      "Our best sellers": "Наши хиты продаж",
      "Search here": "Искать здесь",
      "Back": "Назад",
      "Cart": "Корзина",
      "Categories": "Категории",
      "Brands": "Бренды",
      "Continue Shopping": "Продолжить покупки",
      "Your Bag": "Ваша корзина",
      "Review your selected devices before checkout.": "Проверьте выбранные устройства перед оплатой.",
      "Order Summary": "Сводка заказа",
      "Items": "Товары",
      "Shipping": "Доставка",
      "Free": "Бесплатно",
      "Total": "Итого",
      "Proceed to Checkout": "Перейти к оплате",
      "Delivery Address": "Адрес доставки",
      "Country": "Страна",
      "City": "Город",
      "Postcode": "Почтовый индекс",
      "Nearby place": "Ближайшее место",
      "Save Address To Backend": "Сохранить адрес в backend",
      "Refresh Addresses": "Обновить адреса",
      "Storage": "Память",
      "Color": "Цвет",
      "Quantity": "Количество",
      "Add to Bag": "Добавить в корзину",
      "Price unavailable": "Цена недоступна",
      "Remove": "Удалить"
    }
  };

  const originalTexts = new WeakMap();
  const originalAttrs = new WeakMap();

  function t(text, language) {
    if (!text) return text;
    if (language === "en") return text;
    return (translations[language] && translations[language][text]) || text;
  }

  function translateTextNode(node, language) {
    const current = node.textContent;
    if (!current || !current.trim()) return;
    if (!originalTexts.has(node)) originalTexts.set(node, current);
    const original = originalTexts.get(node);
    const trimmed = original.trim();
    const translated = t(trimmed, language);
    node.textContent = original.replace(trimmed, translated);
  }

  function translateAttributes(language) {
    document.querySelectorAll("input[placeholder], textarea[placeholder], [aria-label], img[alt]").forEach((element) => {
      if (!originalAttrs.has(element)) {
        originalAttrs.set(element, {
          placeholder: element.getAttribute("placeholder"),
          ariaLabel: element.getAttribute("aria-label"),
          alt: element.getAttribute("alt")
        });
      }
      const original = originalAttrs.get(element);
      if (original.placeholder !== null) element.setAttribute("placeholder", t(original.placeholder, language));
      if (original.ariaLabel !== null) element.setAttribute("aria-label", t(original.ariaLabel, language));
      if (original.alt !== null) element.setAttribute("alt", t(original.alt, language));
    });
  }

  function translatePage(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.parentElement) return NodeFilter.FILTER_REJECT;
        const tag = node.parentElement.tagName;
        if (tag === "SCRIPT" || tag === "STYLE") return NodeFilter.FILTER_REJECT;
        if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => translateTextNode(node, language));
    translateAttributes(language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }

  function injectGlobalStyles() {
    const style = document.createElement("style");
    style.textContent = `
      body.dark {
        --bg: radial-gradient(circle at 10% 20%, #111827, #0b1220 50%, #0b1220);
        --card: #0f172a;
        --text: #e2e8f0;
        --muted: #cbd5e1;
        --accent: #1f2937;
        --accent-strong: #111827;
        --accent-dark: #e2e8f0;
        --border: rgba(71, 85, 105, 0.6);
        --brand: #60a5fa;
        --shadow: 0 20px 60px rgba(0,0,0,0.45);
      }
      body.dark .item,
      body.dark .address-card,
      body.dark .empty,
      body.dark .backend-panel,
      body.dark .summary,
      body.dark .modal,
      body.dark .side-tab,
      body.dark .filter-tab,
      body.dark .search-input,
      body.dark .search-result,
      body.dark .search-result img,
      body.dark .search-empty,
      body.dark .currency-select,
      body.dark .review-card,
      body.dark .feedback-card,
      body.dark .feedback-comment,
      body.dark .option-select,
      body.dark .quantity-select,
      body.dark .qty-select,
      body.dark .address-form input,
      body.dark textarea,
      body.dark input {
        background: #111827 !important;
        color: var(--text) !important;
        border-color: rgba(71, 85, 105, 0.75) !important;
      }
      body.dark .nav-btn,
      body.dark .bag-btn,
      body.dark .filter-btn,
      body.dark .ghost-btn,
      body.dark .remove-btn,
      body.dark .address-delete,
      body.dark .category-list button,
      body.dark .item-btn,
      body.dark button:not(.checkout-btn):not(.add-bag-btn):not(.theme-toggle):not(.language-toggle):not(.language-option) {
        background: linear-gradient(180deg, #111827, #0f172a) !important;
        color: var(--text) !important;
        border-color: rgba(71, 85, 105, 0.75) !important;
      }
      body.dark .price-tag {
        background: linear-gradient(135deg, #e2e8f0, #cbd5e1) !important;
        color: #0f172a !important;
      }
      body.dark .button-body span:first-child,
      body.dark .search-result strong,
      body.dark .search-result span,
      body.dark .search-result *,
      body.dark .meta,
      body.dark .item-btn span,
      body.dark .brand,
      body.dark .subtitle,
      body.dark .live-note,
      body.dark .checkout-section h2,
      body.dark .feedback-card h2,
      body.dark .summary h2,
      body.dark label,
      body.dark a {
        color: var(--text) !important;
      }
      body.dark select option {
        background: #111827 !important;
        color: #e2e8f0 !important;
      }
      .prefs-fab {
        position: fixed;
        left: 18px;
        bottom: 18px;
        display: flex;
        gap: 10px;
        z-index: 9999;
      }
      .prefs-fab button {
        min-width: 96px;
      }
      .language-toggle,
      .theme-toggle {
        padding: 10px 14px !important;
        border-radius: 12px !important;
        border: 1px solid var(--accent, #cbd5e1) !important;
        background: var(--card, #fff) !important;
        color: var(--text, #0f172a) !important;
        box-shadow: 0 10px 24px rgba(15,23,42,0.16) !important;
        cursor: pointer;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .prefs-fab .language-toggle,
      .prefs-fab .theme-toggle {
        position: static !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        top: auto !important;
        margin: 0 !important;
        width: auto !important;
        min-width: 110px;
        justify-content: center;
      }
      .language-popup {
        position: fixed;
        left: 18px;
        bottom: 74px;
        min-width: 180px;
        padding: 10px;
        border-radius: 14px;
        border: 1px solid rgba(148,163,184,0.45);
        background: var(--card, #fff);
        box-shadow: 0 20px 45px rgba(15,23,42,0.18);
        display: none;
        z-index: 10000;
      }
      .language-popup.show {
        display: grid;
        gap: 8px;
      }
      .language-option {
        width: 100%;
        padding: 10px 12px;
        border-radius: 10px;
        border: 1px solid rgba(148,163,184,0.45);
        background: transparent;
        color: inherit;
        text-align: left;
        cursor: pointer;
      }
      .auth-fab {
        position: fixed;
        top: 18px;
        left: 18px;
        z-index: 9999;
      }
      .auth-button {
        padding: 10px 14px !important;
        border-radius: 12px !important;
        border: 1px solid var(--accent, #cbd5e1) !important;
        background: var(--card, #fff) !important;
        color: var(--text, #0f172a) !important;
        box-shadow: 0 10px 24px rgba(15,23,42,0.16) !important;
        cursor: pointer;
        font-weight: 600;
      }
    `;
    document.head.appendChild(style);
  }

  function ensureThemeButton() {
    let themeButton = document.getElementById("theme-toggle");
    if (!themeButton) {
      themeButton = document.createElement("button");
      themeButton.id = "theme-toggle";
      themeButton.className = "theme-toggle";
      themeButton.type = "button";
      document.body.appendChild(themeButton);
    } else if (!themeButton.dataset.uiManaged) {
      const freshThemeButton = themeButton.cloneNode(true);
      freshThemeButton.dataset.uiManaged = "true";
      themeButton.replaceWith(freshThemeButton);
      themeButton = freshThemeButton;
    }
    return themeButton;
  }

  function renderControls(language, themeMode) {
    const themeButton = ensureThemeButton();
    let container = document.querySelector(".prefs-fab");
    if (!container) {
      container = document.createElement("div");
      container.className = "prefs-fab";
      document.body.appendChild(container);
    }

    if (!themeButton.parentElement || !themeButton.parentElement.classList.contains("prefs-fab")) {
      container.appendChild(themeButton);
    }

    let languageButton = document.getElementById("language-toggle");
    if (!languageButton) {
      languageButton = document.createElement("button");
      languageButton.id = "language-toggle";
      languageButton.className = "language-toggle";
      languageButton.type = "button";
      container.appendChild(languageButton);
    }

    if (container.firstElementChild?.id !== "theme-toggle") {
      container.prepend(themeButton);
    }

    if (!languageButton.parentElement || !languageButton.parentElement.classList.contains("prefs-fab")) {
      container.appendChild(languageButton);
    }

    let popup = document.getElementById("language-popup");
    if (!popup) {
      popup = document.createElement("div");
      popup.id = "language-popup";
      popup.className = "language-popup";
      popup.innerHTML = LANGUAGES.map(({ code, label }) => `<button class="language-option" type="button" data-lang="${code}">${label}</button>`).join("");
      document.body.appendChild(popup);
      popup.addEventListener("click", (event) => {
        const target = event.target.closest("[data-lang]");
        if (!target) return;
        localStorage.setItem(LANGUAGE_KEY, target.getAttribute("data-lang"));
        applyPreferences();
        popup.classList.remove("show");
      });
      document.addEventListener("click", (event) => {
        if (!popup.contains(event.target) && event.target !== languageButton) {
          popup.classList.remove("show");
        }
      });
      languageButton.addEventListener("click", () => {
        popup.classList.toggle("show");
      });
    }

    themeButton.textContent = themeMode === "dark" ? t("Dark", language) : t("Light", language);
    languageButton.textContent = t("Language", language);

    if (!themeButton.dataset.bound) {
      themeButton.dataset.bound = "true";
      themeButton.addEventListener("click", () => {
        const next = document.body.classList.contains("dark") ? "light" : "dark";
        localStorage.setItem(THEME_KEY, next);
        applyPreferences();
      });
    }
  }

  function renderAuthControl(language) {
    let container = document.querySelector(".auth-fab");
    if (!container) {
      container = document.createElement("div");
      container.className = "auth-fab";
      document.body.appendChild(container);
    }

    let authButton = document.getElementById("auth-button");
    if (!authButton) {
      authButton = document.createElement("button");
      authButton.id = "auth-button";
      authButton.className = "auth-button";
      authButton.type = "button";
      container.appendChild(authButton);
    }

    const hasSession = Boolean(localStorage.getItem("refurbtech-session"));
    authButton.textContent = hasSession ? t("Logout", language) : t("Log in / Sign up", language);

    if (!authButton.dataset.bound) {
      authButton.dataset.bound = "true";
      authButton.addEventListener("click", () => {
        if (localStorage.getItem("refurbtech-session")) {
          localStorage.removeItem("refurbtech-session");
        }
        window.location.href = "LoginPage.html";
      });
    }
  }

  function applyPreferences() {
    const themeMode = localStorage.getItem(THEME_KEY) || "light";
    const language = localStorage.getItem(LANGUAGE_KEY) || "en";
    document.body.classList.toggle("dark", themeMode === "dark");
    renderControls(language, themeMode);
    renderAuthControl(language);
    translatePage(language);
  }

  injectGlobalStyles();
  const observer = new MutationObserver(() => {
    const language = localStorage.getItem(LANGUAGE_KEY) || "en";
    translatePage(language);
  });

  document.addEventListener("DOMContentLoaded", () => {
    applyPreferences();
    observer.observe(document.body, { childList: true, subtree: true });
  });

  window.RefurbUI = {
    translate: applyPreferences,
    text: (value) => t(value, localStorage.getItem(LANGUAGE_KEY) || "en")
  };
})();
