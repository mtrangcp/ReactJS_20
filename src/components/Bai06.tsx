import { useEffect, useRef, useState } from "react";

export default function Bai06() {
  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  return (
    <>
      <div className="containerB6">
        <h2>Ung dung React vs Modal va Focus Input </h2>

        <button onClick={handleClickOpen}>Mo Modal</button>
      </div>

      {open && (
        <div className="overlay">
          <div className="modalB6">
            <h3>Dang nhap</h3>
            <input
              type="text"
              placeholder="Nhap ten nguoi dung"
              ref={inputRef}
            />
            <button onClick={handleClickClose}>Dong</button>
          </div>
        </div>
      )}
    </>
  );
}
