import { PartialStrykerOptions } from '@d-es-ign/stryker-js-api/core';
import { Immutable } from '@d-es-ign/stryker-js-util';

export interface CustomInitializer {
  readonly name: string;
  createConfig(): Promise<CustomInitializerConfiguration>;
}

export interface CustomInitializerConfiguration {
  config: Immutable<PartialStrykerOptions>;
  guideUrl: string;
  dependencies: string[];
  additionalConfigFiles?: Record<string, string>;
}
