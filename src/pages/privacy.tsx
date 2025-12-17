import React from "react";
import Head from "@docusaurus/Head";
import Header from "../components/portfolio/header/Header";
import Contact from "../components/portfolio/contact/Contact";
import Footer from "../components/portfolio/footer/Footer";
import Privacy from "../components/portfolio/privacy/Privacy";
import { useMediaQuery } from "react-responsive";
import HeaderMobil from "../components/portfolio/header/HeaderMobile";
import ContactMobile from "../components/portfolio/contact/ContactMobile";
import "../css/fonts.css";

const Home: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <Head>
        <title>Sascha Nyßen Legal Notice</title>
      </Head>
      {isMobile ? <HeaderMobil /> : <Header />}
      <Privacy />
      {isMobile ? <ContactMobile /> : <Contact />}
      <Footer />
    </>
  );
};

export default Home;
