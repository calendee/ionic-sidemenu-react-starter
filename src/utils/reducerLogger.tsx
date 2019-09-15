const reducerLogger = (msg: string, reducer: Function) => {
  const logThenReduce = (state: any, action: any) => {
    const { loggingEnabled } = state;

    if (loggingEnabled) {
      console.group(msg);
      console.log('%cAction:', 'color: #00A7F7; font-weight: 700;', action);
      console.log(
        '%cOriginal State:',
        'color: #9E9E9E; font-weight: 700;',
        state,
      );
      console.log(
        '%cNew State:',
        'color: #47B04B; font-weight: 700;',
        reducer(state, action),
      );
      console.groupEnd();
    }
    return reducer(state, action);
  };
  return logThenReduce;
};

export default reducerLogger;
