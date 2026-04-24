import React from "react";

const stats = [
  {
    value: "500,000",
    label: "Monthly Unique Visitors",
  },
  {
    value: "100,000+",
    label: "Newsletter Subscribers",
  },
  {
    value: "10,000+",
    label: "Published Articles",
  },
  {
    value: "150+",
    label: "Countries Trust Us",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-[#f2f1ef] py-10">
      <div className="mx-auto w-full max-w-[980px] px-4">
        <div className="mx-auto flex w-full max-w-[920px] flex-col bg-[#d9472a] md:flex-row">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex-1 px-6 py-6 text-white ${
                index !== stats.length - 1
                  ? "border-b border-white/40 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <h3 className="text-[34px] font-bold leading-none">{item.value}</h3>
              <p className="mt-3 text-[13px] font-medium leading-[1.3] text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}