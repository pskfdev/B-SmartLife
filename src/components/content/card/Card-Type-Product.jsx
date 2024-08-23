import React from "react";

function CardTypeProduct({ icon, title, des }) {
  return (
    <div className={`w-[250px] flex flex-col items-center text-center space-y-5 my-10`}>
      <div className="flex justify-center text-indigo-700">
        {React.createElement(icon, { size: "58" })}
      </div>

      <div>
        <h3 className="uppercase">{title}</h3>
        <p className="text-muted">{des}</p>
      </div>
    </div>
  );
}

export default CardTypeProduct;
