export const API_BASE = (import.meta.env.VITE_API_URL as string) || "https://java04sprint.onrender.com";

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
};

async function request<T = any>(path: string, options: RequestOptions = {}): Promise<T> {
  const base = API_BASE.replace(/\/$/, '');
  const url = path.startsWith('http') ? path : `${base}/${path.replace(/^\//, '')}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout
  try {
    const res = await fetch(url, {
      method: options.method ?? 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers ?? {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal,
    });
    if (!res.ok) {
      let errText = res.statusText;
      try {
        const errJson = await res.json();
        errText = errJson.message ?? JSON.stringify(errJson);
      } catch { }
      throw new Error(`HTTP ${res.status}: ${errText}`);
    }
    if (res.status === 204) return {} as T;
    const data = await res.json();
    return data as T;
  } finally {
    clearTimeout(timeoutId);
  }
}

export const api = {
  get: <T = any>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T = any>(path: string, body: any) => request<T>(path, { method: 'POST', body }),
  put: <T = any>(path: string, body: any) => request<T>(path, { method: 'PUT', body }),
  del: <T = any>(path: string) => request<T>(path, { method: 'DELETE' }),
};
