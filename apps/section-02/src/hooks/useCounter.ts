import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounter] = useState<number>(5);
  const elementToAnimate = useRef<any>(null);

  const tl = useRef(gsap.timeline());

  const handleClick = (value: number) => {
    setCounter((prev) => Math.min(prev + value, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .paused();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
