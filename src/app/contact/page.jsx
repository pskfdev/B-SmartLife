import React from "react";

//Components
import { FiPhoneCall, FiMail, FiFacebook, FiLink } from "react-icons/fi";
import ContactUs from "@/components/content/sections/Contact-Us";
import CardSocial from "@/components/content/card/Card-Social";
import OurShowroom from "@/components/content/sections/Our-Showroom";


function page() {
  return (
    <div className="space-y-20 py-20">
      <ContactUs />

      {/* Social */}
      <div className="flex flex-wrap justify-center py-20 space-x-5">
        <CardSocial icon={FiPhoneCall} title="Phone" des="096-885-4858" />
        <CardSocial icon={FiMail} title="E-mail" des="b_smart-life@gmail.com" />
        <CardSocial icon={FiFacebook} title="Facebook" des="B Smart-Life" />
        <CardSocial icon={FiLink} title="Line" des="b_smart-life" />
      </div>

      {/* Location showroom */}
      <div>
        <OurShowroom />
      </div>
    </div>
  );
}

export default page;
