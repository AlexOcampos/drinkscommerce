import React from "react";
import Drink from "./Drink";
import { useGlobalContext } from "../context";

export default function DrinksList() {
  const { drinks } = useGlobalContext();
  const sortedDrinks = drinks.sort((a, b) => {
    if (a.available && !b.available) {
      return -1;
    }
    if (!a.available && b.available) {
      return 1;
    }
    return 0;
  });
  return (
    <section className="section">
      <div className="drinks-center">
        {sortedDrinks.map((item) => {
          return <Drink key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
