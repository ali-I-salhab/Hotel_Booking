import React from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import ExclusiveOffer from "../components/ExclusiveOffer";
import FeatureDestination from "../components/FeatureDestination";
import NewsLetter from "../components/NewsLetter";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeatureDestination></FeatureDestination>
      <ExclusiveOffer />
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default Home;
