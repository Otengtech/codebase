import React, { useState, useEffect } from "react";
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import ServiceSection from "../Components/Home/ServiceSection";
import Course from "../Components/Home/Course";
import Review from "../Components/Home/Review";
import Footer from "../Components/Home/Footer";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Newsletter from "../Components/Home/Newsletter";
import SwingCards from "../Components/Home/SwingCards";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection />
      <Course />
      <SwingCards />
      <WhyChooseUs />
      <Review />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
