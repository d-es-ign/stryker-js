const { mixinJestEnvironment } = require('@d-es-ign/stryker-js-jest-runner');
const { TestEnvironment } = require('jest-environment-node');

module.exports = mixinJestEnvironment(TestEnvironment);
