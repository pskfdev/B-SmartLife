import React from "react";

function OurSystem({ bg, style, border, title, des }) {
  return (
    <div className={`flex h-[600px] ${style} ${bg} bg-cover bg-center`}>
      <div
        className={`lg:w-2/5 flex flex-col justify-center bg-white bg-opacity-70 text-center px-5 lg:px-20 space-y-5 shadow-xl ${border}`}
      >
        <h1>{title}</h1>
        <h4>{des}</h4>
        <button className="btn btn-outline btn-accent">Learn More</button>
      </div>
    </div>
  );
}

export default OurSystem;
