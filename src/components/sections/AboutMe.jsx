import React from "react";
import SkillCard from "../utils/SkillCard";
import Introduction from "./Introduction";

const AboutMe = () => {
  return (
    <section className="h-auto my-48 ">
      <h3 className="text-3xl py-1 text-white">About me</h3>
      <Introduction />
      <div>
        <SkillCard
          cardTitle={"Front end development"}
          cardDescription={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo?"
          }
        />
        <SkillCard
          cardTitle={"Back end development"}
          cardDescription={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, quo?"
          }
        />
      </div>
    </section>
  );
};

export default AboutMe;
