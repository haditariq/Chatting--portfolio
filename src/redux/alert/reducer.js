import { ALERT } from "./action_types";
const initialState = {
  msg: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  return {
    type: ALERT,
    msg: payload.msg
  };
}
