import Link from "next/link";
import React from "react";

//Icons
import { FiPhoneCall, FiMail, FiFacebook, FiLink } from "react-icons/fi";

function Footer() {
  return (
    <footer className="rounded-t-[50px] overflow-hidden">

        {/* Nav top */}
      <div className="bg-[#BED7DC] py-14">
        <div className="flex justify-center items-center space-x-5 text-success">
          <FiPhoneCall size={40} className="p-2 rounded-full bg-teal-100" />
          <FiMail size={40} className="p-2 rounded-full bg-teal-100" />
          <FiFacebook size={40} className="p-2 rounded-full bg-teal-100" />
          <FiLink size={40} className="p-2 rounded-full bg-teal-100" />
        </div>

        {/* Navigation */}
        <ul className="flex justify-center space-x-5 mt-5 text-white">
          <li>
            <Link href="/"><h2 className="text-sm">Home</h2></Link>
          </li>
          <li>
            <Link href="/about"><h2 className="text-sm">About</h2></Link>
          </li>
          <li>
            <Link href="/product"><h2 className="text-sm">Product</h2></Link>
          </li>
          <li>
            <Link href="/contact"><h2 className="text-sm">Contact</h2></Link>
          </li>
        </ul>
      </div>

      {/* Nav bottom */}
      <div className="bg-[#B3C8CF] py-5 text-center">
        <h2 className="text-xs w-fit mx-auto">© 2024. B Smart-Life. All rights reserved.</h2>
      </div>
    </footer>
  );
}

export default Footer;
