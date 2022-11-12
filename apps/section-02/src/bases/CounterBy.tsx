import { FC, useState } from "react";

interface Props {
  initialValue?: number;
}

export const CounterBy: FC<Props> = ({ initialValue = 5 }) => {
  const [counter, setCounter] = useState({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    setCounter((prev) => ({
      counter: prev.counter + value,
      clicks: prev.clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter By {counter.counter}</h1>
      <h2>Clicks: {counter.clicks}</h2>
      <hr />
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
