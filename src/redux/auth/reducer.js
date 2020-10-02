import { LOGOUT, REGISTER } from "./action_types";
const initialState = {
  isAuthenticated: null,
  loading: true,
  username: null,
  _id: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log({payload})
  switch (type) {
    case REGISTER:
      return {
        username: payload.username,
        isAuthenticated: true,
        _id: payload._id,
        loading: false
      };
    case LOGOUT:
      localStorage.setItem("token", null);
      return {
        ...initialState,
        token: null
      };
    default:
      return state;
  }
}
