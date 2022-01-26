const {withSentryConfig} = require('@sentry/nextjs');

const configuration = {
  poweredByHeader: false,
  outputFileTracing: false,
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
module.exports = withSentryConfig(configuration, SentryWebpackPluginOptions);
