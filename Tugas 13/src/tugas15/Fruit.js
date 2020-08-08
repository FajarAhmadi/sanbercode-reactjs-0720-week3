import React from "react";
import { FruitProvider } from "./FruitContext";
import FruitList from "./FruitList";
import FruitForm from "./FruitForm";

const Fruit = () => {
  return (
    <FruitProvider>
      <FruitForm />
      <FruitList />
    </FruitProvider>
  );
};

export default Fruit;
