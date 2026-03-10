import { StrykerOptions } from '@d-es-ign/stryker-js-api/core';

import { StrykerVitestRunnerOptions } from '../src-generated/vitest-runner-options.js';

export interface VitestRunnerOptionsWithStrykerOptions
  extends StrykerVitestRunnerOptions, StrykerOptions {}
