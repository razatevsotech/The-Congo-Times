import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import businessImg from "../../assets/busines.jpg";
import bannerImg from "../../assets/banner2.png";

const relatedPosts = [
  {
    id: 1,
    title: "The Mental Health Benefits Backed by Science",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "How Climate Change is Impacting Global Health",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=500&q=80",
  },
];

export default function NewsDetails() {
  return (
    <main className="min-h-screen bg-[#efefef]">
      <Header showSlider={false} />

      {/* TOP BANNER IMAGE */}
      <div className="mx-auto mt-6 max-w-[1100px] px-4">
        <div className="flex h-[120px] w-full items-center justify-center overflow-hidden bg-white px-4">
          <img
            src={bannerImg}
            alt="Banner"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="mx-auto mt-6 grid max-w-[1100px] grid-cols-1 gap-6 px-4 lg:grid-cols-[180px_1fr_220px]">
        {/* LEFT ADS */}
        <aside className="hidden space-y-5 lg:block">
          <div className="flex h-[360px] items-center justify-center bg-gradient-to-b from-purple-500 to-indigo-800 text-center font-bold text-white">
            GRADIENT BANNER
          </div>

          <div className="flex h-[360px] items-center justify-center bg-gradient-to-b from-indigo-900 to-blue-700 text-center font-bold text-white">
            GRADIENT BANNER
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <section className="bg-white p-6 shadow-sm">
          <h1 className="text-[24px] font-bold leading-tight text-[#111]">
            Exploring the Connection Between Gut Health and Mental Well-being
          </h1>

          <p className="mt-2 text-[11px] text-[#777]">
            By kalpeshb | February 24, 2025
          </p>

          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
            alt="Article"
            className="mt-4 h-[260px] w-full object-cover"
          />

          <div className="mt-4 space-y-4 text-[12px] leading-[1.8] text-[#555]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p>Donec id lorem a ex porta viverra eget nec massa...</p>

            <blockquote className="border-l-4 border-red-500 pl-4 italic text-[#444]">
              Excepteur sint occaecat cupidatat non proident...
            </blockquote>

            <p>Morbi nec imperdiet lectus...</p>
          </div>

          {/* MUST READ */}
          <div className="mt-10 bg-[#f5f5f5] p-4">
            <h3 className="mb-4 text-[16px] font-bold">Must Read</h3>

            <div className="grid grid-cols-2 gap-4">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/news/${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[120px] w-full object-cover"
                  />

                  <h4 className="mt-2 text-[12px] font-bold">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>

{/* FOOD BANNER (LIKE SS) */}
<div className="mx-auto mt-8 max-w-[1100px] px-4">
  <div className="relative h-[130px] w-full overflow-hidden bg-[#8b001e]">
    <img
      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
      alt="Food Banner"
      className="absolute right-0 top-0 h-full w-[50%] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#8b001e] via-[#b3002d] to-transparent"></div>

    <div className="relative z-10 flex h-full flex-col justify-center px-6 text-white">
      <h2 className="text-[20px] font-bold uppercase">
        Headline Goes Here
      </h2>
      <p className="text-[10px] mt-1">Stay home, we deliver</p>
    </div>
  </div>

  {/* dots */}
  <div className="mt-2 flex justify-center gap-2">
    <span className="h-2 w-2 rounded-full bg-black"></span>
    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
  </div>
</div>

{/* COMMENT SECTION (EXACT LIKE YOUR LAST SS) */}
<div className="mx-auto mt-8 max-w-[1100px] px-4">
  <div className="bg-[#f5f5f5] px-8 py-8">
    <h2 className="text-[16px] font-semibold text-[#222]">
      Leave a Comment
    </h2>

    <p className="mt-2 text-[11px] text-[#777]">
      Your email address will not be published. Required fields are marked *
    </p>

    <textarea
      placeholder="Type here.."
      className="mt-4 h-[160px] w-full resize-none border border-[#ccc] bg-white px-4 py-3 text-[11px] outline-none"
    />

    <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
      <input
        type="text"
        placeholder="Name*"
        className="h-[36px] border border-[#ccc] bg-white px-3 text-[11px] outline-none"
      />
      <input
        type="email"
        placeholder="Email*"
        className="h-[36px] border border-[#ccc] bg-white px-3 text-[11px] outline-none"
      />
      <input
        type="text"
        placeholder="Website"
        className="h-[36px] border border-[#ccc] bg-white px-3 text-[11px] outline-none"
      />
    </div>

    <label className="mt-3 flex items-center gap-2 text-[11px] text-[#555]">
      <input type="checkbox" className="h-3 w-3" />
      Save my name, email, and website in this browser for the next time I comment.
    </label>

    <button className="mt-4 bg-[#d63c2f] px-6 py-2 text-[11px] font-semibold text-white">
      Post Comment
    </button>
  </div>
</div>

          
        </section>

        {/* RIGHT ADS */}
        <aside className="hidden space-y-5 lg:block">
          <div className="relative flex h-[300px] items-center justify-center overflow-hidden text-center text-white">
            <img
              src={businessImg}
              alt="Business Consultancy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="flex h-[300px] items-center justify-center bg-gradient-to-b from-blue-800 to-indigo-900 text-center text-white">
            BUSINESS BANNER
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}