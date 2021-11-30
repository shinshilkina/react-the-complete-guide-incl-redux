import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increase(1));
    // dispatch({ type: "increase", count: 1 });
  };

  const incrementBy5Handler = () => {
    dispatch(counterActions.increase(5));
    // dispatch({ type: "increase", count: 5 });
  };

  const decrementHandler = () => {
    dispatch(counterActions.increase(-1));
    // dispatch({ type: "increase", count: -1 });
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleShowCounter(1));
    // dispatch({ type: "toggleShowCounter" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
