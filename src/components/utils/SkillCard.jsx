import React from "react";

const SkillCard = ({ cardTitle, cardDescription, icon }) => {
  return (
    <div className="my-6 p-6 flex justify-center border rounded flex-col">
      {icon}
      <div>
        <p className="text-white text-center text-3xl mb-2">{cardTitle}</p>
        <p className="text-white text-center">{cardDescription}</p>
      </div>
    </div>
  );
};

export default SkillCard;
