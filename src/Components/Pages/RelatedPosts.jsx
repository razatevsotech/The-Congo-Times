import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const relatedPosts = [
  {
    id: 1,
    title: "Mauris sit amet faucibus nisl",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Suspendisse potenti sit amet",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=500&q=80",
  },
];

export default function NewsDetails() {
  return (
   <main className="min-h-screen bg-[#f4f4f4] py-6">
    <Header showSlider={false}/>
  <div className="mx-auto grid w-full max-w-[980px] grid-cols-1 gap-6 px-4 lg:grid-cols-[205px_430px_205px] lg:items-start lg:px-0">
    {/* Left Ad */}
    <aside className="hidden lg:block">
      <div className="sticky top-6 h-[635px] bg-[#1c1c1c] px-5 py-8 text-white">
        <p className="text-center text-[8px] font-bold uppercase tracking-[2px]">
          Sections
        </p>

        <h2 className="mt-6 text-center text-[28px] font-bold uppercase leading-[1.05] tracking-[3px]">
          Business <br /> Banner
        </h2>

        <div className="mt-10 h-[300px] bg-gradient-to-b from-[#262626] to-[#3a3a3a]" />

        <div className="mt-8 text-center">
          <h3 className="text-[18px] font-bold uppercase leading-none">
            Headline
          </h3>
          <p className="mt-1 text-[11px] uppercase tracking-[2px] text-white/80">
            Text here
          </p>
          <p className="mt-4 text-[8px] leading-[1.5] text-white/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </aside>

    {/* Center UI - unchanged */}
    <div className="mx-auto w-full max-w-[430px] bg-white px-5 py-4">
      <p className="text-[9px] font-bold uppercase tracking-wide text-[#e43d30]">
        News
      </p>

      <h1 className="mt-1 text-[20px] font-bold leading-[1.15] text-[#151515]">
        Mauris in nibh sollicitudin felis suscipit bibendum
      </h1>

      <div className="mt-3 flex items-center gap-2 text-[9px] text-[#777]">
        <span>By Admin</span>
        <span>•</span>
        <span>February 24, 2025</span>
      </div>

      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
        alt="News"
        className="mt-4 h-[185px] w-full object-cover"
      />

      <article className="mt-5 space-y-4 text-[11px] leading-[1.75] text-[#555]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          libero nec lectus facilisis consequat. Donec sed mauris sed lorem
          gravida dignissim.
        </p>

        <p>
          Aliquam erat volutpat. Praesent ac augue non lacus pretium feugiat.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>

        <h2 className="pt-2 text-[15px] font-bold text-[#151515]">
          The standard chunk of Lorem Ipsum
        </h2>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit.
        </p>

        <blockquote className="border-l-[3px] border-[#e43d30] pl-3 text-[12px] font-medium italic leading-[1.7] text-[#333]">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor.”
        </blockquote>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </article>

      <div className="mt-6 flex flex-wrap gap-2">
        {["Business", "News", "World"].map((tag) => (
          <span
            key={tag}
            className="border border-[#ddd] px-2 py-1 text-[9px] uppercase text-[#777]"
          >
            {tag}
          </span>
        ))}
      </div>

      <section className="mt-8">
        <h3 className="border-b border-[#ddd] pb-2 text-[13px] font-bold text-[#111]">
          Related Posts
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {relatedPosts.map((post) => (
            <Link key={post.id} to={`/news/${post.id}`}>
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[78px] w-full object-cover"
                />
                <h4 className="mt-2 text-[10px] font-bold leading-tight text-[#222]">
                  {post.title}
                </h4>
                <p className="mt-1 text-[8px] text-[#888]">
                  February 24, 2025
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-[13px] font-bold text-[#111]">Leave a Reply</h3>
        <p className="mt-2 text-[10px] text-[#777]">
          Your email address will not be published.
        </p>

        <form className="mt-4 space-y-3">
          <textarea
            placeholder="Comment"
            className="h-[95px] w-full resize-none border border-[#ddd] px-3 py-2 text-[10px] outline-none"
          />

          <input
            type="text"
            placeholder="Name"
            className="h-[34px] w-full border border-[#ddd] px-3 text-[10px] outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="h-[34px] w-full border border-[#ddd] px-3 text-[10px] outline-none"
          />

          <input
            type="text"
            placeholder="Website"
            className="h-[34px] w-full border border-[#ddd] px-3 text-[10px] outline-none"
          />

          <button
            type="button"
            className="bg-[#e43d30] px-4 py-2 text-[10px] font-bold uppercase text-white"
          >
            Post Comment
          </button>
        </form>
      </section>
    </div>

    {/* Right Ad */}
    <aside className="hidden lg:block">
      <div className="sticky top-6 h-[405px] overflow-hidden bg-[#16210f] px-4 py-5 text-white">
        <div className="text-right">
          <span className="rounded-full bg-[#a5d63f] px-2 py-1 text-[8px] font-bold text-black">
            ✓
          </span>
        </div>

        <p className="text-center text-[8px] uppercase tracking-wide text-white/70">
          Business
        </p>

        <h3 className="mt-5 text-center text-[19px] font-bold leading-tight">
          Transform <br /> your company
        </h3>

        <h2 className="mt-2 text-center text-[22px] font-bold leading-tight">
          Business <br /> consultancy
        </h2>

        <div className="mx-auto mt-3 w-fit rounded-full border border-[#b4dc4b] px-3 py-1 text-[8px] text-[#b4dc4b]">
          consultation
        </div>

        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
          alt="Business consultant"
          className="mx-auto mt-6 h-[210px] w-[155px] object-cover grayscale"
        />
      </div>
    </aside>
  </div>
  <Footer/>
</main>

  );
}