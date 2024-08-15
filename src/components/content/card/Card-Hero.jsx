import React from "react";

function CardHero({ img, text }) {
  return (
    <div
      className={`w-full h-[500px] py-10 rounded-[25px] flex justify-center items-end`}
      style={{
        backgroundImage: `url(${ img })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-5 bg-white bg-opacity-50 rounded-[25px]">
        <h2 className="text-center uppercase">{text}</h2>
      </div>
    </div>
  );
}

export default CardHero;
