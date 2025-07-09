import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(10);
  useEffect(() => {
    if (timeLeft === 0) {
      alert("Time' up");
      setTimeLeft(10);
    }

    const Timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(Timer);
  }, [timeLeft]);
  return (
    <div className="m-20">
      <h1>Count down from {timeLeft}</h1>
    </div>
  );
};

export default Timer;
