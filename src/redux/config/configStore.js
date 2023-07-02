import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

const rootReducers = combineReducers({
  counter
});
const store = createStore(rootReducers);

export default store;
