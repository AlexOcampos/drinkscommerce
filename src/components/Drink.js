import React from "react";
import { Link } from "react-router-dom";

export default function Drink({ image, name, id, info, available }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        {available ? "" : <span class="out-of-stock">Agotado</span>}
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h4>{name}</h4>
        <p>{info}</p>
        <Link to={`/product/${id}`} className="btn btn-primary btn-details">
          detalles
        </Link>
      </div>
    </article>
  );
}
