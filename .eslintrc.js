module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
        'jest': true,

    },
    'extends': [
        'airbnb',
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        'indent': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/forbid-prop-types': [1],
        'react/no-unescaped-entities': [0],
        'jsx-quotes': [2, 'prefer-single'],
        'object-shorthand': [2, 'methods'],
        'max-len': [0],
        'arrow-parens': [2, 'always'],
        'react/prop-types': [1],
        'no-unused-vars': [1],
        'no-param-reassign': [0],
        'no-plusplus': [0],
        'jsx-a11y/no-static-element-interactions': [0],
        'jsx-a11y/label-has-for': [0],
    },
}
