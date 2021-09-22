module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@services': './src/services'
      }
    }],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
