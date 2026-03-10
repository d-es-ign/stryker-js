import { LogLevel } from '@d-es-ign/stryker-js-api/core';
import { LoggingEvent } from './logging-event.js';

export interface LoggingSink {
  log(event: LoggingEvent): void;
  isEnabled(level: LogLevel): boolean;
}
