import React, { useState, useEffect } from "react";

const NumberCounter = ({ max, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let now = max;
    const interval = setInterval(() => {
      setCount(Math.ceil(max - now));
      if (now <= 0) {
        clearInterval(interval);
      }
      const step = now / 10;
      now -= step;
    }, 50);

    // cleanup function to clear interval on component unmount
    return () => clearInterval(interval);
  }, [max]);

  // Initial delay using setTimeout
  useEffect(() => {}, [delay]);

  return <span className="font-semibold text-md text-blue-500">{count}</span>;
};

export default NumberCounter;
