import React from "react";

function CardServiceIcon({ icon, title, subti, des, bg }) {
  return (
    <div className={`w-1/4 h-96 flex flex-col justify-center text-center text-white space-y-5 px-10 ${bg}`}>
      <div className="flex justify-center">
        {React.createElement(icon, { size: "58" })}
      </div>

      <h3 className="text-green-800 uppercase">{title}</h3>
      <p className="text-muted">{subti}</p>
      <p className="text-muted">{des}</p>
    </div>
  );
}

export default CardServiceIcon;
