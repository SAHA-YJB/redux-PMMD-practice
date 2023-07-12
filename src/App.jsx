import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { multiplyNumber, divideNumber } from "./redux/modules/counterSlice";
import { useState } from "react";
import { __plusNumber, __minusNumber } from "./redux/modules/counterSlice";
function App() {
  const [num, setNum] = useState("");

  const counterSelector = useSelector((state) => {
    return state.counterSlice;
  });

  const handlerInputChange = (e) => {
    setNum(+e.target.value);
  };

  const dispatch = useDispatch();

  const plusNum = () => dispatch(__plusNumber(+num));
  const minusNum = () => dispatch(__minusNumber(num));
  const multiplyNum = () => dispatch(multiplyNumber(num));
  const divideNum = () => dispatch(divideNumber(num));
  const reset = () => setNum(0);

  return (
    <div>
      <div>현재 숫자 : {counterSelector.number}</div>
      <input type="number" value={num} onChange={handlerInputChange} />
      <br />
      <button onClick={plusNum}>+</button>
      <button onClick={minusNum}>-</button>
      <button onClick={multiplyNum}>*</button>
      <button onClick={divideNum}>/</button>
      <button onClick={reset}>인풋초기화</button>
    </div>
  );
}

export default App;
