import React, { useState, createContext } from "react";

export const FruitContext = createContext();

export const FruitProvider = (props) => {
  const [fruit, setFruit] = useState([]);
  const [fruitId, setFruitId] = useState("");
  const [input, setInput] = useState({ name: "", price: "", weight: "" });
  const [refreshData, setRefreshData] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(false);

  return (
    <FruitContext.Provider
      value={{
        fruit,
        setFruit,
        fruitId,
        setFruitId,
        input,
        setInput,
        refreshData,
        setRefreshData,
        editMode,
        setEditMode,
        error,
        setError,
      }}
    >
      {props.children}
    </FruitContext.Provider>
  );
};
