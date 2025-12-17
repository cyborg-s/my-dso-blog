import React from "react";
import Head from "@docusaurus/Head";
import { useMediaQuery } from "react-responsive";
import Header from "../components/portfolio/header/Index";
import HeaderMobil from "../components/portfolio/header/Mobile";
import About from "../components/portfolio/about-me/Index";
import AboutMobile from "../components/portfolio/about-me/Mobile";
import Projects from "../components/portfolio/projects/Index";
import Skills from "../components/portfolio/skills/Index";
import Contact from "../components/portfolio/contact/Index";
import Footer from "../components/portfolio/footer/Index";
import SkillsMobile from "../components/portfolio/skills/Mobile";
import ProjectsMobile from "../components/portfolio/projects/Mobile";
import ContactMobile from "../components/portfolio/contact/Mobile";

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
