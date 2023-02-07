import React from "react";
import ImgPlaceholder from "./ImgPlaceholder";
import TechnologyChip from "./TechnologyChip";

const ClientProjectCard = ({
  img,
  title = "Client Project Card",
  description,
}) => {
  return (
    <div className="my-20 py-3 max-w-xl">
      <div>
        {/* Project Img */}
        <ImgPlaceholder />
        {/* Project name */}
        <p className="my-3 text-white text-xl">{title}</p>
        {/* Project description */}
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          assumenda impedit perspiciatis veniam error tempora vero animi quos
          porro natus.
        </p>
        {/* Tech stack for the project */}
        <div className="mt-2">
          <TechnologyChip content={"ReactJS"} />
        </div>
      </div>
    </div>
  );
};

export default ClientProjectCard;
