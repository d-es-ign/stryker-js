import { Mutant } from '@d-es-ign/stryker-js-api/core';

import { File } from './file.js';

export interface InstrumentResult {
  files: readonly File[];
  mutants: readonly Mutant[];
}
