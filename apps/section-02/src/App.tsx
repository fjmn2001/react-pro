import { Counter, CounterBy, CounterEffect, CounterHook } from "./bases";

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
    </>
  );
}

export default App;
