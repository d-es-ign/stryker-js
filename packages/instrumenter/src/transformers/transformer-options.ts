import { Ignorer } from '@d-es-ign/stryker-js-api/ignore';

import { MutatorOptions } from '../mutators/index.js';

export interface TransformerOptions extends MutatorOptions {
  ignorers: Ignorer[];
}
