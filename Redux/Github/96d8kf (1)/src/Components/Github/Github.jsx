import { useReducer, useState } from "react";
import { fetchUser } from "./action";
import { githubReducer } from "./reducer";
const initialValue = {
  isLoading: false,
  isError: false,
  data: [],
  token: ""
};
export default function Github() {
  const [state, dispatch] = useReducer(githubReducer, initialValue);
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="add somethibg..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => fetchUser(dispatch, text)}>Search</button>
      </div>
      <div>
        {state.data.map((item) => (
          <div key={item.login}>{item.login}</div>
        ))}
      </div>
    </>
  );
}
// export default Github;
