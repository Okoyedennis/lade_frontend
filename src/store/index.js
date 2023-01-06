import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/user";

const allReducer = combineReducers({
  user: userReducer,
});

const store = createStore(allReducer);
export default store;
