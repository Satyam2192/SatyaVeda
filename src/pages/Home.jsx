import React from "react";
import Hero from "../components/Hero";
import Why from "../components/Why";
import { Team } from "../components/Team";
import About from "../components/About";
import Faqs from "../components/Faqs";
import WorkProgress from "../components/WorkProgress";

const Home = () => {
  return (
    <div>
      <Hero />
      <Why />
      <About />
      <WorkProgress />
      <Faqs />
      <Team />
    </div>
  );
};

export default Home;
