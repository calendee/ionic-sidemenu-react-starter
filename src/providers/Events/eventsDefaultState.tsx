export interface Event {
  event: string;
  id: number;
  timestamp: number;
}

export interface State {
  count: number;
  events: Event[];
  loggingEnabled: boolean;
}

const defaultState: State = {
  count: 0,
  events: [],
  loggingEnabled: process.env.NODE_ENV === 'production' ? false : true,
};

export default defaultState;
