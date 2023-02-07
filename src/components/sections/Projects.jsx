import React from "react";
import ClientProjectCard from "../utils/ClientProjectCard";
import DividerLine from "../utils/DividerLine";
import ImgPlaceholder from "../utils/ImgPlaceholder";

const Projects = () => {
  return (
    <section className="h-auto">
      <div>
        <DividerLine />
        <h3 className="text-4xl py-1 text-white">Projects</h3>
        <div>
          <ClientProjectCard
            title={"Smart Tenant Mobile App"}
            description={
              "A mobile app for tenants of a property management company in Ottawa to connect with the local neighborhood, buy and sell items, get rewards and more."
            }
            technologies={["React Native", "Firebase", "Google Analytics"]}
          />
          <ClientProjectCard title={"Smart Tenant Admin Portal"} />
          <ClientProjectCard />
          <ClientProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
