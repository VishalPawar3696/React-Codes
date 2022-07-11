import { useReducer, React } from "react";
const initialState = {
  count: 0
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,

        count: state.count + action.payload
      };
    case "decrement":
      return {
        ...state,

        count: state.count + action.payload
      };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1000 })}>
        ADD 1000
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 2000 })}>
        ADD 2000
      </button>
    </div>
  );
};
export default Counter;
