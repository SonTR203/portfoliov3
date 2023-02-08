import React from "react";
import DividerLine from "../utils/DividerLine";
import InfoCard from "../utils/InfoCard";
import Introduction from "../utils/Introduction";

const AboutMe = () => {
  return (
    <section className="h-auto my-48">
      <DividerLine />
      <h3 className="text-4xl py-1 mr-20 text-white">About me</h3>
      <Introduction />
      <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
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
