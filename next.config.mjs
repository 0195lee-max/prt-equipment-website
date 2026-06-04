/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // Vercel-native optimization (AVIF/WebP, responsive sizing, lazy
    // loading). Source assets are untouched. 90 is allowed so the
    // upscaled hero stays sharp; everything else uses the default 75.
    qualities: [75, 90],
  },
}

export default nextConfig
