import React, { useEffect, useState } from "react";

function CustomHook() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // Cập nhật mỗi giây

    return () => clearInterval(timer); // Dọn dẹp khi unmount
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

export default CustomHook;
