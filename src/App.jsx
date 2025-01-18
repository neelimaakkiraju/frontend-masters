import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div>
      <h1 className="logo">Padre Gino's Pizza – Order Now</h1>
      <Order />
    </div>
    </StrictMode>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
