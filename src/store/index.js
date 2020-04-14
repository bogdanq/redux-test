import { createStore } from "../my-redux/create-store";

export const CHANGE_INTERVAL = "CHANGE_INTERVAL";

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      const nextInterval = state.currentInterval + action.payload;

      return {
        ...state,
        currentInterval: nextInterval <= 0 ? 1 : nextInterval,
      };

    default:
      return state;
  }
};

const initialState = {
  currentInterval: 1,
};

export const store = createStore(initialState, reducer);
