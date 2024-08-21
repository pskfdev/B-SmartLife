import React from "react";

//Components
import { FiNavigation } from "react-icons/fi";

function OurShowroom() {
  return (
    <div className="w-4/5 h-[500px] md:p-5 flex justify-end rounded-[50px] mx-auto overflow-hidden bg-showroom bg-bottom bg-cover">
      <div className="w-[500px] bg-white opacity-80 rounded-[50px] p-5 md:p-10 lg:my-10 space-y-2">
        <h3 className="italic text-green-500">About us</h3>
        <h2>Our farms</h2>
        <p>
          Lorem had ceased to been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley.
        </p>

        {/* Icon and Text */}
        <div className="flex items-center w-full space-x-5">
          <FiNavigation size={45} className="text-success" />

          <div>
            <p>
              <span className="font-bold">Office location</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis, doloremque.
            </p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-5">
          <FiNavigation size={45} className="text-success" />

          <div>
            <p>
              <span className="font-bold">Showroom location</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis, doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurShowroom;
