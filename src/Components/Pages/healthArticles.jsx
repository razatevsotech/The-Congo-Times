import React from "react";

const healthArticles = [
  {
    id: 1,
    category: "HEALTH",
    title: "The Mental Health Benefits Backed by Science",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "HEALTH",
    title: "How Climate Change is Impacting Global Health",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "HEALTH",
    title: "Breaking Down the Latest Nutritional Guidelines",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "HEALTH",
    title: "The Role of Sleep in Immune System Support",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HealthSection() {
  return (
    <section className="bg-[#f3f2ef] py-4">
      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex w-full items-center">
            <div className="mr-3 h-[20px] w-[2px] bg-[#df4b2f]" />
            
            <h2 className="mr-4 text-[15px] font-medium text-[#111]">
              Health
            </h2>

            <div className="h-[1px] w-full bg-[#6f6f6f]" />
          </div>

          <span className="ml-4 text-[13px] text-[#df4b2f] underline cursor-pointer">
            View All →
          </span>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {healthArticles.map((item) => (
            <div key={item.id}>
              
              <img
                src={item.image}
                alt={item.title}
                className="h-[220px] w-full object-cover"
              />

              <div className="pt-4">
                <p className="text-[10px] font-semibold uppercase text-[#df4b2f]">
                  {item.category}
                </p>

                <h3 className="mt-2 text-[15px] font-medium leading-[1.2] text-[#111]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[12px] text-[#8a8a8a]">
                  {item.date}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}