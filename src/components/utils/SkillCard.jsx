import React from "react";

const SkillCard = ({ cardTitle, cardDescription, icon }) => {
  return (
    <div className="my-5 p-3 flex justify-center border rounded">
      <div></div>
      <div>
        <p className="text-white text-center text-3xl mb-2">Web Development</p>
        <p className="text-white text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          laborum inventore sequi vel facilis dolore reprehenderit a, nesciunt
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
