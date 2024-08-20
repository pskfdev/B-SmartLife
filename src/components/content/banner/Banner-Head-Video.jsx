import React from "react";

import { FiArrowDownCircle } from "react-icons/fi";

function BannerHeadVideo() {
  return (
    <div className="h-full min-h-96 relative bg-slate-400">
      <video
        src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/animation_gates_loop.mp4"
        className="hidden md:flex"
        autoPlay
        loop
        muted
        preload="auto"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-md text-white text-center">
          <h1 className="uppercase tracking-wide">Our Products</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          {/* Icon Down */}
          <FiArrowDownCircle
            className="animate-bounce text-primary z-50 mx-auto bg-white opacity-50 rounded-full"
            size={50}
          />
        </div>
      </div>
    </div>
  );
}

export default BannerHeadVideo;
