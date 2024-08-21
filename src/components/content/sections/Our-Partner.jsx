import React from "react";
import Image from "next/image";

/* Image */
import artDNA from "../../../assets/img/artDNA.png";
import hikvision from "../../../assets/img/hikvision.png";
import somfy from "../../../assets/img/somfy.png";
import yale from "../../../assets/img/yale.png";

function OurPartner() {
  return (
    <div className="w-3/4 flex flex-col justify-center mx-auto py-10">
      <h1 className="text-cyan-700 text-center">Our Solution Partners</h1>

      <div className="w-full flex flex-wrap mt-20 space-x-2 justify-center items-center">
        <Image src={artDNA} alt="artDNA" className="h-32 w-40 object-cover" />
        <Image src={hikvision} alt="hikvision" className="h-32 w-40 object-cover" />
        <Image src={somfy} alt="somfy" className="h-24 w-40" />
        <Image src={yale} alt="yale" className="h-28 w-40" />
      </div>
    </div>
  );
}

export default OurPartner;
