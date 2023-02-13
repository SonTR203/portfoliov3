import React from "react";
import DividerLine from "../utils/DividerLine";
import InfoCard from "../utils/InfoCard";

const AboutMe = () => {
  return (
    <section
      className="h-auto py-16"
      id="about"
      tabIndex={0}
      aria-label="About me section">
      <DividerLine />
      <h3
        className="text-4xl py-1 mr-20 text-white"
        tabIndex={0}
        aria-label="About me">
        About me
      </h3>
      <p
        className="text-md text-xl py-8 leading-8 text-white"
        tabIndex={0}
        aria-label="I am an enthusiastic developer who bring an unique blend of technical
        savvy and creative problem solving to any project. I am always open to
        learning new things and taking on new challenges. Whether it's creating
        a responsive website or building a feature-packed mobile app, I approach
        every project with enthusiasm and a desire to find the most efficient
        and enjoyable solutions">
        I am an enthusiastic developer who bring an unique blend of technical
        savvy and creative problem solving to any project. I am always open to
        learning new things and taking on new challenges. Whether it's creating
        a responsive website or building a feature-packed mobile app, I approach
        every project with enthusiasm and a desire to find the most efficient
        and enjoyable solutions.
      </p>
      <p
        className="text-3xl mb-5 text-white"
        tabIndex={0}
        aria-label="My awards">
        Awards
      </p>
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
        <InfoCard title={3} description={"Dean's Honours List"} />
        <InfoCard
          title={1}
          description={"CEWIL Student of the year nomination"}
        />
        <InfoCard title={1} description={"RE/ACTION Showcase first place"} />
      </div>
    </section>
  );
};

export default AboutMe;
