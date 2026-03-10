import { schema } from '@d-es-ign/stryker-js-api/core';

export interface MutationScoreOnlyReport {
  mutationScore: number;
}
export type Report = MutationScoreOnlyReport | schema.MutationTestResult;
