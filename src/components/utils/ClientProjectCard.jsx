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
      className={`my-20 py-3 w-full flex flex-col gap-3 ${
        reverse ? `md:flex-row-reverse` : `md:flex-row`
      }`}
      tabIndex={0}
      aria-label={`${title}`}>
      {/* Project Img */}
      <div className="w-full md:w-1/2 h-full">
        {img ? img : <ImgPlaceholder />}
      </div>
      <div className="md:w-1/2 md:ml-10">
        {/* Project name */}
        <p className="my-3 text-white text-3xl">{title}</p>
        <p
          className="mb-3 text-white text-xl"
          tabIndex={0}
          aria-label={`My role in this project was ${role}`}>
          Role: {role}
        </p>
        {/* Project description */}
        <p
          className="text-white text-lg"
          tabIndex={0}
          aria-label={`${description}`}>
          {description}
        </p>
        {/* Tech stack for the project */}
        <div
          className="mt-4 flex flex-row flex-wrap"
          tabIndex={0}
          aria-label={`This project was made using ${technologies.join(", ")}`}>
          {technologies.map((tech) => {
            return <TechnologyChip content={tech} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ClientProjectCard;
