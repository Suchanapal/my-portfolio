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
         link="https://thebillionbooks.store/" 
        />
        <ProjectCard
          src="/Project QP.png"
          title="Quote Sharing Platform"
          description="QuotoPia: Quote enthusiast's web hub with a modern UI for seamless sign-ins, sharing, exploring, and building personal collections. Robust authentication, smooth sharing, powerful search, and interactive features foster a positive and engaging community."
          link="https://project-quoto-pia.vercel.app/"
        />
        <ProjectCard
          src="/DB.png"
          title="HR Dashboard"
          description=" An interactive Excel HR Employee Attrition Dashboard  visualizing the analysis and insights from the IBM employee dataset. Offers an user-friendly interface for informed workforce management decisions.

          ."
         link="https://drive.google.com/drive/folders/1ZcYooU2pCory6uQk3yBJny3nSonmkeoP?usp=sharing" 
        />
        <ProjectCard
          src="/TW.png"
          title="Text Utilizer"
          description="TextWizard: A web project focusing on text efficiency, offering features like contact/email extraction, space removal, text reversal, and accurate word counting. Simplifying text processing experience with ease."
         link="https://textwizard-gold.vercel.app/" 
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
