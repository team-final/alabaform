/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      externals: {
        sharp: 'commonjs sharp',
      },
    })
    return config
  },
  pageExtensions: ['tsx', 'ts'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
}

export default nextConfig
