import { Counter, CounterBy } from "./bases";

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <CounterBy />
    </>
  );
}

export default App;
