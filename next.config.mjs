import {withSentryConfig} from '@sentry/nextjs';

const isEnvProduction = process.env.NODE_ENV === 'production';

const configuration = {
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      !isEnvProduction && {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
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

const SentryWebpackPluginOptions = {};
export default withSentryConfig(configuration, SentryWebpackPluginOptions);
