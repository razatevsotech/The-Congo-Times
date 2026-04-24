import React from "react";

const worldPosts = [
  {
    id: 1,
    category: "WORLD",
    title: "Understanding the Dynamics of Global Trade Agreements",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum [...]",
  },
  {
    id: 2,
    category: "WORLD",
    title: "The Role of International Organizations in Crisis Management",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum",
  },
  {
    id: 3,
    category: "WORLD",
    title: "How Climate Change is Reshaping Global Landscapes",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum",
  },
  {
    id: 4,
    category: "WORLD",
    title: "Global Migration Trends: Causes and Consequences",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum",
  },
];

const recentPosts = [
  "Olympics 2025: The Cyclists to Watch",
  "The Top Film Festivals Showcasing Emerging Talent",
  "How Virtual Reality is Revolutionizing the Art World",
  "Understanding the Evolution of Digital Art Marketplaces",
  "Understanding Voter Turnout Trends in Democratic Elections",
];

const categories = [
  "Arts (4)",
  "Business (2)",
  "Health (5)",
  "Politics (2)",
  "Science (2)",
  "Sports (2)",
  "World (4)",
];

const World = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-0">
      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-8 md:grid-cols-[2.15fr_1fr]">
        <div className="pr-0 md:border-r md:border-[#6f6f6f] md:pr-8">
          <h2 className="mb-3 text-[18px] font-bold text-[#111] md:text-[20px]">
            World
          </h2>

          <div className="mb-4 border-t border-[#6f6f6f]"></div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {worldPosts.map((post) => (
              <div key={post.id}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-3 h-[160px] w-full object-cover sm:h-[100px] lg:h-[62px]"
                />

                <p className="mb-2 text-[7px] font-semibold uppercase tracking-wide text-[#d16f5d]">
                  {post.category}
                </p>

                <h3 className="mb-2 max-w-full text-[14px] font-medium leading-[1.2] text-[#111] sm:max-w-[155px]">
                  {post.title}
                </h3>

                <p className="mb-3 text-[8px] text-[#222]">{post.date}</p>

                <p className="max-w-full text-[10px] leading-[1.9] text-[#7b7b7b] sm:max-w-[160px]">
                  {post.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="border-t border-[#6f6f6f] pt-6 md:border-t-0 md:pl-2 md:pt-0">
          <div className="mb-8">
            <label className="mb-2 block text-[9px] text-[#444]">Search</label>
            <div className="flex items-center gap-1">
              <input
                type="text"
                className="h-[22px] w-[102px] border border-black bg-white px-2 text-[10px] outline-none"
              />
              <button className="h-[22px] bg-black px-3 text-[10px] font-medium text-white">
                Search
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-[18px] font-semibold text-black">
              Recent Posts
            </h3>
            <ul className="space-y-2">
              {recentPosts.map((post, index) => (
                <li
                  key={index}
                  className="max-w-[220px] cursor-pointer text-[11px] leading-[1.6] text-[#d16f5d] hover:underline"
                >
                  {post}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[18px] font-semibold text-black">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-[11px] text-[#d16f5d] hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default World;