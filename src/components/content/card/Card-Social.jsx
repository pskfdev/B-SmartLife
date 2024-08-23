import React from "react";

function CardSocial({ icon, title, des }) {
  return (
    <div className={`w-48 py-7 flex flex-col items-center text-center space-y-5 drop-shadow-xl bg-slate-100 rounded-3xl`}
    >
      <div className="flex justify-center text-primary">
        {React.createElement(icon, { size: "45" })}
      </div>

      <div className="space-y-2 text-sm">
        <h3 className="uppercase">{title}</h3>
        <p className="text-muted">{des}</p>
      </div>
    </div>
  );
}

export default CardSocial;
