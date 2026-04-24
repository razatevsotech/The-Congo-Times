import React from "react";
import testimonialImage from "./../../assets/testimonial-400x252.jpg";


export default function TestimonialSection() {
  return (
    <section className="bg-[#f3f2ef] py-16 md:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-[470px]">
            <div className="mb-6 flex items-start gap-3">
              <div className="mt-[3px] h-[32px] w-[1px] bg-[#df4b2f]" />
              <div>
                <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#df4b2f]">
                  Testimonial
                </p>
                <h2 className="text-[24px] font-semibold leading-tight text-[#111] md:text-[34px]">
                  What Readers Are Saying
                </h2>
              </div>
            </div>

            <p className="text-[12px] leading-[1.9] text-[#666]">
              “Discovering Nexus News has truly transformed how I keep up with current
              events. The depth and quality of their reporting are unmatched, offering a
              refreshing blend of hard-hitting journalism and insightful analysis.
              Whether it’s breaking news or in-depth features, Nexus News never fails to
              provide the context and clarity I need. The diverse range of topics and the
              commitment to unbiased reporting make it my go-to source for staying
              informed. Kudos to the team for maintaining such high standards!”
            </p>

            <div className="mt-6">
              <p className="text-[11px] font-semibold text-[#df4b2f]">
                — Jordan Mitchell
              </p>
              <p className="mt-1 text-[10px] text-[#777]">Avid Reader</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src= {testimonialImage}
              alt="Reader testimonial"
              className="h-[220px] w-full max-w-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}