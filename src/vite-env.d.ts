/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string // Define your custom environment variables
  readonly VITE_APP_NAME: string
  // Add more variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
