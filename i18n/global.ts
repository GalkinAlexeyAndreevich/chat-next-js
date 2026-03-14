import { routing } from "./routing"
import type messages from "../locales/ru.json"

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof messages
  }
}

export {}
