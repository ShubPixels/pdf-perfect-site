/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_ID?: string;
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_ENABLE_LEARN_REVIEW?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.HEIC" {
  const src: string;
  export default src;
}
declare module "*.heic" {
  const src: string;
  export default src;
}
