/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Access key pública do Web3Forms (formulário de contato). */
  readonly VITE_WEB3FORMS_ACCESS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
