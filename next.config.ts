import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./i18n/request.ts",
  experimental: {
    createMessagesDeclaration: "./locales/ru.json",
  },
});

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
};

export default withNextIntl(nextConfig);
