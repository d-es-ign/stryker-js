module.exports = {
  $schema:
    '../../node_modules/@d-es-ign/stryker-js-core/schema/stryker-schema.json',
  mutate: ['sampleProject/src/**'],
  karma: {
    config: {
      files: ['sampleProject/**'],
      plugins: [require.resolve('karma-jasmine'), require.resolve('karma-chrome-launcher')],
    },
  },
  plugins: ['@d-es-ign/stryker-js-karma-runner'],
  testRunner: 'karma',
  logLevel: 'info',
  fileLogLevel: 'warn',
  concurrency: 2,
};
