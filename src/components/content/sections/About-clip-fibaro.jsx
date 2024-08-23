import React from "react";

function Aboutclipfibaro() {
  return (
    <div className="py-20 space-y-10 rounded-3xl bg-slate-200 drop-shadow-2xl">
      <h2 className="text-center">
        B Smart-Life With FIBARO systems
      </h2>

      <div className="h-96 flex justify-center mx-auto">
        <iframe
          className="min-w-80 w-1/2 h-full "
          src="https://www.youtube.com/embed/K35uFXoa5c0?si=-ij2xar1rn2Q8HDq"
          title="YouTube video player"
          /* frameborder="0" */
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          /* allowfullscreen */
        ></iframe>
      </div>
    </div>
  );
}

export default Aboutclipfibaro;
