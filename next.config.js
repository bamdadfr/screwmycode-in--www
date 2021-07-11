const { withSentryConfig } = require ('@sentry/nextjs')

const withTM = require ('next-transpile-modules') ([
    'speed-to-semitones',
    'speed-to-percentage',
])

const moduleExports = {
    'poweredByHeader': false,
}

const SentryWebpackPluginOptions = {}

module.exports = withTM (
    withSentryConfig (
        moduleExports,
        SentryWebpackPluginOptions,
    ),
)