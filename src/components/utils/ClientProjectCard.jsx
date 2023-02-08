import React from "react";
import ImgPlaceholder from "./ImgPlaceholder";
import TechnologyChip from "./TechnologyChip";

const ClientProjectCard = ({
  img,
  title = "Client Project Card",
  role,
  description,
  technologies = [],
  reverse,
}) => {
  return (
    <div
      className={`my-20 py-3 w-full flex flex-col ${
        reverse ? `md:flex-row-reverse` : `md:flex-row`
      }`}>
      {/* Project Img */}
      {img ? img : <ImgPlaceholder />}
      <div className="md:w-1/2 md:ml-10">
        {/* Project name */}
        <p className="my-3 text-white text-2xl">{title}</p>
        <p className="mb-3 text-white text-lg">Role: {role}</p>
        {/* Project description */}
        <p className="text-white text-md">{description}</p>
        {/* Tech stack for the project */}
        <div className="mt-4 flex flex-row flex-wrap">
          {technologies.map((tech) => {
            return <TechnologyChip content={tech} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientProjectCard;
