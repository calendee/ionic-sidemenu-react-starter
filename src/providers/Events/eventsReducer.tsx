import { State } from './eventsDefaultState';
import { ActionTypes, EventsActions } from './eventsActions';

const reducer = (state: State, action: EventsActions) => {
  switch (action.type) {
    case ActionTypes.RECORD_EVENT: {
      const count = state.count + 1;
      const events = [...state.events];
      events.push({
        event: action.payload.event,
        id: events.length,
        timestamp: Date.now(),
      });

      return { ...state, events, count };
    }
    case ActionTypes.RESET_EVENTS: {
      const count = 0;
      // PR Opportunity: Type this properly as an Event?
      const events: any = [];

      return { ...state, events, count };
    }
  }
  return state;
};

export default reducer;
