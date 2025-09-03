import React, { useState, type FormEvent } from "react";

export default function Bai02() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else {
      setEmail(value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!name && !email) {
      setError("Thong tin khong hop le");
    } else {
      setError("");
    }
  };

  return (
    <div className="containerB2">
      <h3>Thong tin nguoi dung</h3>
      <form className="formB2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhap ten"
          className="inputB2"
          value={name}
          name="name"
          onChange={handleChangInput}
        />
        <input
          type="text"
          placeholder="Nhap email"
          className="inputB2"
          value={email}
          name="email"
          onChange={handleChangInput}
        />

        <button type="submit" className="btnB2">
          Gui
        </button>
      </form>

      {submitted &&
        (!error ? (
          <div className="infoB2">
            <p>Ten: {name}</p>
            <br />
            <p>Email: {email}</p>
          </div>
        ) : (
          <div className="errorB1">{error}</div>
        ))}
    </div>
  );
}
