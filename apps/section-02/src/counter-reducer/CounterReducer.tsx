import { FC, useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import { doIncreaseBy, doReset } from "./actions/actions";

export const initialState: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducer: FC = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    initialState
  );

  const handleIncreaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  const handleReset = () => {
    dispatch(doReset());
  };

  return (
    <>
      <h1>Counter Reducer Segmented {counter}</h1>
      <h2>Previous {previous}</h2>
      <h2>Changes {changes}</h2>
      <hr />
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleReset()}>0</button>
      <button onClick={() => handleIncreaseBy(-1)}>-1</button>
    </>
  );
};
