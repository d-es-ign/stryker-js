import { PluginKind, declareClassPlugin } from '@d-es-ign/stryker-js-api/plugin';

export class MutationRunPlanReporter {
  /**
   * @type {import('@d-es-ign/stryker-js-api/report').MutationTestingPlanReadyEvent}
   */
  event;
  /**
   * @type { MutationRunPlanReporter }
   */
  static instance;

  constructor() {
    MutationRunPlanReporter.instance = this;
  }

  /**
   * @param {import('@d-es-ign/stryker-js-api/report').MutationTestingPlanReadyEvent} event
   * @returns {void}
   */
  onMutationTestingPlanReady(event) {
    this.event = event;
  }
}

export const strykerPlugins = [
  declareClassPlugin(
    PluginKind.Reporter,
    'mutation-run-plan',
    MutationRunPlanReporter,
  ),
];
