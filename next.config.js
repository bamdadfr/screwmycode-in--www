const withTM = require ('next-transpile-modules') ([
    'speed-to-semitones',
    'speed-to-percentage',
])

module.exports = withTM ()