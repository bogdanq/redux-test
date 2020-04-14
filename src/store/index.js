import { createStore } from "../my-redux/create-store";

export const CHANGE_INTERVAL = "CHANGE_INTERVAL";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      return {
        ...state,
        currentInterval: state.currentInterval + action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  currentInterval: 0
};

export const store = createStore(initialState, reducer);
