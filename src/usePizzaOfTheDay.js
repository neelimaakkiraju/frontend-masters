import { useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useEffect(() => {
    async function fetchPizza() {
      const pizzaData = await fetch("./api/pizza-of-the-day");
      const data = await pizzaData.json();
      setPizzaOfTheDay(data);
    }
    fetchPizza();
  }, []);
  return pizzaOfTheDay;
};
