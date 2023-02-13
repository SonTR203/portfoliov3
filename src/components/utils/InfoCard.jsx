import React from "react";

const InfoCard = ({ title, description }) => {
  return (
    <div
      tabIndex={0}
      aria-label={`${title} ${description}`}
      className=" w-64 bg-neutral-800 rounded-xl p-5 flex flex-col align-center">
      <p className="text-white text-5xl mb-4">{title}</p>
      <p className="text-white text-xl">{description}</p>
    </div>
  );
};

export default InfoCard;
