import React from "react";
import Head from "next/head";

const Navbar = () => {
  return (
    <nav className="py-8 px-10 mb-12 flex justify-center fixed w-screen left-0 top-0">
      <ul className="flex items-center w-full justify-center gap-8">
        <li className="text-white text-lg xs:text-xs text">
          <a href="#about">About me</a>
        </li>
        <li className=" text-white text-lg xs:text-xs">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-white text-lg xs:text-xs">
          <a href="#blog-posts">Blog posts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
