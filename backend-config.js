(() => {
  const STORAGE_KEY = 'refurbtech-backend-config';
  const defaults = {
    authBaseUrl: 'http://127.0.0.1:5050',
    javaBaseUrl: 'http://localhost:8081',
    recommendationBaseUrl: 'http://localhost:8002',
    token: ''
  };

  const readConfig = () => {
    try {
      return { ...defaults, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
    } catch {
      return { ...defaults };
    }
  };

  const writeConfig = (nextConfig) => {
    const merged = { ...readConfig(), ...nextConfig };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  };

  const trimTrailingSlash = (value) => String(value || '').replace(/\/+$/, '');

  const buildUrl = (baseUrl, path) => {
    const normalizedBase = trimTrailingSlash(baseUrl);
    const normalizedPath = String(path || '').startsWith('/') ? path : `/${path || ''}`;
    return `${normalizedBase}${normalizedPath}`;
  };

  const createHeaders = (options = {}) => {
    const config = readConfig();
    const headers = new Headers(options.headers || {});
    if (options.json !== false && !headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }
    if (config.token && !headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${config.token}`);
    }
    return headers;
  };

  const apiFetch = async (service, path, options = {}) => {
    const config = readConfig();
    const baseUrl = service === 'recommendation' ? config.recommendationBaseUrl : config.javaBaseUrl;
    const response = await fetch(buildUrl(baseUrl, path), {
      ...options,
      headers: createHeaders(options)
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(body || `${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return response.json();
    }
    return response.text();
  };

  window.RefurbBackend = {
    defaults,
    getConfig: readConfig,
    saveConfig: writeConfig,
    clearToken: () => writeConfig({ token: '' }),
    hasToken: () => Boolean(readConfig().token),
    buildUrl,
    apiFetch
  };
})();
