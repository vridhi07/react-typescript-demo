import { useReducer } from "react";

type counterState = {
  count: number;
};
// type counterAction = {
//   type: string;
//   payload: number;
// };

// type counterAction = {
//   type: "increment" | "decrement" | "reset";
//   payload?: number;
// };

type updateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type resetAction = {
  type: "reset";
};

type counterAction = resetAction | updateAction;

const initialState = { count: 0 };

function reducer(state: counterState, action: counterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        Increment 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        Decrement 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
};
