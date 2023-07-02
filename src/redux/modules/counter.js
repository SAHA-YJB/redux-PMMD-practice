const initState = {
  number: 0,
};
const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";
const MULTIPLY = "counter/MULTIPLY";
const DIVIDE = "counter/DIVIDE";
export const RESET = "counter/RESET";

export const plusNumber = (payload) => {
  return { type: PLUS, payload };
};
export const minusNumber = (payload) => {
  return { type: MINUS, payload };
};
export const multiplyNumber = (payload) => {
  return { type: MULTIPLY, payload };
};
export const divideNumber = (payload) => {
  return { type: DIVIDE, payload };
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case PLUS:
      return { number: state.number + action.payload };
    case MINUS:
      return { number: state.number - action.payload };
    case MULTIPLY:
      return { number: state.number * action.payload };
    case DIVIDE:
      return { number: Math.floor(state.number / action.payload) };
    case RESET:
      return { number: 0 };
    default:
      return state;
  }
};

export default counter;
