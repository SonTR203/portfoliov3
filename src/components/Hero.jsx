import React from "react";
import Introduction from "./Introduction";

const Hero = () => {
  return (
    <section className="h-screen">
      <nav className="py-10 mb-12 flex justify-end">
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
      <Introduction />
      {/* Social media links */}
      <div className="relative">{/* <Image src={""} layout="fill" /> */}</div>
    </section>
  );
};

export default Hero;
