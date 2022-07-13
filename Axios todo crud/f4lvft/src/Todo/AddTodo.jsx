// import { useImperativeHan } from "react";
import { useState } from "react";
function AddTodo({ handleAdd }) {
  const [text, setText] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add somethi.."
      />
      <button onClick={() => handleAdd(text)}>Add</button>
    </div>
  );
}

export default AddTodo;
