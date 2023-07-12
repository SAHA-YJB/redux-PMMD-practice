import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//이름, 함수
export const __plusNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (payload, thunkAPI) => {
    //수행하고 싶은 동작
    setTimeout(() => {
      thunkAPI.dispatch(plusNumber(payload));
    }, 3000);
  }
);
export const __minusNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (payload, thunkAPI) => {
    //수행하고 싶은 동작
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(payload));
    }, 3000);
  }
);

const initState = {
  number: 0,
};
// const PLUS = "counter/PLUS";
// const MINUS = "counter/MINUS";
// const MULTIPLY = "counter/MULTIPLY";
// const DIVIDE = "counter/DIVIDE";
// export const RESET = "counter/RESET";

// export const plusNumber = (payload) => {
//   return { type: PLUS, payload };
// };
// export const minusNumber = (payload) => {
//   return { type: MINUS, payload };
// };
// export const multiplyNumber = (payload) => {
//   return { type: MULTIPLY, payload };
// };
// export const divideNumber = (payload) => {
//   return { type: DIVIDE, payload };
// };

// const counter = (state = initState, action) => {
//   switch (action.type) {
// case PLUS:
//   return { number: state.number + action.payload };
// case MINUS:
//   return { number: state.number - action.payload };
// case MULTIPLY:
//   return { number: state.number * action.payload };
// case DIVIDE:
//   return { number: Math.floor(state.number / action.payload) };
//     case RESET:
//       return { number: 0 };
//     default:
//       return state;
//   }
// };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    plusNumber: (state, action) => {
      state.number = state.number + +action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
    multiplyNumber: (state, action) => {
      state.number = state.number * action.payload;
    },
    divideNumber: (state, action) => {
      state.number = Math.floor(state.number / action.payload);
    },
    selecetReset: (state, action) => {
      state.number = state.number % 0;
    },
  },
});

export default counterSlice.reducer;
export const { plusNumber, minusNumber, multiplyNumber, divideNumber } =
  counterSlice.actions;
