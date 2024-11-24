import React from "react";
import Home from "../components/Home";
import FeaturedHouse from "../components/FeaturedHouse";
import OurHouse from "../components/OurHouse";
import AboutUs from "../components/AboutUs";
import OurPartnership from "../components/OurPartnership";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function page() {
  return (
    <>
      <Home />
      <FeaturedHouse />
      <OurHouse />
      <AboutUs />
      <OurPartnership />
      <Subscribe />
      <Footer />
    </>
  );
}

export default page;
