import { Counter, CounterBy, CounterEffect } from "./bases";

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
    </>
  );
}

export default App;
