import { TestRunnerCapabilities } from '@d-es-ign/stryker-js-api/test-runner';
import { testInjector } from '@d-es-ign/stryker-js-test-helpers';
import { expect } from 'chai';

import {
  CucumberTestRunner,
  guardForCucumberJSVersion,
} from '../../src/cucumber-test-runner.js';
import * as pluginTokens from '../../src/plugin-tokens.js';

describe(CucumberTestRunner.name, () => {
  function createSut(): CucumberTestRunner {
    return testInjector.injector
      .provideValue(pluginTokens.globalNamespace, '__stryker2__' as const)
      .injectClass(CucumberTestRunner);
  }

  describe('capabilities', () => {
    it('should communicate reloadEnvironment =false', () => {
      const expectedCapabilities: TestRunnerCapabilities = {
        reloadEnvironment: false,
      };
      expect(createSut().capabilities()).deep.eq(expectedCapabilities);
    });
  });

  describe(guardForCucumberJSVersion.name, () => {
    it('should allow installed cucumber version', () => {
      expect(guardForCucumberJSVersion()).not.throw;
    });
    it('should allow v8.0.0', () => {
      expect(guardForCucumberJSVersion('8.0.0')).not.throw;
    });
    it('should throw for v7', () => {
      expect(() => guardForCucumberJSVersion('7.99.99')).throws(
        '@d-es-ign/stryker-js-cucumber-runner only supports @cucumber/cucumber@>=8.0.0. Found v7.99.99',
      );
    });
  });
});
