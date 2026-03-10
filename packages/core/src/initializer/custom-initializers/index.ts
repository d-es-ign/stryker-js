import {
  BaseContext,
  commonTokens,
  Injector,
} from '@d-es-ign/stryker-js-api/plugin';
import type { resolveFromCwd } from '@d-es-ign/stryker-js-util';

import { coreTokens } from '../../di/index.js';

import { AngularInitializer } from './angular-initializer.js';
import { CustomInitializer } from './custom-initializer.js';
import { ReactInitializer } from './react-initializer.js';
import { VueJsInitializer } from './vue-js-initializer.js';
import { SvelteInitializer } from './svelte-initializer.js';

interface CustomInitializerContext extends BaseContext {
  [coreTokens.execa]: typeof import('execa').execaCommand;
  [coreTokens.resolveFromCwd]: typeof resolveFromCwd;
}

export function createInitializers(
  injector: Injector<CustomInitializerContext>,
): CustomInitializer[] {
  return [
    injector.injectClass(AngularInitializer),
    injector.injectClass(ReactInitializer),
    injector.injectClass(SvelteInitializer),
    injector.injectClass(VueJsInitializer),
  ];
}
createInitializers.inject = [commonTokens.injector] as const;
