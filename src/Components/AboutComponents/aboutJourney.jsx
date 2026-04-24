import React from "react";


const AboutJourney = () => {
  return (
    <section className="bg-white py-2">
      <div className="max-w-[980px] mx-auto">
        {/* Top Image */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Team meeting"
            className="w-full h-[260px] object-cover"
          />
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5">
          {/* Left */}
          <div className="flex items-start gap-3">
            <div className="w-[1px] h-[34px] bg-[#e24b2d] mt-[2px]"></div>

            <div>
              <p className="text-[7px] uppercase tracking-[1px] text-[#e24b2d] font-semibold mb-2">
                Our Journey
              </p>

              <h2 className="text-[18px] md:text-[20px] leading-none font-medium text-[#111]">
                From Vision to Voice
              </h2>
            </div>
          </div>

          {/* Right */}
          <div className="text-[10px] leading-[1.95] text-[#6b6b6b] max-w-[390px]">
            <p className="mb-4">
              In 2015, in a small coffee shop bustling with ideas and ambition,
              a group of passionate journalists and thought leaders came together
              with a singular vision: to create a news platform that would bridge
              the gap between breaking news and insightful analysis. We noticed a
              growing demand for quality journalism that not only reported facts
              but also provided context and depth.
            </p>

            <p className="mb-4">
              Driven by a commitment to transparency and diversity, we launched
              Nexus News as a digital haven for curious minds. Our founders, Alex
              Wood, believed in the power of storytelling to illuminate complex
              issues and spark meaningful conversations. From covering local
              community stories to global events, our journey has been about
              connecting people through the power of information.
            </p>

            <p>
              Today, Nexus News continues to evolve, driven by a passionate team
              and a supportive community. As we look to the future, we remain
              committed to elevating voices, uncovering truths, and inspiring
              change through our stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;