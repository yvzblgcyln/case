"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AnimationSection() {
  const numberRef = useRef<HTMLSpanElement>(null);
  const currentValue = useRef(290606715);

  useEffect(() => countAnimation(), []);

  const countAnimation = () => {
    const nextValue = currentValue.current + Math.floor(Math.random() * 10);
    gsap.to(currentValue, {
      current: nextValue,
      duration: Math.random(),
      onComplete: countAnimation,
      onUpdate: () => {
        if (!numberRef.current) return;
        const temp = Math.floor(currentValue.current).toLocaleString("en-US");
        numberRef.current.innerText = temp;
      },
    });
  };

  return (
    <h2 className="text-yellow-400 font-bold text-5xl md:text-6xl lg:text-7xl mb-2 text-center md:text-left">
      <span ref={numberRef}>
        {currentValue.current.toLocaleString("en-US")}
      </span>
    </h2>
  );
}
