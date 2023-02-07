import React from "react";
import Introduction from "../utils/Introduction";

const Hero = () => {
  return (
    <section className="h-screen flex flex-column justify-center">
      <div className="h-fit my-auto">
        <h2 className="text-5xl py-2 text-white text-center">Son Tran</h2>
        <h3 className="text-4xl py-2 text-white">Web and Mobile Developer</h3>
        {/* Social media links */}
        <div className="relative">{/* <Image src={""} layout="fill" /> */}</div>
      </div>
    </section>
  );
};

export default Hero;
