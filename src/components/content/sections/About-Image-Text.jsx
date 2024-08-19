import React from "react";

function AboutImageText({ style = "flex-row", title, des, img }) {
  return (
    <div className={`flex ${style} h-[500px]`}>
      <div className="w-full flex justify-center items-center bg-zinc-600">
        <div className="w-4/5 space-y-5 mx-auto">
          <h4 className="text-green-500">{title}</h4>
          <p className="text-white">{des}</p>

          <button className="btn btn-success text-white flex mx-auto">
            Learn More
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      ></div>
    </div>
  );
}

export default AboutImageText;
