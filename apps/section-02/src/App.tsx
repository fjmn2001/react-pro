import { Counter, CounterBy, CounterEffect, CounterHook } from "./bases";
import { CounterReducer } from "./counter-reducer";

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
