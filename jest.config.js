const transformModules = [
    'speed-to-semitones',
    'speed-to-percentage',
].join ('|')

module.exports = {
    'setupFilesAfterEnv': ['./jest.setup.js'],
    'moduleNameMapper': {
        '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    'testEnvironment': 'jsdom',
    'transformIgnorePatterns': [
        `/node_modules/(?!${transformModules}/)`,
    ],
}