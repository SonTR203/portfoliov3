import React from "react";
import Head from "next/head";

const Navbar = () => {
  return (
    <nav className="py-8 px-10 mb-12 flex justify-center fixed w-screen left-0 top-0">
      <ul className="flex items-center w-full justify-center gap-8">
        <li
          className="text-white xs:text-lg text-sm "
          aria-label="go to about me">
          <a href="#about">About me</a>
        </li>
        <li
          className=" text-white xs:text-lg text-sm "
          aria-label="go to projects">
          <a href="#projects">Projects</a>
        </li>
        <li
          className="text-white xs:text-lg text-sm "
          aria-label="go to blog posts">
          <a href="#blog-posts">Blog posts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
