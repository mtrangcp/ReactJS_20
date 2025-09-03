import type React from "react";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "Apple iPhone 13",
    description: "Smartphone mới nhất của Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    description: "Smartphone flagship của Samsung",
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    description: "Smartphone hiệu suất cao từ OnePlus",
  },
  {
    id: 4,
    name: "Google Pixel 6",
    description: "Điện thoại thông minh của Google",
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    description: "Điện thoại thông minh giá rẻ",
  },
];

type Data = {
  id: number;
  name: string;
  description: string;
};

export default function Bai09() {
  const [valueInput, setValueInput] = useState<string>("");
  const [result, setResult] = useState<Data[]>(data);
  const [open, setOpen] = useState<boolean>(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
    setOpen(true);
  };

  useEffect(() => {
    setResult(data.filter((el) => el.name.includes(valueInput)));
  }, [valueInput]);

  return (
    <div className="containerB9">
      <h2>Tim kiem san pham</h2>
      <input
        type="text"
        placeholder="Nhap tu khoa tim kiem"
        onChange={handleChangeInput}
      />

      {open && (
        <p className="result">
          {result.length} ket qua tim thay cho "{valueInput}"
        </p>
      )}

      <div className="listData">
        {result.map((el) => {
          return (
            <div className="itemB9">
              <h4>{el.name}</h4>
              <p>{el.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
