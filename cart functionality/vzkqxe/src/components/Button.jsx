import React from "react";

export default function Button({ onCLick, Children, disable, changeCount }) {
  return (
    <>
      <button
        style={{
          padding: "10px",

          border: "0px",
          borderWidth: "0px",
          backgroundColor: "tomato",
          fontSize: "bold"
        }}
        disable={disable}
        onClick={onCLick}
      >
        {Children}
      </button>
    </>
  );
}
