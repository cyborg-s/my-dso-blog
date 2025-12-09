import React from "react";
import Header from "../components/portfolio/header";
import About from "../components/portfolio/about";
import Projects from "../components/portfolio/projects";
import Skills from "../components/portfolio/skills";
import Contact from "../components/portfolio/contact";
import Footer from "../components/portfolio/footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
