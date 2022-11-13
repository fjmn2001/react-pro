import { FC, useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const initialState: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increaseBy":
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
    default:
      return state;
  }
};

export const CounterReducer: FC = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    initialState
  );

  const handleIncreaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <h1>Counter Reducer {counter}</h1>
      <h2>Previous {previous}</h2>
      <h2>Changes {changes}</h2>
      <hr />
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleReset()}>0</button>
      <button onClick={() => handleIncreaseBy(-1)}>-1</button>
    </>
  );
};
