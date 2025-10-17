/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_API_BASE: string
}

type ImportMeta = {
  readonly env: ImportMetaEnv
}
