import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blush-fashionable-swift-557.mypinata.cloud',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
