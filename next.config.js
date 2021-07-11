const { withSentryConfig } = require ('@sentry/nextjs')

const withTM = require ('next-transpile-modules') ([
    'speed-to-semitones',
    'speed-to-percentage',
])

const moduleExports = withTM ({
    'poweredByHeader': false,
})

const SentryWebpackPluginOptions = {}

module.exports = withSentryConfig (moduleExports, SentryWebpackPluginOptions)