import React from "react";
import SkillCard from "../utils/SkillCard";
import Introduction from "./Introduction";

const AboutMe = () => {
  return (
    <section className="h-auto my-48 ">
      <h3 className="text-4xl py-1 text-white">About me</h3>
      <Introduction />
      <div>
        <SkillCard
          cardTitle={"Web development"}
          cardDescription={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo?"
          }
        />
        <SkillCard
          cardTitle={"Mobile development"}
          cardDescription={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo?"
          }
        />
      </div>
    </section>
  );
};

export default AboutMe;
