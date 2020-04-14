import { CHANGE_INTERVAL } from "./store";

export const changeInterval = value => ({
  type: CHANGE_INTERVAL,
  payload: value
});
