import { FileDescription } from '@d-es-ign/stryker-js-api/core';

export interface File extends FileDescription {
  name: string;
  content: string;
}
