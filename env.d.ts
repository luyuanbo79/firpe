/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  // 添加你的其他环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
