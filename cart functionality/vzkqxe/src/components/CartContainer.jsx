import React, { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

// data
// eventhandlers
const initData = [
  { id: 1, product_name: "Noodles", price: 30, qty: 1 },
  { id: 2, product_name: "Biriyani", price: 90, qty: 2 },
  { id: 3, product_name: "Chips", price: 10, qty: 3 }
];

function CalculateTotal(products) {
  return products.reduce((acc, c) => acc + c.qty * c.price, 0);
}
export default function CartContainer({ lable, price, qty, total }) {
  const [data, setData] = useState(initData);

  function handleChangeQty(id, amount) {
    let updateData = data.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          qty: item.qty + amount
        };
      } else {
        return item;
      }
    });
    setData(updateData);
  }
  return (
    <div style={{ border: "2px solid" }}>
      {/* body */}

      {/* list of products */}

      {
        /* total */
        data.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            lable={item.product_name}
            price={item.price}
            qty={item.qty}
            handleChangeQty={handleChangeQty}
          />
        ))
      }

      <Total total={CalculateTotal(data)} />
    </div>
  );
}
