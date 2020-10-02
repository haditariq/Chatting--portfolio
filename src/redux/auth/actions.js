import axios from "axios";
import KEYS from "../../configs/KEYS";
import {REGISTER} from './action_types';

export const register = ({ username }) => async dispatch => {
  try {
    const request = await axios.get(`${KEYS.API_URL}user?username=${username}`);
    dispatch({
      type: REGISTER,
      payload: request.data
    })
  } catch (e) {
    console.log("catch", e.response.data.errors);
  }
};
