import React from "react";
import ClientProjectCard from "../utils/ClientProjectCard";
import DividerLine from "../utils/DividerLine";
import ImgPlaceholder from "../utils/ImgPlaceholder";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="h-auto">
      <div>
        <DividerLine />
        <h3 className="text-4xl py-1 text-white">Projects</h3>
        <div className="flex flex-col sm:flex-row flex-wrap justify-between">
          <ClientProjectCard
            title={"Smart Tenant Mobile App"}
            img={
              <Image src="/assets/SLPMobile.png" width="1500" height="1000" />
            }
            role={"Full Stack Developer"}
            description={
              "A mobile app for tenants of a property management company in Ottawa to connect with the local neighborhood, buy and sell items, get rewards and more."
            }
            technologies={["React Native", "Expo", "Firebase"]}
          />
          <ClientProjectCard
            title={"Smart Tenant Admin Portal"}
            role={"Full Stack Developer"}
            img={<Image src="/assets/SLPWeb.png" width="1500" height="1000" />}
            description={
              "A mobile app for tenants of a property management company in Ottawa to connect with the local neighborhood, buy and sell items, get rewards and more."
            }
            technologies={["ReactJS", "Firebase", "Redux"]}
            reverse
          />
          <ClientProjectCard
            title="SAGE Project - Carpenters Registry in Dominica"
            img={<Image src="/assets/SAGE.png" width="1500" height="500" />}
            role={"Back End Developer"}
            technologies={["ReactJS", "ChartJS", "Twilio", "AWS Amplify"]}
          />
          <ClientProjectCard
            title="ORC Sports management web app"
            role={"Full Stack Developer"}
            technologies={[
              "NextJS",
              "Tailwind CSS",
              "AWS Amplify",
              "AWS SES",
              "AWS Lambda",
              "DynamoDB",
            ]}
            reverse
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
