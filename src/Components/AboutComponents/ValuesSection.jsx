import React from "react";
import { ShieldCheck, Eye, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={18} />,
    title: "Integrity",
    desc: "We uphold the highest standards of journalistic ethics and integrity.",
  },
  {
    icon: <Eye size={18} />,
    title: "Transparency",
    desc: "We are committed to transparency in our reporting processes.",
  },
  {
    icon: <Users size={18} />,
    title: "Inclusivity",
    desc: "We believe in amplifying diverse voices and fostering an inclusive community.",
  },
  {
    icon: <Sparkles size={18} />,
    title: "Innovation",
    desc: "We embrace new tech and storytelling to enhance our readers’ experience.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[#f3f2ef] py-16">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          
          {/* Left Side */}
          <div className="flex items-start gap-4">
            <div className="mt-1 h-[32px] w-[2px] bg-[#d9472a]" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d9472a]">
                What We Believe
              </p>
              <h2 className="mt-1 text-[22px] font-semibold text-[#1e1e1e]">
                Our Values
              </h2>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((item, index) => (
              <div
                key={index}
                className="border border-[#cfcfcf] bg-white p-5"
              >
                <div className="mb-3 text-[#d9472a]">{item.icon}</div>

                <h3 className="text-[13px] font-semibold text-[#1e1e1e]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[11px] leading-[1.6] text-[#555]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}