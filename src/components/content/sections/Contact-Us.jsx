import React from "react";

function ContactUs() {
  return (
    <div className="w-4/5 mx-auto flex justify-center items-center px-20 text-center">
      <div className="w-full">
        <img
          src="https://via.placeholder.com/600/771796"
          className="w-96 mx-auto rounded-full shadow-2xl"
          alt="contact"
        />
      </div>

      <div className="w-4/5 space-y-7">
        <h1 className="tracking-wide">Contact Us</h1>
        <p>
          We are here to meet any business need and to <br /> promote your company
          online!
        </p>

        <hr className="w-3/5 border-2 border-warning bg-warning mx-auto" />

        <div className="space-y-2">
          <h3>
            <span className="font-bold">Phone: </span>096-885-5848
          </h3>
          <h3>
            <span className="font-bold">Location: </span>75 Street Sample, WI
            63025
          </h3>
          <h3>
            <span className="font-bold">Mail: </span>Test-02@gmail.com
          </h3>
        </div>

        <p className="text-xs">© 2024. Nice - Polska Sp. z o.o. All rights reserved.</p>
      </div>
    </div>
  );
}

export default ContactUs;
