import React from "react";

const posts = [
  {
    id: 1,
    category: "HEALTH",
    title: "The Role of Sleep in Immune System Support",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum [...]",
  },
  {
    id: 2,
    category: "HEALTH",
    title: "Breaking Down the Latest Nutritional Guidelines",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum",
  },
  {
    id: 3,
    category: "HEALTH",
    title: "How Climate Change is Impacting Community Health",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum",
  },
  {
    id: 4,
    category: "HEALTH",
    title: "The Mental Health Benefits Backed by Science",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum",
  },
  {
    id: 5,
    category: "HEALTH",
    title: "Exploring the Connection Between Gut Health and Mental Well-being",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
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

const HealthSection = () => {
  return (
    <div className="min-h-screen bg-[#f7f6f3] px-4 py-8 sm:px-6 lg:px-0">
      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-8 md:grid-cols-[2.2fr_1fr]">
        {/* Left Content */}
        <div className="pr-0 md:border-r md:border-[#6f6f6f] md:pr-8">
          <h2 className="mb-3 text-[30px] font-bold leading-none text-black sm:text-[34px]">
            Health
          </h2>
          <div className="mb-6 border-t border-[#6f6f6f]"></div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.id}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-3 h-[170px] w-full object-cover sm:h-[120px] lg:h-[95px]"
                />

                <p className="mb-2 text-[9px] font-semibold uppercase tracking-wide text-[#d16f5d]">
                  {post.category}
                </p>

                <h3 className="mb-3 text-[22px] font-medium leading-[1.15] text-[#111] sm:text-[25px]">
                  {post.title}
                </h3>

                <p className="mb-3 text-[10px] text-[#222]">{post.date}</p>

                <p className="text-[13px] leading-[1.8] text-[#7b7b7b]">
                  {post.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="border-t border-[#6f6f6f] pt-6 md:border-t-0 md:pl-2 md:pt-0">
          <div className="mb-8">
            <label className="mb-2 block text-[10px] text-[#444]">
              Search
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="h-[22px] w-[102px] border border-black bg-white px-2 text-[11px] outline-none"
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
                  className="cursor-pointer text-[12px] leading-[1.6] text-[#d16f5d] hover:underline"
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
                  className="cursor-pointer text-[12px] text-[#d16f5d] hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HealthSection;