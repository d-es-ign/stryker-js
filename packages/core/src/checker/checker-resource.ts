import { CheckResult } from '@d-es-ign/stryker-js-api/check';
import { Mutant } from '@d-es-ign/stryker-js-api/core';

import { Resource } from '../concurrent/index.js';

export interface CheckerResource extends Resource {
  check(
    checkerName: string,
    mutant: Mutant[],
  ): Promise<Record<string, CheckResult>>;
  group(checkerName: string, mutants: Mutant[]): Promise<string[][]>;
}
