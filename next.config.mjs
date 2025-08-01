const isEnvProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.screwmycode.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (c) => {
    c = {
      ...c,
      module: {
        ...c.module,
        rules: [
          ...c.module.rules,
          {
            test: /\.glsl$/i,
            type: 'asset/source',
          },
        ],
      },
    };
    return c;
  },
};

if (!isEnvProduction) {
  config.images.remotePatterns.push({
    protocol: 'http',
    hostname: 'localhost',
    port: '8000',
    pathname: '/**',
  });
}

export default config;
