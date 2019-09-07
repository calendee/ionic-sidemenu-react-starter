// Based on https://ionicframework.com/blog/a-state-management-pattern-for-ionic-react-with-react-hooks/

import React, { createContext, useEffect, useReducer } from 'react';

import reducer from './reducer';
import defaultState from './defaultState';
import reducerLogger from '../../utils/reducerLogger';

import { State } from './defaultState';
import { ActionTypes, Payloads } from './actions';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface IContextProps {
  state: State;
  dispatch: ({ type }: { type: ActionTypes; payload: Payloads }) => void;
}

let EventsContext = createContext({} as IContextProps);

const loggerReducer = reducerLogger('EventsContext State Changed', reducer);

const EventsContextProvider: React.FC = props => {
  const [data, setData] = useLocalStorage('data', defaultState);
  const [state, dispatch] = useReducer(loggerReducer, data);
  const value = { state, dispatch };

  useEffect(() => {
    setData(state);
  }, [state, setData]);

  return (
    <EventsContext.Provider value={value}>
      {props.children}
    </EventsContext.Provider>
  );
};

let EventsContextConsumer = EventsContext.Consumer;

export { EventsContext, EventsContextProvider, EventsContextConsumer };
