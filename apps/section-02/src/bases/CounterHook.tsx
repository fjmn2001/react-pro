import { FC } from "react";
import { useCounter } from "../hooks/useCounter";

interface Props {}

export const CounterHook: FC<Props> = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <h1>Counter Hook</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <hr />
      <button onClick={() => handleClick(1)}>+1</button>
    </>
  );
};
