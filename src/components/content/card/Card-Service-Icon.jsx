import React from "react";

function CardServiceIcon({ icon, title, subti, des, bg }) {
  return (
    <div className={`w-[370px] h-96 flex flex-col justify-center text-center text-white space-y-5 px-10 ${bg}`}>
      <div className="flex justify-center text-indigo-700">
        {React.createElement(icon, { size: "58" })}
      </div>

      <h3 className="uppercase">{title}</h3>
      <p className="text-muted text-primary">{subti}</p>
      <p className="text-muted text-primary">{des}</p>
    </div>
  );
}

export default CardServiceIcon;
