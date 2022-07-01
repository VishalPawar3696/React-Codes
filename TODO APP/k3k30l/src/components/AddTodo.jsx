import React, { useState } from "react";

export default function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  function handleOnchange(e) {
    // console.log(e.target.value)
    setText(e.target.value);
  }

  return (
    <>
      <input
        placeholder="add something..."
        value={text}
        onChange={handleOnchange}
      />
      <button onClick={() => handleAdd(text)}>Add</button>
    </>
  );
}
