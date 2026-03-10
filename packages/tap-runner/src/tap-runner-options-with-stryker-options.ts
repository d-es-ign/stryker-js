import { StrykerOptions } from '@d-es-ign/stryker-js-api/core';

import { StrykerTapRunnerOptions } from '../src-generated/tap-runner-options.js';

export interface TapRunnerOptionsWithStrykerOptions
  extends StrykerTapRunnerOptions, StrykerOptions {}
