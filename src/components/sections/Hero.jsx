import React from "react";
import Introduction from "./Introduction";

const Hero = () => {
  return (
    <section className="h-screen">
      <h2 className="text-5xl py-2 text-white">Son Tran</h2>
      <h3 className="text-xl py-2 text-white">Web and Mobile Developer</h3>

      {/* Social media links */}
      <div className="relative">{/* <Image src={""} layout="fill" /> */}</div>
    </section>
  );
};

export default Hero;
