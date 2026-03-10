import { requireResolve } from '@d-es-ign/stryker-js-util';

/**
 * The local karma export to be used inside this plugin
 */
export const karma = requireResolve('karma') as typeof import('karma');
