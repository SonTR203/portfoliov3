import React from "react";
import Introduction from "../utils/Introduction";

const Hero = () => {
  return (
    <section className="h-screen flex flex-column justify-start">
      <div className="h-fit my-auto">
        <h2 className="text-7xl py-2 text-white mb-3">Son Tran</h2>
        <h3 className="text-5xl py-2 text-white mb-3">Full Stack Developer</h3>
        <p className="text-white text-3xl max-w-3xl  mb-8">
          Welcome to my portfolio! I am a full-stack web and mobile developer
          based in Ottawa with experience in multiple programming languages and
          frameworks.{" "}
        </p>
        <button className="rounded p-4 bg-white text-xl">My Resume</button>
      </div>
    </section>
  );
};

export default Hero;
