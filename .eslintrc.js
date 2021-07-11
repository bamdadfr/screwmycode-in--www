module.exports = {
    'extends': '@bamdadsabbagh/eslint-config',
    'plugins': [
        'react-hooks',
        'testing-library',
        'jest-dom',
    ],
    'overrides': [
        {
            // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
            'files': ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(test|spec)\\.(.*\\.)?[jt]s?(x)'],
            'extends': ['plugin:testing-library/react'],
        },
    ],
    'rules': {
        'no-use-before-define': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
    },
}