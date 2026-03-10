/// <reference types="@d-es-ign/stryker-js-api/ignore" />
import type babel from '@babel/core';

declare module '@d-es-ign/stryker-js-api/ignore' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface NodePath extends babel.NodePath {
    // Make "NodePath" extend the babe.NodePath interface
  }
}
