import React from "react";
import Total from "./Total";

export default function Quantity({ qty, increamentCount, decreamentCount }) {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{ backgroundColor: "tomato" }}
          onClick={decreamentCount}
          disabled={qty === 0}
        >
          -
        </button>
        <h4>{qty}</h4>
        <button style={{ backgroundColor: "tomato" }} onClick={increamentCount}>
          +
        </button>
      </div>
    </>
  );
}
