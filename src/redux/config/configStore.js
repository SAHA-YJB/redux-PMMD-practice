import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../modules/counterSlice";

// const rootReducers = combineReducers({
//   counter
// });
// const store = createStore(rootReducers);

const store = configureStore({
  reducer: { counterSlice },
});

export default store;
