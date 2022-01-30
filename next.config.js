const {withSentryConfig} = require('@sentry/nextjs');
const isEnvProduction = process.env.NODE_ENV === 'production';

const configuration = {
  poweredByHeader: false,
  outputFileTracing: false,
  images: {
    domains: [
      'api.screwmycode.in',
      'i1.sndcdn.com',
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
  configuration.images.domains = [
    ...configuration.images.domains,
    'localhost',
    '192.168.1.102',
  ];
}

const SentryWebpackPluginOptions = {};
module.exports = withSentryConfig(configuration, SentryWebpackPluginOptions);
