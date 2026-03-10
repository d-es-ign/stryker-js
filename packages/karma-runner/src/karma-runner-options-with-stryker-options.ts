import { StrykerOptions } from '@d-es-ign/stryker-js-api/core';

import { KarmaRunnerOptions } from '../src-generated/karma-runner-options.js';

export interface KarmaRunnerOptionsWithStrykerOptions
  extends KarmaRunnerOptions, StrykerOptions {}
