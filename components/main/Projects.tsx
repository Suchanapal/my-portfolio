import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col flex-wrap items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-9">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  h-full w-full first-line:gap-10 px-20">
        <ProjectCard
          src="/RW project.png"
          title="Modern Business Website"
          description="Spicy Reception: A modern restaurant website seamlessly blending design and functionality, featuring real-time promotions, interactive menus, and a user-friendly booking system. Strategically showcases restaurant history and culture promoting businees."
          link="https://spicy-reception.vercel.app/"
        />
        <ProjectCard
          src="/Project BB.png"
          title="E-commerce Website"
          description="BillionBooks: A user-friendly e-commerce platform for seamless book shopping, offering secure authentication, smooth transactions, and advanced search. An enjoyable space for book enthusiasts to explore and connect with their favorite reads."
         link="https://billionbooks.co.in/" 
        />
        <ProjectCard
          src="/Project QP.png"
          title="Quote Sharing Platform"
          description="QuotoPia: Quote enthusiast's web hub with a modern UI for seamless sign-ins, sharing, exploring, and building personal collections. Robust authentication, smooth sharing, powerful search, and interactive features foster a positive and engaging community."
          link="https://project-quoto-pia.vercel.app/"
        />
        <ProjectCard
          src="/sw.PNG"
          title="SaaS platform"
          description="Programming Hero: A modern platform that empowers aspiring developers through personalized learning, featuring a futuristic and intuitive user interface for an engaging experience."
         link="https://www.programming-hero.com/" 
        />
        <ProjectCard
          src="/lan.PNG"
          title="Testing Platform"
          description="Oyetest: A software testing platform with an intuitive interface, enabling seamless test automation, result tracking, and integrations for efficient quality assurance and faster software releases."
         link="https://www.oyetest.com/" 
        />
        <ProjectCard
          src="/AR.png"
          title="Avalanche Rescue Interface"
          description="AREAS: An innovative idea proposal platform for our Advanced Avalanche Rescue System, seamlessly integrating thermal and Doppler microwave technology for swift victim detection and real-time data visualization."
         link="https://areas-vigyan.vercel.app/" 
        />
      </div>
    </div>
  );
};

export default Projects;
