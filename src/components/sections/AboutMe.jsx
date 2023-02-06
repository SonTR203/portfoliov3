import React from "react";
import DividerLine from "../utils/DividerLine";
import Introduction from "../utils/Introduction";

const AboutMe = () => {
  return (
    <section className="h-auto my-48 ">
      <DividerLine />
      <h3 className="text-4xl py-1 text-white">About me</h3>
      <Introduction />
    </section>
  );
};

export default AboutMe;
