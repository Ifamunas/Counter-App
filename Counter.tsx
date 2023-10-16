import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";
import { RootState } from "./store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  const handleReset = () => {
    dispatch(reset());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2> Counter: {count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;