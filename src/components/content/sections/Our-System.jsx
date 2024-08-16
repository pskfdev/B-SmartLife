import React from "react";

function OurSystem({ img, style, border, title, des}) {
  return (
    <div className={`flex h-[600px] ${style}`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`w-2/5 flex flex-col justify-center bg-white bg-opacity-75 text-center px-20 space-y-5 shadow-xl ${border}`}>
        <h1>BESS (Battery Energy Storage System)</h1>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aut
          quas vel dolorum corrupti consequatur recusandae explicabo a iure
          facilis sequi optio ea eos rem dolore sapiente ipsam tenetur quis
          aliquid, eligendi labore eius molestiae minima. Consectetur magnam
          minima sunt voluptatem! Enim deserunt, veritatis itaque dignissimos
          qui aliquid iste ipsa!
        </h4>
        <button className="btn btn-outline btn-accent">Learn More</button>
      </div>
    </div>
  );
}

export default OurSystem;
