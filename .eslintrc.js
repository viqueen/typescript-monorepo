// eslint-disable-next-line no-undef
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'react',
        '@monorepo-build',
        '@atlaskit/design-system',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:@atlaskit/design-system/recommended',
    ],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        '@monorepo-build/import-modules': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '_',
            },
        ],
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                pathGroups: [
                    {
                        pattern: '{react,react-*}',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
            },
        ],
        'import/no-unresolved': [
            'error',
            {
                ignore: ['estree'],
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.tsx'],
            },
        },
        react: {
            version: '18.2.0',
        },
    },
};
