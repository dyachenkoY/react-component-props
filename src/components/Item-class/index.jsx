import React, { Component } from "react";

class ItemClass extends Component {
  render() {
    const {
      item: {
        name = "Name temporarily unavailable",
        description = "Description temporarily unavailable",
        cost = 0,
        inStock,
      },
    } = this.props;
    return (
      <section>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: {cost}</p>
        <p>In stock: {inStock > 0 ? "In stock" : "Delivery expected"}</p>
      </section>
    );
  }
}

export default ItemClass;
