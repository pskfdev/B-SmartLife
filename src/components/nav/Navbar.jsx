import Link from "next/link";
import React from "react";
//Components
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <div className="navbar bg-base-100 flex justify-between lg:px-20 h-24 rounded-b-[35px] drop-shadow-lg">
      <div>
        {/* Humberger */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiMenu size={25} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/">
          <h2>B Smart-life</h2>
        </Link>
      </div>

      {/* Menu */}
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
