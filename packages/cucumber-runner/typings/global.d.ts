/* eslint-disable no-var */
// Use "var" instead of let, otherwise we are not expanding the `globalThis`
declare var __stryker__:
  | import('@d-es-ign/stryker-js-api/core').InstrumenterContext
  | undefined;
declare var __stryker2__:
  | import('@d-es-ign/stryker-js-api/core').InstrumenterContext
  | undefined;
declare var mockedClock: { tick(ms: number): void };
