import React from "react";

const ItemFunc = (props) => {
  const {
    item: { name, description, cost, inStock },
  } = props;
  return (
    <section>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {cost}</p>
      <p>In stock: {inStock > 0 ? "In stock" : "Delivery expected"}</p>
    </section>
  );
};

export default ItemFunc;
