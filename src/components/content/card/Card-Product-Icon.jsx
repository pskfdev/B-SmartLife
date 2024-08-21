import React from "react";

function CardProductIcon({ icon, text }) {
  return (
    <div className="space-y-5 my-2 text-center">
      <div className="flex justify-center text-indigo-500">
        {React.createElement(icon, { size: "58" })}
      </div>

      <div className="w-32 bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
}

export default CardProductIcon;
