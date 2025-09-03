import { useEffect, useState } from "react";

export default function Bai05() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Time chay: ");

    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Component da dc clean");
    };
  }, []);
  return (
    <div>
      <h3>Bo dem thoi gian</h3>
      <p>Giay: {count}</p>
    </div>
  );
}
