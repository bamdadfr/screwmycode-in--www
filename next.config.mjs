import {withSentryConfig} from '@sentry/nextjs';

const isEnvProduction = process.env.NODE_ENV === 'production';

const configuration = {
  poweredByHeader: false,
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
  webpack: (config) => {
    config = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.glsl$/i,
            type: 'asset/source',
          },
        ],
      },
    };
    return config;
  },
};

if (!isEnvProduction) {
  configuration.images.remotePatterns.push({
    protocol: 'http',
    hostname: 'localhost',
    port: '8000',
    pathname: '/**',
  });
}

const SentryWebpackPluginOptions = {};
export default withSentryConfig(configuration, SentryWebpackPluginOptions);
