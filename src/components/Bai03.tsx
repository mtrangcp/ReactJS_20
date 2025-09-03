import { useEffect } from "react";

export default function Bai03() {
  useEffect(() => {
    console.log("Component render lan dau");
  }, []);

  return (
    <div>
      <h2>welcome!</h2>
    </div>
  );
}
