import React from "react";

export default function MissionVisionSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative h-[340px] w-full md:h-[370px] lg:h-[340px]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
          alt="Mission and Vision"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-start justify-center px-6 py-16 md:px-10 lg:px-16">
          <div className="grid w-full max-w-[980px] grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            {/* Left Content */}
            <div className="pt-1 text-white">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#e14b2c]">
                Our Thoughts
              </p>
              <h2 className="text-[24px] font-bold leading-tight md:text-[34px]">
                The Mission &amp; Vision
              </h2>
            </div>

            {/* Right Card */}
            <div className="max-w-[420px] bg-[#d9472a] px-8 py-8 text-white shadow-lg">
              <div>
                <h3 className="mb-3 text-[18px] font-bold">
                  Mission: Informing Minds
                </h3>
                <p className="text-[13px] leading-6 text-white/95">
                  Our mission is to deliver accurate, comprehensive, and
                  thought-provoking news that empowers our readers to make
                  informed decisions and engage with the world around them.
                </p>
              </div>

              <div className="my-6 border-t border-white/40" />

              <div>
                <h3 className="mb-3 text-[18px] font-bold">
                  Vision: Connecting Communities
                </h3>
                <p className="text-[13px] leading-6 text-white/95">
                  Our vision is to become a leading platform that connects
                  diverse communities through insightful journalism, fostering
                  understanding and driving positive change globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}