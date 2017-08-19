module.exports = {
    parser: 'postcss-comment',
    plugins: {
        'postcss-easy-import': {},
        'postcss-not-x-child': {},
        'postcss-sassy-mixins': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', 'ie >= 11'],
        },
        'postcss-units': {},
        'postcss-simple-vars': {},
        'postcss-for': {},
        'postcss-conditionals': {},
        'postcss-math': {},
        precss: {},                     // many of the imports this comes with are now manually imported above. The remaining plugins could be manually included and this could probably be removed but I'm too scares to touch it.
        'postcss-short': {},            // several shorthand css params
        'postcss-short-text': {},       // "    "    "
        'rucksack-css': {               // add more shorthand properties and aliases
            shorthandPosition: false,   // (already handled by 'postcss-short')
        },
        'postcss-assets': {
            loadPaths: ['src/img/', 'img/'],    // path(s) to image files (fills in `resolve()`) // FUTURE: The former is unneed for dev, yes?
        },
        'postcss-font-magician': {},    // auto-import declared fonts (RECOMMENDED: define _which_ fonts to grab or else expect whole stack)
        'postcss-font-awesome': {},
        // stylelint: {},               // uncomment to log all warnings to console
        'postcss-discard-comments': {},
        cssnano: {},
        'postcss-console': {},
    },
};
