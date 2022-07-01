import React from "react";
import LablePrice from "./LablePrice";
import Quantity from "./Quantity";
import Total from "./Total";

export default function CartItem({ lable, price, qty, handleChangeQty, id }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          border: "2px solid",
          gap: "20px",
          padding: "2rem",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <LablePrice lable={lable} price={price} />
        <Quantity
          qty={qty}
          increamentCount={() => handleChangeQty(id, 1)}
          decreamentCount={() => handleChangeQty(id, -1)}
        />
      </div>
    </>
  );
}
