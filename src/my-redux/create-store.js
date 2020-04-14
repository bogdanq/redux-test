const randomString = () =>
  Math.random().toString(36).substring(7).split("").join(".");

const ActionTypes = {
  INIT: `@@redux/INIT${randomString()}`,
};

export const createStore = (initialState, reducer) => {
  let currentState = initialState;
  const listeners = [];

  const getState = () => currentState;
  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener());
    return action;
  };

  const subscribe = (listener) => listeners.push(listener);

  dispatch({ type: ActionTypes.INIT });

  return { getState, dispatch, subscribe };
};
