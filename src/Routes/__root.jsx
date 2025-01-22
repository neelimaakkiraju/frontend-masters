import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { cartContext } from "../contexts";

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);

    return (
      <>
        <cartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </cartContext.Provider>
        <TanStackRouterDevtools />
      </>
    );
  },
});
