import React from "react";
import AboutJourney from "../AboutComponents/aboutJourney";
import StatsSection from "../AboutComponents/statsSection";
import MissionSection from "../AboutComponents/MissionVisionSection";
import ValuesSection from "../AboutComponents/ValuesSection";
import ExperiencedJournalists from "../AboutComponents/journalists";
import TestimonialSection from "../AboutComponents/TestimonialSection";
import AboutSlider from "../AboutComponents/aboutSlider";

const About = () => {
  return (
    <main className="w-full overflow-hidden">
      <AboutJourney />
      <StatsSection />
      <MissionSection />
      <ValuesSection />
      <ExperiencedJournalists />
      <TestimonialSection />
      <AboutSlider />
    </main>
  );
};

export default About;