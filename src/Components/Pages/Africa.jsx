import React from "react";

const artsPosts = [
  {
    id: 1,
    category: "ARTS",
    title: "The Top Film Festivals Showcasing Emerging Talent",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum [...]",
  },
  {
    id: 2,
    category: "ARTS",
    title: "How Virtual Reality is Revolutionizing the Art World",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum",
  },
  {
    id: 3,
    category: "ARTS",
    title: "Understanding the Evolution of Digital Art Marketplaces",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum",
  },
  {
    id: 4,
    category: "ARTS",
    title: "Exploring the Impact of AI on Creative Industries",
    date: "February 24, 2025",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis",
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

const Arts = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-0">
      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-8 md:grid-cols-[2.15fr_1fr]">
        <div className="pr-0 md:border-r md:border-[#6f6f6f] md:pr-8">
          <h2 className="mb-3 text-[18px] font-bold text-[#111] md:text-[20px]">
            Arts
          </h2>

          <div className="mb-4 border-t border-[#6f6f6f]"></div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {artsPosts.map((post) => (
              <div key={post.id}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="mb-3 h-[160px] w-full object-cover sm:h-[100px] lg:h-[60px]"
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

export default Arts;