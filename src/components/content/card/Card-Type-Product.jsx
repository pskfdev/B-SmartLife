import React from "react";

function CardTypeProduct({ icon, title, des }) {
  return (
    <div className={`w-[250px] flex flex-col items-center text-center space-y-5 my-10`}>
      <div className="flex justify-center">
        {React.createElement(icon, { size: "58" })}
      </div>

      <div>
        <h4 className="text-green-800 uppercase">{title}</h4>
        <p className="text-muted">{des}</p>
      </div>
    </div>
  );
}

export default CardTypeProduct;
