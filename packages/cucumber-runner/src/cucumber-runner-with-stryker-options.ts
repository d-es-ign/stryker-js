import { StrykerOptions } from '@d-es-ign/stryker-js-api/core';

import { CucumberRunnerOptions } from '../src-generated/cucumber-runner-options.js';

export interface CucumberRunnerWithStrykerOptions
  extends StrykerOptions, CucumberRunnerOptions {}
