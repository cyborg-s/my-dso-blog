import React from "react";
import Head from "@docusaurus/Head";
import { useMediaQuery } from "react-responsive";
import Header from "../components/portfolio/header/Header";
import HeaderMobil from "../components/portfolio/header/HeaderMobile";
import About from "../components/portfolio/about-me/About";
import AboutMobile from "../components/portfolio/about-me/AboutMobile";
import Projects from "../components/portfolio/projects/Projects";
import Skills from "../components/portfolio/skills/Skills";
import Contact from "../components/portfolio/contact/Contact";
import Footer from "../components/portfolio/footer/Footer";
import SkillsMobile from "../components/portfolio/skills/SkillsMobile";
import ProjectsMobile from "../components/portfolio/projects/ProjectsMobile";
import ContactMobile from "../components/portfolio/contact/ContactMobile";

import "../css/fonts.css";

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Head>
        <title>Sascha Nyßen Portfolio</title>
      </Head>
      {isMobile ? <HeaderMobil /> : <Header />}
      {isMobile ? <AboutMobile /> : <About />}
      {isMobile ? <SkillsMobile /> : <Skills />}
      {isMobile ? <ProjectsMobile /> : <Projects />}
      {isMobile ? <ContactMobile /> : <Contact />}
      <Footer />
    </>
  );
};

export default Home;
