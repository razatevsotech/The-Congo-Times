import React, { useState } from "react";
import banner from "../../assets/banner.jpg";
import techAd from "../../assets/add.jpg";
import sideAd from "../../assets/Arrivals.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function NewsHeroSection() {
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

  const worldPosts = [
    {
      id: 1,
      category: "WORLD",
      title: "How Climate Change is Reshaping Global Landscapes",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      category: "WORLD",
      title: "The Role of International Organizations in Crisis Management",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      category: "WORLD",
      title: "Understanding the Dynamics of Global Trade Agreements",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const artsPosts = [
    {
      id: 1,
      category: "ARTS",
      title: "Understanding the Evolution of Digital Art Marketplaces",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      category: "ARTS",
      title: "How Virtual Reality is Revolutionizing the Art World",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      category: "ARTS",
      title: "The Top Film Festivals Showcasing Emerging Talent",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const banners = [
    { src: banner, alt: "Cosmetic Advertisement 1" },
    { src: banner, alt: "Cosmetic Advertisement 2" },
    { src: banner, alt: "Cosmetic Advertisement 3" },
  ];

  const techAds = [
    { src: techAd, alt: "Technology Advertisement 1" },
    { src: techAd, alt: "Technology Advertisement 2" },
  ];

  const [currentBottomAd, setCurrentBottomAd] = useState(0);

  const bottomAds = [
    {
      image: sideAd,
      title: "Tailor ads to your visitors",
      description: "AdSense pre-screens ads for quality and relevance, keeping visitors engaged while supporting your brand.",
    },
    {
      image: sideAd,
      title: "Another Ad Title",
      description: "Another description for the ad.",
    },
  ];

  const SectionTitle = ({ title }) => (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex flex-1 items-center gap-3">
        <span className="text-[#d9462b] text-[13px]">|</span>
        <h2 className="text-[12px] font-medium text-black">{title}</h2>
        <div className="h-px flex-1 bg-[#8f8f8f]" />
      </div>

      <a href="#" className="ml-4 text-[11px] text-[#d9462b]">
        View All →
      </a>
    </div>
  );

  return (
    <main className="bg-[#f3f2ef]">
    

      {/* HERO NEWS */}
      <section className="pb-8">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-4 lg:grid-cols-[1.55fr_1fr]">
          <Link to="/news/1">
          <div className="relative h-[270px] overflow-hidden md:h-[315px]">
            <img
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=1200&q=80"
              alt="Health"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute bottom-5 left-5 text-white">
              <span className="bg-[#d9462b] px-2 py-[2px] text-[9px] font-semibold uppercase">
                Health
              </span>

              <h2 className="mt-3 max-w-[450px] text-[20px] font-semibold leading-tight md:text-[24px]">
                Exploring the Connection Between Gut Health and Mental Well-being
              </h2>

              <p className="mt-2 text-[10px] text-white/80">
                February 24, 2025
              </p>
            </div>
          </div></Link>
          

          <div className="flex flex-col gap-4">
            {[
              {
                tag: "SPORTS",
                title: "Olympics 2025: The Athletes to Watch",
                image:
                  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
              },
              {
                tag: "POLITICS",
                title: "Election 2025: Key Issues Shaping the Campaign Trail",
                image:
                  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[105px] w-[150px] shrink-0 object-cover md:h-[118px] md:w-[180px]"
                />

                <div>
                  <span className="bg-[#d9462b] px-2 py-[2px] text-[8px] font-semibold text-white">
                    {item.tag}
                  </span>

                  <h3 className="mt-2 text-[15px] font-semibold leading-tight text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#777]">
                    February 24, 2025
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEALTH */}
      <section className="py-4">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle title="Health" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {healthArticles.map((article) => (
              <div key={article.id}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[155px] w-full object-cover"
                />

                <p className="mt-3 text-[9px] font-semibold uppercase text-[#d9462b]">
                  {article.category}
                </p>

                <h3 className="mt-2 text-[14px] font-semibold leading-tight text-black">
                  {article.title}
                </h3>

                <p className="mt-2 text-[10px] text-[#999]">{article.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY AD */}
      <section className="py-9">
        <div className="mx-auto max-w-[1100px] px-4">
          <p className="mb-3 text-[11px] font-semibold text-black">
            Advertisement
          </p>

          <Swiper
              modules={[Autoplay]}
  autoplay={{
    delay: 3000, // 3 seconds
    disableOnInteraction: false, // keeps autoplay after user swipe
  }}
  loop={true} 
            className="h-[145px] w-full"
          >
            {techAds.map((ad, index) => (
              <SwiperSlide key={index}>
                <img
                  src={ad.src}
                  alt={ad.alt}
                  className="h-[145px] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TOP STORIES */}
      <section className="py-6">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle title="Top Stories" />

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="relative h-[245px] overflow-hidden md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
                alt="Brain"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[9px] font-semibold uppercase">Science</p>

                <h3 className="mt-2 max-w-[520px] text-[19px] font-semibold leading-tight">
                  Understanding the Human Brain: New Insights from Neuroscience
                </h3>

                <p className="mt-2 text-[10px] text-white/80">
                  February 24, 2025
                </p>
              </div>
            </div>

            <div className="">
              <Swiper
            modules={[Autoplay]}
             autoplay={{
    delay: 3000, // 3 seconds
    disableOnInteraction: false, // keeps autoplay after user swipe
  }}
           
            className="h-full w-full"
          >
            {techAds.map((ad, index) => (
              <SwiperSlide key={index}>
                <img
                  src={ad.src}
                  alt={ad.alt}
                  className=" min-h-[145px] h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Migration"
                className="h-[160px] w-full object-cover"
              />

              <p className="mt-3 text-[9px] font-semibold uppercase text-[#d9462b]">
                World
              </p>

              <h3 className="mt-2 text-[15px] font-semibold leading-tight">
                Global Migration Trends: Causes and Consequences
              </h3>

              <p className="mt-2 text-[10px] text-[#999]">
                February 24, 2025
              </p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80"
                alt="AI"
                className="h-[160px] w-full object-cover"
              />

              <p className="mt-3 text-[9px] font-semibold uppercase text-[#d9462b]">
                Arts
              </p>

              <h3 className="mt-2 text-[15px] font-semibold leading-tight">
                Exploring the Impact of AI on Creative Industries
              </h3>

              <p className="mt-2 text-[10px] text-[#999]">
                February 24, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="py-6">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle title="Business" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            {[
              {
                title: "Understanding Cryptocurrency: Risks and Opportunities",
                image:
                  "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Analyzing the Latest Trends in Global Trade",
                image:
                  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((item, index) => (
              <Link to={`/news/${item.id}`} key={index}>
  <div className="relative h-[245px] overflow-hidden cursor-pointer">
    <img
      src={item.image}
      alt={item.title}
      className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/45" />

    <div className="absolute bottom-5 left-5 text-white">
      <p className="text-[9px] font-semibold uppercase">Business</p>

      <h3 className="mt-2 max-w-[360px] text-[18px] font-semibold leading-tight">
        {item.title}
      </h3>

      <p className="mt-2 text-[10px] text-white/80">
        February 24, 2025
      </p>
    </div>
  </div>
</Link>
            ))}
          </div>
        </div>
      </section>

      {/* WORLD */}
      <section className="py-6">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle title="World" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {worldPosts.map((post) => (
              <div key={post.id}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[145px] w-full object-cover"
                />

                <p className="mt-3 text-[9px] font-semibold uppercase text-[#d9462b]">
                  {post.category}
                </p>

                <h3 className="mt-2 text-[15px] font-semibold leading-tight">
                  {post.title}
                </h3>

                <p className="mt-2 text-[10px] text-[#999]">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="py-6">
        <div className="mx-auto max-w-[900px] px-4">
          <div className="relative bg-[#df432b] py-9 text-white md:min-h-[210px]">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
              alt="Join"
              className="mx-auto h-[175px] w-full object-cover md:absolute md:left-[-95px] md:top-1/2 md:w-[295px] md:-translate-y-1/2"
            />

            <div className="px-7 pt-6 md:ml-[240px] md:pt-0">
              <h2 className="text-[25px] font-semibold leading-tight">
                Join Our Community of <br /> Innovators
              </h2>

              <p className="mt-4 max-w-[330px] text-[12px] leading-5">
                Share your insights and expertise on various topics with our
                global audience.
              </p>

              <button className="mt-5 bg-white px-6 py-3 text-[11px] font-semibold text-black">
                Contribute Your Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY AD */}
      <section className="py-9">
        <div className="mx-auto max-w-[1100px] px-4">
          <p className="mb-3 text-[11px] font-semibold text-black">
            Advertisement
          </p>

          <Swiper
              modules={[Autoplay]}
  autoplay={{
    delay: 3000, // 3 seconds
    disableOnInteraction: false, // keeps autoplay after user swipe
  }}
  loop={true} 
            className="h-[145px] w-full"
          >
            {techAds.map((ad, index) => (
              <SwiperSlide key={index}>
                <img
                  src={ad.src}
                  alt={ad.alt}
                  className="h-[145px] w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* ARTS */}
      <section className="pb-12">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle title="Arts" />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {artsPosts.map((post) => (
              <div key={post.id}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[115px] w-full object-cover"
                />

                <p className="mt-3 text-[9px] font-semibold uppercase text-[#d9462b]">
                  {post.category}
                </p>

                <h3 className="mt-2 text-[15px] font-semibold leading-tight">
                  {post.title}
                </h3>

                <p className="mt-2 text-[10px] text-[#999]">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}