import React from "react";

const InfoCard = ({ title, description }) => {
  return (
    <div className=" w-64 bg-neutral-800 rounded-xl p-5 flex flex-col align-center">
      <p className="text-white text-7xl mb-4">{title}</p>
      <p className="text-white text-2xl">{description}</p>
    </div>
  );
};

export default InfoCard;
