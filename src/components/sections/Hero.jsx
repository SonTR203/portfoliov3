import React from "react";
import Introduction from "../utils/Introduction";
import { FaLinkedin, FaGithub } from "react-icons/Fa";
const Hero = () => {
  return (
    <section className="h-screen flex flex-column justify-start">
      <div className="h-fit my-auto">
        <h2 className="text-7xl py-2 font-medium text-white mb-3">Son Tran</h2>
        <h3 className="text-5xl py-2 text-white mb-3">Full Stack Developer</h3>
        <p className="text-white font-light text-3xl max-w-4xl mb-8">
          Welcome to my portfolio! I am a full-stack web and mobile developer
          based in Ottawa with experience in multiple programming languages and
          frameworks.{" "}
        </p>
        <div className="flex flex-row mb-8 gap-4">
          <a
            href="https://www.linkedin.com/in/son-tran-5aa65122b/"
            target="_blank">
            <FaLinkedin color="white" size={48} />
          </a>
          <a href="https://github.com/tran0460" target={"_blank"}>
            <FaGithub color="white" size={48} />
          </a>
        </div>
        <button className="rounded p-4 bg-white text-xl">My Resume</button>
      </div>
    </section>
  );
};

export default Hero;
