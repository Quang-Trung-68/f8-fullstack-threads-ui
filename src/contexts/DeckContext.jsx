import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DeckContext = createContext();

export const useDeck = () => {
  const context = useContext(DeckContext);
  if (!context) {
    throw new Error("useDeck must be used within a DeckProvider");
  }
  return context;
};

export const DeckProvider = ({ children }) => {
  const [columns, setColumns] = useState([
    { id: "home", type: "home", title: "Home" },
  ]);

  const addColumn = (type) => {
    const newColumn = {
      id: uuidv4(),
      type,
      title: type.charAt(0).toUpperCase() + type.slice(1),
    };
    setColumns((prev) => [...prev, newColumn]);
  };

  const removeColumn = (id) => {
    setColumns((prev) => prev.filter((col) => col.id !== id));
  };

  return (
    <DeckContext.Provider value={{ columns, addColumn, removeColumn }}>
      {children}
    </DeckContext.Provider>
  );
};
