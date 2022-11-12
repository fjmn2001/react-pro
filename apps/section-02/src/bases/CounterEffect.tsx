import { FC, useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Props {
  initialValue?: number;
}

const MAXIMUM_COUNT = 10;

export const CounterEffect: FC<Props> = ({ initialValue = 5 }) => {
  const [counter, setCounter] = useState<number>(initialValue);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = (value: number) => {
    setCounter((prev) => Math.min(prev + value, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    (async () => {
      const tl = gsap.timeline();
      await tl.to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      });
      await tl.to(counterElement.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });
    })();
  }, [counter]);

  return (
    <>
      <h1>Counter Effect</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <hr />
      <button onClick={() => handleClick(1)}>+1</button>
    </>
  );
};
