import React from "react";

const TechnologyChip = ({ content }) => {
  return (
    <div className="w-fit p-1 rounded bg-white">
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default TechnologyChip;
