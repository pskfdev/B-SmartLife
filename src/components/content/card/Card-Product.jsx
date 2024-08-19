import React from "react";

function CardProduct({ img, title, link }) {
  return (
    <a href={ link } target="_blank" className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={ img }
          alt={ title }
          className="h-52 object-cover"
        />
      </figure>
      <div className="card-body text-center">
        <h2>{ title }</h2>
      </div>
    </a>
  );
}

export default CardProduct;
