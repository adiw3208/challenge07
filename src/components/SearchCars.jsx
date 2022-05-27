import React from "react";
import Nav from "./Nav/Nav";
import HeroSection from "./HeroSection/HeroSection";
import FormSearchCars from "./FormSearchCars/FormSearchCars";
import ListCars from "./ListCars/ListCars";
import Footer from "./Footer/Footer";

const SearchCars = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <FormSearchCars />
      <ListCars />
      <Footer />
    </>
  );
};

export default SearchCars;
