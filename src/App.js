import React from "react";
import "./App.css";
import ItemClass from "./components/Item-class";
import ItemFunc from "./components/item-func";

const laptop = {
  name: "Apple MacBook Pro 16",
  description: "Modern laptop from the Apple",
  cost: "2500$",
  inStock: 0,
};

const phone = {
  name: "Iphone 14 Pro",
  description: "Modern smartphone from the Apple",
  cost: "2000$",
  inStock: 3,
};

function App() {
  return (
    <>
      <ItemFunc item={laptop} />
      <ItemClass item={phone} />
    </>
  );
}

export default App;
