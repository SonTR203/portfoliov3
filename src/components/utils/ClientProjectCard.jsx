import React from "react";
import ImgPlaceholder from "./ImgPlaceholder";

const ClientProjectCard = ({
  img,
  title = "Client Project Card",
  description,
}) => {
  return (
    <div className="my-20 py-3">
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
        <div></div>
      </div>
    </div>
  );
};

export default ClientProjectCard;
