import React, { useState } from "react";

export default function Bai01() {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    console.log(value);

    if (value.length > 5) {
      setError("Chuoi nhap vao lon hon 5 ki tu");
    } else {
      setError("");
    }
  };

  return (
    <div className="container01">
      <h1>Kiem tra do dai chuoi nhap vao</h1>
      <input
        type="text"
        placeholder="nhap vao day"
        className="inputB1"
        onChange={handleChangInput}
        value={inputValue}
      />
      {error && <p className="errorB1">{error}</p>}
    </div>
  );
}
