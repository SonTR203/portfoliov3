import React from "react";
import ClientProjectCard from "../utils/ClientProjectCard";
import ImgPlaceholder from "../utils/ImgPlaceholder";

const ClientProjects = () => {
  return (
    <section className="h-auto">
      <div>
        <h3 className="text-4xl py-1 text-white">Client projects</h3>
        <div>
          <ClientProjectCard />
          <ClientProjectCard />
          <ClientProjectCard />
        </div>
      </div>
    </section>
  );
};

export default ClientProjects;
