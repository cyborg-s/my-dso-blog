import React from "react";
import Head from "@docusaurus/Head";
import Header from "../components/portfolio/header/Header";
import Contact from "../components/portfolio/contact/Contact";
import Footer from "../components/portfolio/footer/Footer";
import Imprint from "../components/portfolio/imprint/Imprint";
import HeaderMobil from "../components/portfolio/header/HeaderMobile";
import { useMediaQuery } from "react-responsive";
import ContactMobile from "../components/portfolio/contact/ContactMobile";
import "../css/fonts.css";

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <Head>
        <title>Sascha Nyßen Imprint</title>
      </Head>
      {isMobile ? <HeaderMobil /> : <Header />}
      <Imprint />
      {isMobile ? <ContactMobile /> : <Contact />}
      <Footer />
    </>
  );
};

export default Home;
