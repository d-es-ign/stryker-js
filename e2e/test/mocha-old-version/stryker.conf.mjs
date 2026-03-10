export default {
  testRunner: 'mocha',
  concurrency: 1,
  coverageAnalysis: 'off',
  reporters: ['json', 'clear-text', 'html', 'event-recorder'],
  fileLogLevel: 'info',
  plugins: [import.meta.resolve('@d-es-ign/stryker-js-mocha-runner')],
};
