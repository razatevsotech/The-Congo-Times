import React from "react";

const technologyPosts = [
  {
    id: 1,
    category: "SCIENCE",
    title: "The Challenges of Space Exploration in the 21st Century",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum [...]",
  },
  {
    id: 2,
    category: "SCIENCE",
    title: "Understanding the Human Brain: New Insights from Neuroscience",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
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

const Technology = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-7 sm:px-6 lg:px-0">
      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-10 md:grid-cols-[2.2fr_1fr]">
        <div className="pr-0 md:border-r md:border-[#6d6d6d] md:pr-10">
          <h2 className="mb-4 text-[18px] font-bold text-[#111] md:text-[20px]">
            Science
          </h2>

          <div className="mb-5 border-t border-[#6d6d6d]"></div>

          <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2">
            {technologyPosts.map((post) => (
              <div key={post.id} className="w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-4 h-[170px] w-full object-cover sm:h-[120px] md:h-[82px]"
                />

                <p className="mb-3 text-[8px] font-semibold uppercase tracking-wide text-[#d96d5d]">
                  {post.category}
                </p>

                <h3 className="mb-3 max-w-full text-[17px] font-medium leading-[1.15] text-[#111] sm:max-w-[185px]">
                  {post.title}
                </h3>

                <p className="mb-4 text-[9px] font-medium text-[#222]">
                  {post.date}
                </p>

                <p className="max-w-full text-[11px] leading-[1.9] text-[#6f6f6f] sm:max-w-[185px]">
                  {post.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="border-t border-[#6d6d6d] pt-6 md:border-t-0 md:pt-0">
          <div className="mb-8">
            <label className="mb-2 block text-[10px] text-[#444]">
              Search
            </label>

            <div className="flex items-center gap-2">
              <input
                type="text"
                className="h-[28px] w-[134px] border border-[#6d6d6d] bg-transparent px-2 text-[11px] outline-none"
              />
              <button className="h-[28px] bg-black px-4 text-[11px] font-semibold text-white">
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
                  className="max-w-[240px] cursor-pointer text-[12px] leading-[1.65] text-[#d96d5d] hover:underline"
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

            <ul className="space-y-3">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-[12px] text-[#d96d5d] hover:underline"
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

export default Technology;