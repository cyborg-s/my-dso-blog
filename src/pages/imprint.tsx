import React from "react";
import Head from "@docusaurus/Head";
import Header from "../components/portfolio/header/Index";
import Contact from "../components/portfolio/contact/Index";
import Footer from "../components/portfolio/footer/Index";
import Imprint from "../components/portfolio/imprint/Index";
import HeaderMobil from "../components/portfolio/header/Mobile";
import { useMediaQuery } from "react-responsive";
import ContactMobile from "../components/portfolio/contact/Mobile";
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
