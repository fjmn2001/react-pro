import { FC, useState } from "react";

interface Props {
  initialValue?: number;
}

export const Counter: FC<Props> = ({ initialValue = 5 }) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const handleClick = (value: number) => {
    setCounter((prev) => prev + value);
  };

  return (
    <>
      <h1>Counter {counter}</h1>
      <hr />
      <button onClick={() => handleClick(1)}>+1</button>
    </>
  );
};
