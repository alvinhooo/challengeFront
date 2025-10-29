/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // adicione outras variáveis de ambiente aqui se houver
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}