import Stryker from '@d-es-ign/stryker-js-core';

new Stryker({
  testRunner: 'mocha',
  concurrency: 1,
  plugins: ['@d-es-ign/stryker-js-mocha-runner'],
}).runMutationTest().then(() => console.log('done')).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
