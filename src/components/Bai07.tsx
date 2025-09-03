import { useReducer } from "react";

type State = { count: number };
type Action = { type: "increment" | "decrement" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }

    default: {
      return state;
    }
  }
};

export default function Bai07() {
  const initialState = { count: 0 };

  const [state, dispath] = useReducer(reducer, initialState);

  return (
    <div className="containerB7">
      <h3>So dem: {state.count}</h3>
      <button onClick={() => dispath({ type: "increment" })}>Tang</button>
      <button onClick={() => dispath({ type: "decrement" })}>Giam</button>
    </div>
  );
}
