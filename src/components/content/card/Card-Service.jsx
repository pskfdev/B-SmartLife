import React from "react";

function CardService({ img, title, des}) {
  return (
    <div className="w-80 text-center space-y-5 my-5">
      <img src={img} alt={title} className="w-48 rounded-full mx-auto drop-shadow-2xl" />
      <h3>{title}</h3>
      <p className="text-muted">{des}</p>
    </div>
  );
}

export default CardService;
