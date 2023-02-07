import React from "react";
import ClientProjectCard from "../utils/ClientProjectCard";
import DividerLine from "../utils/DividerLine";
import ImgPlaceholder from "../utils/ImgPlaceholder";

const Projects = () => {
  return (
    <section className="h-auto">
      <div>
        <DividerLine />
        <h3 className="text-4xl py-1 text-white">Projects</h3>
        <div>
          <ClientProjectCard />
          <ClientProjectCard />
          <ClientProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
