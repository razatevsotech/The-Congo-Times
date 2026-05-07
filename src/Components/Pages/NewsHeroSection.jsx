import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import techAd from '../../assets/ads.png';
import sideAd from '../../assets/banner.png';
import banner from '../../assets/Banner.jpg';
import JoinCtaImage from '../../assets/ctaImage.png';
import { useAdvertisementsByPlacement } from '../../hooks/useAdvertisements';
import { AD_PLACEMENTS } from '../../utils/categoryUtils';


export default function NewsHeroSection() {
  const { data: homePageAds1, loading: homePageAds1Loading } = useAdvertisementsByPlacement(
    AD_PLACEMENTS.HOME_PAGE_ADS_1
  );

  const { data: homePageAds2, loading: homePageAds2Loading } = useAdvertisementsByPlacement(
    AD_PLACEMENTS.HOME_PAGE_ADS_2
  );

  console.log('[NewsHeroSection] homePageAds1 from API (position_2):', homePageAds1);
  console.log('[NewsHeroSection] homePageAds2 from API (position_3):', homePageAds2);

  const healthArticles = [
    {
      id: 1,
      category: 'HEALTH',
      title: 'The Mental Health Benefits Backed by Science',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'HEALTH',
      title: 'How Climate Change is Impacting Global Health',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'HEALTH',
      title: 'Breaking Down the Latest Nutritional Guidelines',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'HEALTH',
      title: 'The Role of Sleep in Immune System Support',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const worldPosts = [
    {
      id: 1,
      category: 'WORLD',
      title: 'How Climate Change is Reshaping Global Landscapes',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      category: 'WORLD',
      title: 'The Role of International Organizations in Crisis Management',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      category: 'WORLD',
      title: 'Understanding the Dynamics of Global Trade Agreements',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const artsPosts = [
    {
      id: 1,
      category: 'ARTS',
      title: 'Understanding the Evolution of Digital Art Marketplaces',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      category: 'ARTS',
      title: 'How Virtual Reality is Revolutionizing the Art World',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      category: 'ARTS',
      title: 'The Top Film Festivals Showcasing Emerging Talent',
      date: 'February 24, 2025',
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const [currentBottomAd, setCurrentBottomAd] = useState(0);

  const bottomAds = [
    {
      image: sideAd,
      title: 'Tailor ads to your visitors',
      description:
        'AdSense pre-screens ads for quality and relevance, keeping visitors engaged while supporting your brand.',
    },
    {
      image: sideAd,
      title: 'Another Ad Title',
      description: 'Another description for the ad.',
    },
  ];

  const SectionTitle = ({ title }) => (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex flex-1 items-center gap-3">
        <h2 className="text-[24px] font-black text-black tracking-tight">{title}</h2>
        <div className="h-px flex-1 bg-black" />
      </div>

      <a href="#" className="ml-4 text-[12px] text-[#0085CA]">
        View All →
      </a>
    </div>
  );

  return (
    <main className="bg-[#ffffff]">
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
                <span className="bg-[#FFD100] px-2 py-[2px] text-[12px] text-black font-semibold uppercase">
                  Health
                </span>

                <h2 className="mt-3 max-w-[450px] text-[20px] font-semibold leading-tight md:text-[24px]">
                  Exploring the Connection Between Gut Health and Mental Well-being
                </h2>

                <p className="mt-2 text-[10px] text-white/80">February 24, 2025</p>
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            {[
              {
                tag: 'SPORTS',
                title: 'Olympics 2025: The Athletes to Watch',
                image:
                  'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
              },
              {
                tag: 'POLITICS',
                title: 'Election 2025: Key Issues Shaping the Campaign Trail',
                image:
                  'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[105px] w-[150px] shrink-0 object-cover md:h-[118px] md:w-[180px]"
                />

                <div>
                  <span className="bg-[#FFD100] px-2 py-[2px] text-[12px] font-semibold text-black">
                    {item.tag}
                  </span>

                  <h3 className="mt-2 text-[15px] font-semibold leading-tight text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#777]">February 24, 2025</p>
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

                <p className="mt-3 text-[12px] font-semibold uppercase text-[#0085CA]">
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

      {/* HOME PAGE ADS 1 (Position 2) */}
      {(() => {
        const now = new Date();
        const activeAds = (homePageAds1?.items || [])
          .filter(ad => {
            if (!ad.starts_at && !ad.ends_at) return true;
            const start = ad.starts_at ? new Date(ad.starts_at) : null;
            const end = ad.ends_at ? new Date(ad.ends_at) : null;
            return (!start || now >= start) && (!end || now <= end);
          })
          .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

        if (homePageAds1Loading || activeAds.length === 0) return null;

        const isSlider = activeAds.length > 1;

        return (
          <section className="py-12 bg-[#F5F3EF] ">
            <div className="mx-auto">
              <div className="max-w-[1100px] px-4 mx-auto">
                <div className="flex items-center gap-5 mb-8">
                  <h2 className="text-[24px] font-black text-black tracking-tight">Advertisement</h2>
                  <div className="flex-1 h-[1.5px] bg-black"></div>
                </div>
              </div>

              <Swiper
                modules={[Autoplay]}
                autoplay={isSlider ? {
                  delay: 3000,
                  disableOnInteraction: false,
                } : false}
                loop={isSlider}
                className="w-full shadow-sm"
              >
                {activeAds.map((ad, index) => {
                  const hasButton = !!ad.button_text;
                  const adContent = (
                    <div className="relative h-full w-full group overflow-hidden">
                      <img
                        src={ad.image}
                        alt={ad.title || "Advertisement"}
                        className="w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Text Overlay */}
                      {(ad.heading || ad.subheading || ad.button_text) && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 text-left">
                          {ad.heading && (
                            <h3 className="text-white text-lg md:text-2xl font-black mb-1 leading-tight">
                              {ad.heading}
                            </h3>
                          )}
                          {ad.subheading && (
                            <p className="text-white/90 text-xs md:text-sm max-w-[80%] mb-3 line-clamp-1">
                              {ad.subheading}
                            </p>
                          )}
                          {ad.button_text && (
                            <a
                              href={ad.link_url}
                              target={ad.open_in_new_tab ? "_blank" : "_self"}
                              rel="noopener noreferrer"
                              className="inline-block w-fit bg-[#f7d117] px-6 py-2 text-xs md:text-sm font-black text-black hover:bg-yellow-400 transition-all uppercase"
                            >
                              {ad.button_text}
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  );

                  return (
                    <SwiperSlide 
                      key={ad.id || index}
                      data-swiper-autoplay={(ad.transition_duration || 3) * 1000}
                    >
                      {!hasButton && ad.link_url ? (
                        <a
                          href={ad.link_url}
                          target={ad.open_in_new_tab ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="block h-full w-full cursor-pointer"
                        >
                          {adContent}
                        </a>
                      ) : (
                        <div className="h-full w-full">
                          {adContent}
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
        );
      })()}

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

                <p className="mt-2 text-[10px] text-white/80">February 24, 2025</p>
              </div>
            </div>

            <div className="bg-[#FFD100] p-8 flex flex-col justify-center h-full min-h-[245px]">
              <p className="text-black text-[12px] font-black uppercase tracking-wider mb-4">
                NEVER MISS A HEADLINE!
              </p>
              <h2 className="text-black text-[28px] lg:text-[32px] font-medium leading-[1.1] mb-5">
                Subscribe to our newsletter for daily updates.
              </h2>
              <p className="text-black text-[15px] font-medium leading-relaxed opacity-90">
                Get the latest stories delivered straight to your inbox.
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Migration"
                className="h-[160px] w-full object-cover"
              />

              <p className="mt-3 text-[12px] font-semibold uppercase text-[#0085CA]">World</p>

              <h3 className="mt-2 text-[15px]  leading-tight">
                Global Migration Trends: Causes and Consequences
              </h3>

              <p className="mt-2 text-[10px] text-[#999]">February 24, 2025</p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80"
                alt="AI"
                className="h-[160px] w-full object-cover"
              />

              <p className="mt-3 text-[12px] font-semibold uppercase text-[#0085CA]">Arts</p>

              <h3 className="mt-2 text-[15px] font-semibold leading-tight">
                Exploring the Impact of AI on Creative Industries
              </h3>

              <p className="mt-2 text-[10px] text-[#999]">February 24, 2025</p>
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
                title: 'Understanding Cryptocurrency: Risks and Opportunities',
                image:
                  'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80',
              },
              {
                title: 'Analyzing the Latest Trends in Global Trade',
                image:
                  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
              },
            ].map((item, index) => (
              <Link to={`/news/${item.id}`} key={index}>
                <div className="relative h-[245px] overflow-hidden cursor-pointer">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />

                  <div className="absolute inset-0 bg-black/45" />

                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-[9px] font-semibold uppercase">Business</p>

                    <h3 className="mt-2 max-w-[360px] text-[18px] font-semibold leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[10px] text-white/80">February 24, 2025</p>
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
                <img src={post.image} alt={post.title} className="h-[145px] w-full object-cover" />

                <p className="mt-3 text-[12px] font-semibold uppercase text-[#0085CA]">
                  {post.category}
                </p>

                <h3 className="mt-2 text-[15px] font-semibold leading-tight">{post.title}</h3>

                <p className="mt-2 text-[10px] text-[#999]">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="py-6">
        <div className="mx-auto max-w-[900px] px-4">
          <div className="relative bg-[#df432b] bg-cover bg-center py-9 text-white md:min-h-[210px]"
            style={{ backgroundImage: `url(${JoinCtaImage})` }}>
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
                Share your insights and expertise on various topics with our global audience.
              </p>

              <button className=" mt-[12px] hidden sm:block bg-[#f7d117] px-8 py-3 text-[15px] lg:text-[17px] font-black text-black hover:bg-yellow-400 hover:scale-105 transition-all duration-300 uppercase"

              >
                Contribute Your Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOME PAGE ADS 2 (Position 3) */}
      {(() => {
        const now = new Date();
        const activeAds = (homePageAds2?.items || [])
          .filter(ad => {
            if (!ad.starts_at && !ad.ends_at) return true;
            const start = ad.starts_at ? new Date(ad.starts_at) : null;
            const end = ad.ends_at ? new Date(ad.ends_at) : null;
            return (!start || now >= start) && (!end || now <= end);
          })
          .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

        if (homePageAds2Loading || activeAds.length === 0) return null;

        const isSlider = activeAds.length > 1;

        return (
          <section className="py-12 bg-[#F5F3EF] ">
            <div className="mx-auto">
              <div className="max-w-[1100px] px-4 mx-auto">
                <div className="flex items-center gap-5 mb-8">
                  <h2 className="text-[24px] font-black text-black tracking-tight">Advertisement</h2>
                  <div className="flex-1 h-[1.5px] bg-black"></div>
                </div>
              </div>

              <Swiper
                modules={[Autoplay]}
                autoplay={isSlider ? {
                  delay: 3000,
                  disableOnInteraction: false,
                } : false}
                loop={isSlider}
                className="w-full shadow-sm"
              >
                {activeAds.map((ad, index) => {
                  const hasButton = !!ad.button_text;
                  const adContent = (
                    <div className="relative h-full w-full group overflow-hidden">
                      <img
                        src={ad.image}
                        alt={ad.title || "Advertisement"}
                        className="h-full w-full object-cover h-[200px] sm:h-[240px] md:h-[280px] transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Text Overlay */}
                      {(ad.heading || ad.subheading || ad.button_text) && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 text-left">
                          {ad.heading && (
                            <h3 className="text-white text-lg md:text-2xl font-black mb-1 leading-tight">
                              {ad.heading}
                            </h3>
                          )}
                          {ad.subheading && (
                            <p className="text-white/90 text-xs md:text-sm max-w-[80%] mb-3 line-clamp-1">
                              {ad.subheading}
                            </p>
                          )}
                          {ad.button_text && (
                            <a
                              href={ad.link_url}
                              target={ad.open_in_new_tab ? "_blank" : "_self"}
                              rel="noopener noreferrer"
                              className="inline-block w-fit bg-[#f7d117] px-6 py-2 text-xs md:text-sm font-black text-black hover:bg-yellow-400 transition-all uppercase"
                            >
                              {ad.button_text}
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  );

                  return (
                    <SwiperSlide 
                      key={ad.id || index}
                      data-swiper-autoplay={(ad.transition_duration || 3) * 1000}
                    >
                      {!hasButton && ad.link_url ? (
                        <a
                          href={ad.link_url}
                          target={ad.open_in_new_tab ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="block h-full w-full cursor-pointer"
                        >
                          {adContent}
                        </a>
                      ) : (
                        <div className="h-full w-full">
                          {adContent}
                        </div>
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
        );
      })()}
      {/* ARTS */}
      <section className="pb-12">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle title="Arts" />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {artsPosts.map((post) => (
              <div key={post.id}>
                <img src={post.image} alt={post.title} className="h-[115px] w-full object-cover" />

                <p className="mt-3 text-[12px] font-semibold uppercase text-[#0085CA]">
                  {post.category}
                </p>

                <h3 className="mt-2 text-[15px] font-semibold leading-tight">{post.title}</h3>

                <p className="mt-2 text-[10px] text-[#999]">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
