import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { plusNumber, minusNumber } from "./redux/modules/counter";
import { multiplyNumber, divideNumber, RESET } from "./redux/modules/counter";
import { useState } from "react";
function App() {
  const [num, setNum] = useState('');
  const counterSelector = useSelector((state) => {
    return state.counter;
  });
  console.log(counterSelector.number);

  const handlerInputChange = (e) => {
    setNum(+e.target.value);

  };
  const dispatch = useDispatch();
  const plusNum = () => dispatch(plusNumber(num));
  const minusNum = () => dispatch(minusNumber(num));
  const multiplyNum = () => dispatch(multiplyNumber(num));
  const divideNum = () => dispatch(divideNumber(num));
  const reset = () => setNum(0);
  const selectReset = () => dispatch({type:RESET});
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
      <button onClick={selectReset}>셀렉트초기화</button>
    </div>
  );
}

export default App;
