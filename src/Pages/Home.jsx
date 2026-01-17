import React from "react";
import HeroSection from "../Components/HeroSection";
import { useLoaderData } from "react-router";
import LatestCard from "../Components/LatestCard";
import AboutAIModels from "../Components/AboutAIModels";
import GetStarted from "../Components/GetStarted";
import StatsSection from "../Components/StatsSection";
import Categories from "../Components/Categories";
import Testimonials from "../Components/Testimonials";
import AI_FAQ from "../Components/AI_FAQ";
import AI_News from "../Components/AI_News";
import Newsletter from "../Components/Newsletter";
import FinalCTA from "../Components/FinalCTA";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-10">Featured AI Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 md:mb-20 mx-3 md:mx-0">
          {data.map((model) => (
            <LatestCard key={model._id} model={model}></LatestCard>
          ))}
        </div>
      </div>
      <AboutAIModels></AboutAIModels>
      <StatsSection></StatsSection>
      <Categories></Categories>
      <GetStarted></GetStarted>
      <Testimonials></Testimonials>
      <AI_FAQ></AI_FAQ>
      <AI_News></AI_News>
      <Newsletter></Newsletter>
      <FinalCTA></FinalCTA>
    </div>
  );
};

export default Home;
