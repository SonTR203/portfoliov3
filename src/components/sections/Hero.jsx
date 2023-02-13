import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="h-screen flex flex-column justify-start">
      <div className="h-fit my-auto">
        <h2
          tabIndex={0}
          aria-label="Son Tran"
          className="text-7xl py-2 font-medium text-white mb-3 opacity-0 transition-opacity duration-300 delay-100 animate-fadeIn">
          Son Tran
        </h2>
        <h3
          tabIndex={0}
          aria-label="Full Stack Developer"
          className="text-5xl py-2 text-white mb-3 opacity-0 transition-opacity duration-300 delay-200 animate-fadeIn"
          style={{ animationDelay: "150ms" }}>
          Full Stack Developer
        </h3>
        <p
          tabIndex={0}
          aria-label="Welcome to my portfolio! I am a full-stack web and mobile developer
          based in Ottawa with experience in multiple programming languages and
          frameworks"
          className="text-white font-light text-3xl max-w-4xl mb-8 opacity-0 transition-opacity duration-300 delay-300 animate-fadeIn"
          style={{ animationDelay: "300ms" }}>
          Welcome to my portfolio! I am a full-stack web and mobile developer
          based in Ottawa with experience in multiple programming languages and
          frameworks.{" "}
        </p>
        <div
          className="flex flex-row mb-8 gap-4 opacity-0 transition-opacity duration-300 delay-300 animate-fadeIn"
          style={{ animationDelay: "450ms" }}>
          <a
            href="https://www.linkedin.com/in/son-tran-5aa65122b/"
            aria-label="go to my linkedin page"
            target="_blank">
            <FaLinkedin color="white" size={48} />
          </a>
          <a
            href="https://github.com/tran0460"
            target={"_blank"}
            aria-label="go to my github page">
            <FaGithub color="white" size={48} />
          </a>
        </div>
        <a
          style={{ animationDelay: "450ms" }}
          aria-label="see my resume"
          href="https://drive.google.com/file/d/1VG-VJ0qQcfprmdfegDv3CvqZBUVBSU3U/view"
          target={"_blank"}
          className="rounded p-4 bg-white text-xl opacity-0 transition-opacity duration-300 delay-300 animate-fadeIn">
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
