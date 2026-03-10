export default {
  testRunner: 'cucumber',
  plugins: [import.meta.resolve('@d-es-ign/stryker-js-cucumber-runner')],
  concurrency: 1,
  timeoutMS: 20000,
  reporters: ['json', 'html'],
};
