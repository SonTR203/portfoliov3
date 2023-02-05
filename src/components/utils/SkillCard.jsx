import React from "react";

const SkillCard = ({ cardTitle, cardDescription, icon }) => {
  return (
    <div className="my-6 py-6 flex justify-center flex-col">
      {icon}
      <div>
        <p className="text-white text-2xl mb-2">{cardTitle}</p>
        <p className="text-white ">{cardDescription}</p>
      </div>
    </div>
  );
};

export default SkillCard;
