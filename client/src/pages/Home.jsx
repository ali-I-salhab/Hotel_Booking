import React from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import ExclusiveOffer from "../components/ExclusiveOffer";
import FeatureDestination from "../components/FeatureDestination";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeatureDestination></FeatureDestination>
      <ExclusiveOffer />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
