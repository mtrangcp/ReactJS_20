import { TextField } from "@mui/material";
import { useReducer } from "react";

type State = { name: string; email: string };
type Action = { type: "changeInput"; payload: Partial<State> };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "changeInput": {
      return { ...state, ...action.payload };
    }

    default: {
      return state;
    }
  }
};

export default function Bai08() {
  const initialState: State = { name: "", email: "" };
  const [state, dispath] = useReducer(reducer, initialState);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispath({
      type: "changeInput",
      payload: {
        [name]: value,
      },
    });
  };

  return (
    <div className="containerB8">
      <h3>User Information Form</h3>

      <TextField
        label="Ten"
        variant="outlined"
        fullWidth
        size="small"
        name="name"
        onChange={handleChangeInput}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        size="small"
        name="email"
        onChange={handleChangeInput}
      />

      <div className="infoB8">
        <h3>Thong tin nguoi dung</h3>
        <p>
          <span>Ten:</span> {state.name}
        </p>
        <p>
          <span>Email:</span> {state.email}
        </p>
      </div>
    </div>
  );
}
