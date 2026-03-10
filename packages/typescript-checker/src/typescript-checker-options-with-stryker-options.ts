import type { StrykerOptions } from '@d-es-ign/stryker-js-api/core';

import type { TypescriptCheckerPluginOptions } from '../src-generated/typescript-checker-options.js';

export interface TypescriptCheckerOptionsWithStrykerOptions
  extends TypescriptCheckerPluginOptions, StrykerOptions {}
