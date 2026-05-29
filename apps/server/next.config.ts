import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  outputFileTracingIncludes: {
    '/api/**/*': [
      './components/**/*',
      './themes/**/*',
      './hooks/**/*'
    ],
  },

}

export default nextConfig
