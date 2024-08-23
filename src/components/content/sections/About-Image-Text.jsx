import React from "react";

function AboutImageText({ style="flex-col md:flex-row", title, des, bg }) {
  return (
    <div className={`flex ${ style } h-full`}>
      <div className="w-full flex justify-center items-center py-10 bg-slate-200">
        <div className="w-4/5 space-y-5 mx-auto">
          <h2>{title}</h2>
          <p>{des}</p>

          <button className="btn btn-accent text-white flex mx-auto">
            Learn More
          </button>
        </div>
      </div>
      <div className={`w-full min-h-[600px] ${bg} bg-cover bg-center`}></div>
    </div>
  );
}

export default AboutImageText;
