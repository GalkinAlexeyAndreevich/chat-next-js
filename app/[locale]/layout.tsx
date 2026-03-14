import { NextIntlClientProvider } from "next-intl"
import { getMessages, getLocale, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

function hasLocale(locales: readonly string[], locale: string) {
  return locales.includes(locale)
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const validLocale = locale as (typeof routing.locales)[number]
  setRequestLocale(validLocale)

  const messages = await getMessages()
  const currentLocale = await getLocale()

  return (
    <NextIntlClientProvider locale={currentLocale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
