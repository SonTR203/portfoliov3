import React from "react";
import ClientProjectCard from "../utils/ClientProjectCard";
import DividerLine from "../utils/DividerLine";
import ImgPlaceholder from "../utils/ImgPlaceholder";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      className="h-auto py-16"
      id="projects"
      tabIndex={0}
      aria-label="Projects section">
      <div>
        <DividerLine />
        <h3
          className="text-4xl py-1 text-white"
          tabIndex={0}
          aria-label="Projects">
          Projects
        </h3>
        <div className="flex flex-col sm:flex-row flex-wrap justify-between">
          <ClientProjectCard
            title={"Smart Tenant Mobile App"}
            img={
              <Image
                alt="slp mobile"
                src="/assets/SLPMobile.png"
                width="1500"
                height="1000"
              />
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
            img={
              <Image
                alt="slp web"
                src="/assets/SLPWeb.png"
                width="1500"
                height="1000"
              />
            }
            description={
              "An internal admin dashboard for the company Smart Living Properties to to facilitate content management and moderation for their mobile application."
            }
            technologies={["ReactJS", "Firebase", "Redux"]}
            reverse
          />
          <ClientProjectCard
            title="SAGE Project - Carpenters Registry in Dominica"
            img={
              <Image
                alt="sage"
                src="/assets/SAGE.png"
                width="1500"
                height="500"
              />
            }
            role={"Back End Developer"}
            description={
              "A connection platform for the people of the Dominican Republic to find carpenters to help them rebuild their homes after natural disasters. This project is made in collaboration with the Dominica State College"
            }
            technologies={["ReactJS", "ChartJS", "Twilio", "AWS Amplify"]}
          />
          <ClientProjectCard
            title="ORC Sports management web app"
            role={"Full Stack Developer"}
            description={
              "A sports league management system for the Ottawa Rec Sports organization. Players can easily register for leagues as well as create their own team, while administrators have access to user-friendly tools for effectively managing the leagues."
            }
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
