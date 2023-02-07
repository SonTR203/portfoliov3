import React from "react";
import Head from "next/head";

const Navbar = () => {
  return (
    <nav className="py-8 px-10 mb-12 flex justify-end fixed w-screen left-0 top-0">
      <ul className="flex items-center">
        <li>
          <a
            href="#"
            className="bg-gradient-to-r bg-white px-4 py-2 rounded text-gray-900">
            Resume
          </a>
        </li>
        <li>
          <a href="#"></a>
        </li>
        <li>
          <a href="#"></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
