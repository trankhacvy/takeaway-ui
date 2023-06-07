import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })]], {
  reactStrictMode: true,
  experimental: { instrumentationHook: true, appDir: false },
  rewrites() {
    return [{ source: "/ping", destination: "/api/health" }]
  },
})

export default config
