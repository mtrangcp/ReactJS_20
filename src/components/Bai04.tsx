import { useEffect, useState } from "react";

export default function Bai04() {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (title) {
      document.title = `Chao, ${title}`;
    } else {
      document.title = "Trang web cua ban";
    }
  }, [title]);

  return (
    <div className="containerB4">
      <h2>Welcome!</h2>
      <input
        type="text"
        placeholder="Nhap ten cua ban"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>Tieu de thay doi theo thong tin ban nhap </p>
    </div>
  );
}
