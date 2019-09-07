export enum ActionTypes {
  RECORD_EVENT = 'RECORD_EVENT',
  RESET_EVENTS = 'RESET_EVENTS',
}

export interface RecordEventPayload {
  event: string;
}

interface RecordEventAction {
  type: 'RECORD_EVENT';
  payload: RecordEventPayload;
}

interface ResetEventsAction {
  type: 'RESET_EVENTS';
  payload: null;
}

// Discriminated Unions used by reducer
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
export type EventsActions = RecordEventAction | ResetEventsAction;

export type Payloads = RecordEventPayload | null;
