import { useReducer } from "react";

const data = [
  {
    id: 1,
    title: "Huong dan su dung React",
    category: "React",
    isDone: true,
  },
  {
    id: 2,
    title: "Tim hieu ve JS ES6",
    category: "JavaScript",
    isDone: true,
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    category: "CSS",
    isDone: true,
  },
  {
    id: 4,
    title: "Huong dan toi uu hoa hieu suat web",
    category: "React",
    isDone: true,
  },
];

type Post = {
  id: number;
  title: string;
  category: string;
  isDone: boolean;
};

type State = {
  posts: Post[];
};

type Action =
  | { type: "done"; payload: number }
  | { type: "yet"; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "done": {
      const newArr = state.posts.map((el) =>
        el.id === action.payload ? { ...el, isDone: true } : el
      );
      return { posts: newArr };
    }

    case "yet": {
      const newArr = state.posts.map((el) =>
        el.id === action.payload ? { ...el, isDone: false } : el
      );
      return { posts: newArr };
    }

    default: {
      return state;
    }
  }
};

export default function Bai10() {
  const [state, dispath] = useReducer(reducer, { posts: data });

  const total = state.posts.length;
  const doneCount = state.posts.filter((el) => el.isDone).length;
  const yetCount = total - doneCount;
  const percent = Math.round((doneCount / total) * 100);

  return (
    <div className="containerB10">
      <h2>Quan ly bai viet</h2>

      <input type="range" className="percent" value={percent} />

      <p className="p-1">
        Da doc {doneCount}/{total} bai viet ({percent}%)
      </p>

      <div className="listYet">
        <h4>
          Bai viet chua doc <span>{yetCount}</span>
        </h4>

        <div className="listData">
          {state.posts
            .filter((el) => !el.isDone)
            .map((el) => (
              <div className="item" key={el.id}>
                <div className="item-left">
                  <h5>{el.title}</h5>
                  <p>{el.category}</p>
                </div>

                <button
                  onClick={() => dispath({ type: "done", payload: el.id })}
                >
                  Danh dau da doc
                </button>
              </div>
            ))}

          {yetCount === 0 && <p className="note">Da doc tat ca bai viet</p>}
        </div>
      </div>

      <div className="listDone">
        <h4>
          Bai viet da doc <span>{doneCount}</span>
        </h4>

        <div className="listData">
          {state.posts
            .filter((el) => el.isDone)
            .map((el) => (
              <div className="item">
                <div className="item-left">
                  <h5>{el.title}</h5>
                  <p>{el.category}</p>
                </div>

                <button
                  onClick={() => dispath({ type: "yet", payload: el.id })}
                >
                  Danh dau chua doc
                </button>
              </div>
            ))}

          {doneCount === 0 && (
            <p className="note">Chua co bai biet nao duoc doc</p>
          )}
        </div>
      </div>
    </div>
  );
}
