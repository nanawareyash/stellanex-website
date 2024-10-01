"use client";

import { useEffect, useState } from "react";

function DynamicWordSlider({ words = [], className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      const length = words.length;
      if (length > 1) {
        setPrevIndex((previous) => (previous + 1) % length);
        setCurrentIndex((previous) => (previous + 1) % length);
      }
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <span className={`relative whitespace-nowrap`}>
      <span className="opacity-0">{words[currentIndex]}</span>
      {words.map((word = "", index) => (
        <span
          key={`dynamic-word-${index}`}
          className={`absolute opacity-0 left-0 top-full data-[up=true]:top-0 data-[up=true]:-translate-y-full data-[show=true]:top-1/2 data-[show=true]:-translate-y-1/2 data-[show=true]:opacity-100 transition-all duration-300 ${className}`}
          data-up={prevIndex === index}
          data-show={currentIndex === index}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default DynamicWordSlider;
