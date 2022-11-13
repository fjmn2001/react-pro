import {
  Counter,
  CounterBy,
  CounterEffect,
  CounterHook,
  CounterReducer,
} from "./bases";

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
    </>
  );
}

export default App;
