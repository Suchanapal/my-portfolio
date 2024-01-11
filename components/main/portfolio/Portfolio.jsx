"use client"
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Business Website ",
    img: "/RW project.png",
    desc: "Spicy Reception is a dynamic restaurant website with features such as current offers, menus, team profiles, chef's insights, and historical information. The site includes functionalities like filtered menus, a user-friendly booking system, and secure sign-in capabilities for a personalized experience. Developed with a focus on a seamless user journey, it provides a professional and efficient platform for users to explore, learn about, and book tables at our restaurant.",
    link: "https://spicy-reception.vercel.app/",
    
  },
  {
    id: 2,
    title: "E-commerce Website",
    img: "/Project BB.png",
    desc: "BillionBooks is an e-commerce site designed for effortless online shopping. With a user-friendly interface, it allows users to browse, purchase, and explore personalized book recommendations. The platform boasts secure user authentication, smooth transactions, advanced search, and engaging features. BillionBooks is a convenient and enjoyable space for book enthusiasts to discover and connect with their favorite reads.",
    link: "https://thebillionbooks.store/",
  },
  {
    id: 3,
    title: "Quote-Sharing Platform",
    img: "/Project QP.png",
    desc: "QuotoPia is a web project for quote enthusiasts, featuring a modern UI for seamless user experiences. Users can sign in, share, explore, and build personal quote collections. The technical foundation includes robust authentication, seamless sharing, powerful search, and interactive features. QuotopiA fosters a positive and engaging community, connecting individuals through shared inspiration.",
    link: "https://project-quoto-pia.vercel.app/",
  },
  {
    id: 4,
    title: "HR Dashboard",
    img: "/DB.png",
    desc: "Using the IBM employee dataset, this Excel dashboard employs data-driven insights to analyze HR employee attrition. Through visualizations and analytics, it provides a concise overview of attrition trends, identifies contributing factors, and offers a demographic breakdown. The dashboard, designed for efficient data analysis, helps HR professionals make informed decisions to address and mitigate employee turnover.",
    link: "https://drive.google.com/drive/folders/1ZcYooU2pCory6uQk3yBJny3nSonmkeoP?usp=sharing",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Portfolio" >
      <div className="container mt-4">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <Image src={item.img} alt="" height={370} width={600} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.a
      variants={slideInFromLeft(1)}
      className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      href={item.link}
      target="_blank"  
      rel="noopener noreferrer"  
    >
      See Live!
    </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio z-20" ref={ref}>
      <div className="progress">
        <h1 className="mt-10 mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-bold ">Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar mb-2"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;