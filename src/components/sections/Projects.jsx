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
            role={"Full Stack Developer"}
            description={
              "A mobile app for tenants of a property management company in Ottawa to connect with the local neighborhood, buy and sell items, get rewards and more."
            }
            technologies={[
              "React Native",
              "Expo",
              "Firebase",
              "Google Analytics",
            ]}
          />
          <ClientProjectCard
            title={"Smart Tenant Admin Portal"}
            role={"Full Stack Developer"}
            description={
              "A mobile app for tenants of a property management company in Ottawa to connect with the local neighborhood, buy and sell items, get rewards and more."
            }
            technologies={["ReactJS", "Firebase", "Redux"]}
          />
          <ClientProjectCard
            title="SAGE Project - Carpenters Registry in Dominica"
            role={"Back End Developer"}
            technologies={["NextJS", "AWS Amplify"]}
          />
          <ClientProjectCard
            title="ORC Sports management web app"
            role={"Full Stack Developer"}
            technologies={["NextJS", "AWS Amplify", "AWS SES", "DynamoDB"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
