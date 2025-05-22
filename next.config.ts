import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    /* config options here */
    basePath: isProduction ? '/' : undefined,
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
