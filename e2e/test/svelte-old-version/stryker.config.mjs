export default {
  reporters: ['html', 'json', 'progress'],
  testRunner: 'jest',
  concurrency: 2,
  testRunnerNodeArgs: ['--experimental-vm-modules'],
  timeoutMS: 60000,
  plugins: [import.meta.resolve('@d-es-ign/stryker-js-jest-runner')],
};
