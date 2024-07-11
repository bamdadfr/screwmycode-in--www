const {withSentryConfig} = require('@sentry/nextjs');
const isEnvProduction = process.env.NODE_ENV === 'production';

const configuration = {
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['api.screwmycode.in'],
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
  configuration.images.domains = [...configuration.images.domains, 'localhost'];
}

const SentryWebpackPluginOptions = {};
module.exports = withSentryConfig(configuration, SentryWebpackPluginOptions);
