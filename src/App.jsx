import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";
import { StrictMode } from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { cartContext } from "./contexts";

const App = () => {
  const cartHook = useState([])
  return (
    <StrictMode>
      <cartContext.Provider value={cartHook}>
      <div>
        <Header/>
        <Order />
        <PizzaOfTheDay />
      </div>
      </cartContext.Provider>
    </StrictMode>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
