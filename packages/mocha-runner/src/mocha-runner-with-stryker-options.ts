import { StrykerOptions } from '@d-es-ign/stryker-js-api/core';

import { MochaRunnerOptions } from '../src-generated/mocha-runner-options.js';

export interface MochaRunnerWithStrykerOptions
  extends StrykerOptions, MochaRunnerOptions {}
