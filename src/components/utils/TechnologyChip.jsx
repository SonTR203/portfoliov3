import React from "react";

const TechnologyChip = ({ content }) => {
  return (
    <div className="w-fit p-1 rounded bg-white mr-2 mb-2">
      <p className="text-sm">{content}</p>
    </div>
  );
};

export default TechnologyChip;
