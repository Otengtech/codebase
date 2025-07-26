import React, { useState, useEffect } from "react";
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import ServiceSection from "../Components/Home/ServiceSection";
import Course from "../Components/Home/Course";
import Review from "../Components/Home/Review";
import FAQSection from "../Components/Home/Faqs";
import Footer from "../Components/Home/Footer";
import { FaQuestion } from "react-icons/fa";
import QuizSection from "./QuizSection";
import WhyChooseUs from "../Components/Home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection />
      <Course />
      <WhyChooseUs />
      <Review />
      <Footer />
    </>
  );
};

export default Home;
