import React from "react";
import Nav from "./Nav/Nav";
import HeroSection from "./HeroSection/HeroSection";
import OurServices from "./OurServices/OurServices";
import WhyUs from "./WhyUs/WhyUs";
import Testimonials from "./Testimonials/Testimonials";
import BonusPage from "./BonusPage/BonusPage";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";

const Index = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <OurServices />
      <WhyUs />
      <Testimonials />
      <BonusPage />
      <Faq />
      <Footer />
    </>
  );
};

export default Index;
