import React from "react";
import SkillCard from "../utils/SkillCard";

const MyServices = () => {
  return (
    <section className="h-auto my-48">
      <div>
        <h3 className="text-3xl py-1 text-white">Services I offer</h3>
        <p></p>
        <div className="flex flex-col justify-items-stretch">
          <SkillCard
            cardTitle={"Web Development"}
            cardDescription={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa labore officia autem vel ut fuga, velit consequuntur laborum? Quia, obcaecati"
            }
          />
          <SkillCard
            cardTitle={"Mobile Development"}
            cardDescription={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa labore officia autem vel ut fuga, velit consequuntur laborum? Quia, obcaecati"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default MyServices;
