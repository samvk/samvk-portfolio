// =========================== Custom Properties=========================//
// custom properties
const ignoreProperties = [
    'text',
    'size',
    'border-top-radius',
    'border-bottom-radius',
    'font-awesome',
    '//',
];

// custom pseudo classes
const ignorePseudoClasses = [
    // nth selectors
    'at-least',
    'at-most',
    'between',
    'exactly',
    // CSS Modules scoping
    'global',
    'local',
];

// custom selectors
const ignoreSelectorTypes = [
    '/^[0-9]+$/', // fix `:between(#)` rules from error-ing
];

// =========================== Order ====================================//

const propertiesTypeOrder = [];

const propertiesOrder = [];

// ==================================================================//

module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-order',
    ],
    rules: {
        indentation: 4,
        'selector-list-comma-newline-after': null,
        'at-rule-empty-line-before': null,
        'rule-empty-line-before': null,     // rules should be seperated by new line unless a list of similar grouped attributes (e.g. h1-h6)
        'color-named': 'never',
        'color-hex-case': 'upper',
        'color-hex-length': 'long',
        // '!important' is sometimes necessary, but you should still be shamed for it
        'declaration-no-important': true,
        'declaration-property-unit-blacklist': {
            '/^animation/': ['s'],   // animations should be defined in 'ms'
        },
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ignoreProperties,
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ignorePseudoClasses,
            },
        ],
        'selector-type-no-unknown': [
            true,
            {
                ignoreTypes: ignoreSelectorTypes,
            },
        ],
        'order/order': propertiesTypeOrder,
        'order/properties-order': propertiesOrder,
        // max: 1 should be the standard. But 2 lines for seperate "sections" is acceptable
        'max-empty-lines': [
            2,
            {
                ignore: 'comments',
            },
        ],
        // single quotes wherever recommended
        'string-quotes': 'single',
        'no-invalid-double-slash-comments': null,
        'font-family-name-quotes': 'always-where-recommended',
        'function-url-quotes': 'always',
        'selector-attribute-quotes': 'always',
        'block-opening-brace-newline-after': null,
        'block-closing-brace-newline-before': null,
        // no vendor prefixes
        'at-rule-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,
    },
};
