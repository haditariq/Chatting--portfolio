import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import register from './auth/reducer'

const middleware = [thunk];
const rootReducer = combineReducers({
  register
});

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
