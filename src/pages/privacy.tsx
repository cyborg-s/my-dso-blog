import React from "react";
import Head from "@docusaurus/Head";
import Header from "../components/portfolio/header/Index";
import Contact from "../components/portfolio/contact/Index";
import Footer from "../components/portfolio/footer/Index";
import Privacy from "../components/portfolio/privacy/Index";
import { useMediaQuery } from "react-responsive";
import HeaderMobil from "../components/portfolio/header/Mobile";
import ContactMobile from "../components/portfolio/contact/Mobile";
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
