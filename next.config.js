const { withSentryConfig } = require ('@sentry/nextjs');
const SentryWebpackPluginOptions = {};

module.exports = withSentryConfig ({
  poweredByHeader: false,
}, SentryWebpackPluginOptions);
