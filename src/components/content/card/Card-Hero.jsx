import React from "react";

function CardHero({ bg, text }) {
  return (
    <div
      className={`w-[370px] h-[500px] py-10 rounded-[25px] flex justify-center items-end ${bg} bg-cover bg-center brightness-50 hover:brightness-100 duration-300 ease-out hover:ease-in`}
    >
      <div className="p-5 bg-white bg-opacity-50 rounded-[25px]">
        <h2 className="text-center uppercase bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">{text}</h2>
      </div>
    </div>
  );
}

export default CardHero;
