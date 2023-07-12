import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counter";

// const rootReducers = combineReducers({
//   counter
// });
// const store = createStore(rootReducers);

const store = configureStore({
  reducer: { counter },
});

export default store;
