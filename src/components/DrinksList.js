import React from "react";
import Drink from "./Drink";
import { useGlobalContext } from "../context";

export default function DrinksList() {
  const { drinks } = useGlobalContext();
  return (
    <section className="section">
      <div className="drinks-center">
        {drinks.map((item) => {
          return <Drink key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
