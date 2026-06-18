export default {
  extends: ['stylelint-config-standard'],
  defaultSeverity: 'error',
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'color-hex-length': 'long',
    'custom-property-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-property-value-no-unknown': true,
    'font-family-name-quotes': 'always-where-required',
    'font-family-no-duplicate-names': true,
    'font-weight-notation': 'numeric',
    'length-zero-no-unit': true,
    'media-feature-range-notation': 'context',
    'no-descending-specificity': true,
    'number-max-precision': 3,
    'property-no-vendor-prefix': true,
    'selector-max-compound-selectors': 4,
    'selector-max-id': 1,
    'selector-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    'value-no-vendor-prefix': true
  }
}
