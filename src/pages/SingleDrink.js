import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function SingleCocktail() {
  const { id } = useParams();
  const { drinks } = useGlobalContext();

  if (!drinks) {
    return <h2 className="section-title">No existe este producto</h2>;
  } else {
    drinks.map((item) => console.log(item));
    const drink = drinks.filter((item) => parseInt(id) === item.id);

    if (drink && drink.length > 0) {
      const {
        name,
        description,
        image,
        price,
        comparePrice,
        quantity,
        urlComparePrice,
        available,
      } = drink[0];

      return (
        <section className="section cocktail-section">
          <Link to="/" className="btn btn-primary">
            Volver a inicio
          </Link>
          <h2 className="section-title">{name}</h2>
          {available ? "" : <span className="out-of-stock">Agotado</span>}
          <div className="drink">
            <img src={"../" + image} alt={name}></img>
            <div className="drink-info">
              <p>
                <span className="drink-data">Nombre :</span> {name}
              </p>
              <p>
                <span className="drink-data">precio :</span> {price} €
                <span className="compare-prices">{comparePrice} €</span>
              </p>
              {description ? (
                <p>
                  <span className="drink-data">Descripción: </span>
                  {description}
                </p>
              ) : (
                ``
              )}
              <p>
                <span className="drink-data">Cantidad :</span> {quantity}
              </p>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <h2 className="section-title">
          No existe este producto o ya se ha agotado
        </h2>
      );
    }
  }
}
