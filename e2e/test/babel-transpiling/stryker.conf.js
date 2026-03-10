module.exports = {
  mutate: [
    'src/*.js'
  ],
  testRunner: 'mocha',
  coverageAnalysis: 'off',
  buildCommand: 'npm run build',
  timeoutMS: 60000,
  reporters: ['clear-text', 'html', 'json', 'progress'],
  concurrency: 1,
  logLevel: 'info',
  plugins: [
    '@d-es-ign/stryker-js-mocha-runner'
  ]
};
