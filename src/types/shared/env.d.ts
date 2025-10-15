/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE: string
  // 👇 如果你有其他環境變數也可以一起加
  // readonly VITE_API_KEY: string
  // readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
