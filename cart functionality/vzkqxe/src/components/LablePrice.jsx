import React from "react";
export default function LablePrice({ lable, price }) {
  return (
    <div style={{ display: "flex", padding: "2rem", gap: "10px" }}>
      <div>{lable}</div>
      <div>₹ {price}</div>
    </div>
  );
}
