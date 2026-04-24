import React from "react";

const journalists = [
  {
    name: "Alex Wood",
    role: "Editor-in-Chief",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Taylor Kim",
    role: "Senior Reporter",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Riley Brooks",
    role: "Features Writer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
  },
];

export default function ExperiencedJournalists() {
  return (
    <section className="relative bg-black py-16 md:py-20">
      <div className="mx-auto max-w-[980px] px-6">
        <div className="mb-10 flex items-start gap-3">
          <div className="mt-[3px] h-[32px] w-[1px] bg-[#e24a2b]" />
          <div>
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#e24a2b]">
              Our Thoughts
            </p>
            <h2 className="text-[22px] font-bold leading-none text-white md:text-[30px]">
              Experienced Journalists
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {journalists.map((item, index) => (
            <div key={index}>
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[250px] w-full object-cover md:h-[270px]"
                />
              </div>

              <div className="pt-3">
                <h3 className="text-[16px] font-bold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-[11px] font-medium text-white/80">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      
    </section>
  );
}