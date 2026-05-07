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
import { usePosts, usePostsByCategory } from '../../hooks/usePosts';
import { AD_PLACEMENTS } from '../../utils/categoryUtils';


export default function NewsHeroSection() {
  const { data: homePageAds1, loading: homePageAds1Loading } = useAdvertisementsByPlacement(
    AD_PLACEMENTS.HOME_PAGE_ADS_1
  );

  const { data: homePageAds2, loading: homePageAds2Loading } = useAdvertisementsByPlacement(
    AD_PLACEMENTS.HOME_PAGE_ADS_2
  );

  // Fetch posts for Hero section
  const { data: heroMainResponse, loading: heroMainLoading } = usePosts({ per_page: 1, featured: 1 }, []);
  const { data: sportsHeroResponse, loading: sportsHeroLoading } = usePostsByCategory('sports', 1, 1);
  const { data: politicsHeroResponse, loading: politicsHeroLoading } = usePostsByCategory('politics', 1, 1);

  // Fetch posts for specific home page sections
  const { data: healthResponse, loading: healthLoading } = usePostsByCategory('health', 1, 4);
  const { data: worldResponse, loading: worldLoading } = usePostsByCategory('world', 1, 3);
  const { data: businessResponse, loading: businessLoading } = usePostsByCategory('business', 1, 2);
  // const { data: artsResponse, loading: artsLoading } = usePostsByCategory('arts', 1, 3);

  // Fetch posts for Top Stories
  const { data: topStoriesResponse, loading: topStoriesLoading } = usePosts({ per_page: 3 }, []);

  const healthArticles = healthResponse?.data || [];
  const worldPosts = worldResponse?.data || [];
  const businessPosts = businessResponse?.data || [];
  // const artsPosts = artsResponse?.data || [];
  const topStories = topStoriesResponse?.data || [];

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

  const SectionTitle = ({ title, slug }) => (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex flex-1 items-center gap-3">
        <h2 className="text-[24px] font-black text-black tracking-tight">{title}</h2>
        <div className="h-px flex-1 bg-black" />
      </div>

      <Link to={`/${slug}`} className="ml-4 text-[12px] text-[#0085CA] font-bold hover:underline">
        View All →
      </Link>
    </div>
  );

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return 'Recently';
    }
  };

  return (
    <main className="bg-[#ffffff]">
      {/* HERO NEWS */}
      <section className="pb-8">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 px-4 lg:grid-cols-[1.55fr_1fr]">
          {/* Main Hero Post */}
          {heroMainLoading ? (
            <div className="h-[270px] md:h-[315px] bg-gray-200 animate-pulse"></div>
          ) : heroMainResponse?.data?.[0] ? (
            <Link to={`/news/${heroMainResponse.data[0].slug}`}>
              <div className="relative h-[270px] overflow-hidden md:h-[315px] group">
                <img
                  src={heroMainResponse.data[0].featured_image || 'https://via.placeholder.com/1200x800'}
                  alt={heroMainResponse.data[0].title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute bottom-5 left-5 text-white pr-5">
                  <span className="bg-[#FFD100] px-2 py-[2px] text-[12px] text-black font-semibold uppercase">
                    {heroMainResponse.data[0].category?.name || 'FEATURED'}
                  </span>

                  <h2 className="mt-3 max-w-[450px] text-[20px] font-semibold leading-tight md:text-[24px] group-hover:text-[#FFD100] transition-colors">
                    {heroMainResponse.data[0].title}
                  </h2>

                  <p className="mt-2 text-[10px] text-white/80">{formatDate(heroMainResponse.data[0].published_at)}</p>
                </div>
              </div>
            </Link>
          ) : null}

          {/* Side Hero Posts */}
          <div className="flex flex-col gap-4">
            {/* Sports Post */}
            {sportsHeroLoading ? (
              <div className="h-[105px] md:h-[118px] bg-gray-100 animate-pulse"></div>
            ) : sportsHeroResponse?.data?.[0] ? (
              <Link to={`/news/${sportsHeroResponse.data[0].slug}`} className="flex gap-4 group">
                <img
                  src={sportsHeroResponse.data[0].featured_image || 'https://via.placeholder.com/600x400'}
                  alt={sportsHeroResponse.data[0].title}
                  className="h-[105px] w-[150px] shrink-0 object-cover md:h-[118px] md:w-[180px] group-hover:opacity-90 transition-opacity"
                />

                <div>
                  <span className="bg-[#FFD100] px-2 py-[2px] text-[12px] font-semibold text-black uppercase">
                    {sportsHeroResponse.data[0].category?.name || 'SPORTS'}
                  </span>

                  <h3 className="mt-2 text-[15px] font-semibold leading-tight text-black group-hover:text-[#0085CA] transition-colors line-clamp-2">
                    {sportsHeroResponse.data[0].title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#777]">{formatDate(sportsHeroResponse.data[0].published_at)}</p>
                </div>
              </Link>
            ) : null}

            {/* Politics Post */}
            {politicsHeroLoading ? (
              <div className="h-[105px] md:h-[118px] bg-gray-100 animate-pulse"></div>
            ) : politicsHeroResponse?.data?.[0] ? (
              <Link to={`/news/${politicsHeroResponse.data[0].slug}`} className="flex gap-4 group">
                <img
                  src={politicsHeroResponse.data[0].featured_image || 'https://via.placeholder.com/600x400'}
                  alt={politicsHeroResponse.data[0].title}
                  className="h-[105px] w-[150px] shrink-0 object-cover md:h-[118px] md:w-[180px] group-hover:opacity-90 transition-opacity"
                />

                <div>
                  <span className="bg-[#FFD100] px-2 py-[2px] text-[12px] font-semibold text-black uppercase">
                    {politicsHeroResponse.data[0].category?.name || 'POLITICS'}
                  </span>

                  <h3 className="mt-2 text-[15px] font-semibold leading-tight text-black group-hover:text-[#0085CA] transition-colors line-clamp-2">
                    {politicsHeroResponse.data[0].title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#777]">{formatDate(politicsHeroResponse.data[0].published_at)}</p>
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {/* HEALTH */}
      <section className="py-4">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle title="Health" slug="health" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {healthLoading ? (
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-[155px] bg-gray-200 w-full mb-3"></div>
                  <div className="h-3 bg-gray-200 w-1/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 w-full"></div>
                </div>
              ))
            ) : healthArticles.length > 0 ? (
              healthArticles.map((article) => (
                <Link to={`/news/${article.slug}`} key={article.id} className="group">
                  <div className="overflow-hidden mb-3">
                    <img
                      src={article.featured_image || 'https://via.placeholder.com/800x450'}
                      alt={article.title}
                      className="h-[155px] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <p className="text-[12px] font-semibold uppercase text-[#0085CA]">
                    {article.category?.name || 'HEALTH'}
                  </p>

                  <h3 className="mt-2 text-[14px] font-semibold leading-tight text-black group-hover:text-[#0085CA] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#999]">{formatDate(article.published_at)}</p>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400 py-10">No health news available.</p>
            )}
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
          <SectionTitle title="Top Stories" slug="general" />

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {topStoriesLoading ? (
              <div className="md:col-span-2 h-[245px] bg-gray-200 animate-pulse"></div>
            ) : topStories?.[0] ? (
              <Link to={`/news/${topStories[0].slug}`} className="relative h-[245px] overflow-hidden md:col-span-2 group">
                <img
                  src={topStories[0].featured_image || 'https://via.placeholder.com/1200x800'}
                  alt={topStories[0].title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute bottom-5 left-5 text-white pr-5">
                  <p className="text-[9px] font-semibold uppercase">{topStories[0].category?.name || 'GENERAL'}</p>

                  <h3 className="mt-2 max-w-[520px] text-[19px] font-semibold leading-tight group-hover:text-[#FFD100] transition-colors">
                    {topStories[0].title}
                  </h3>

                  <p className="mt-2 text-[10px] text-white/80">{formatDate(topStories[0].published_at)}</p>
                </div>
              </Link>
            ) : null}

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
            {topStoriesLoading ? (
              <>
                <div className="h-[160px] bg-gray-100 animate-pulse"></div>
                <div className="h-[160px] bg-gray-100 animate-pulse"></div>
              </>
            ) : (
              topStories.slice(1, 3).map((post) => (
                <Link to={`/news/${post.slug}`} key={post.id} className="group">
                  <div className="overflow-hidden">
                    <img
                      src={post.featured_image || 'https://via.placeholder.com/800x450'}
                      alt={post.title}
                      className="h-[160px] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <p className="mt-3 text-[12px] font-semibold uppercase text-[#0085CA]">
                    {post.category?.name || 'GENERAL'}
                  </p>

                  <h3 className="mt-2 text-[15px] leading-tight group-hover:text-[#0085CA] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#999]">{formatDate(post.published_at)}</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* BUSINESS */}
      <section className="py-6">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle title="Business" slug="business" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {businessLoading ? (
              Array(2).fill(0).map((_, i) => (
                <div key={i} className="h-[245px] bg-gray-200 animate-pulse"></div>
              ))
            ) : businessPosts.length > 0 ? (
              businessPosts.map((item) => (
                <Link to={`/news/${item.slug}`} key={item.id}>
                  <div className="relative h-[245px] overflow-hidden cursor-pointer group">
                    <img 
                      src={item.featured_image || 'https://via.placeholder.com/1200x800'} 
                      alt={item.title} 
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />

                    <div className="absolute inset-0 bg-black/45" />

                    <div className="absolute bottom-5 left-5 text-white pr-5">
                      <p className="text-[9px] font-semibold uppercase">Business</p>

                      <h3 className="mt-2 max-w-[360px] text-[18px] font-semibold leading-tight group-hover:text-[#FFD100] transition-colors">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[10px] text-white/80">{formatDate(item.published_at)}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400 py-10">No business news available.</p>
            )}
          </div>
        </div>
      </section>

      {/* WORLD */}
      <section className="py-6">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle title="World" slug="world" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {worldLoading ? (
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-[145px] bg-gray-200 w-full mb-3"></div>
                  <div className="h-3 bg-gray-200 w-1/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 w-full"></div>
                </div>
              ))
            ) : worldPosts.length > 0 ? (
              worldPosts.map((post) => (
                <Link to={`/news/${post.slug}`} key={post.id} className="group">
                  <div className="overflow-hidden mb-3">
                    <img 
                      src={post.featured_image || 'https://via.placeholder.com/800x450'} 
                      alt={post.title} 
                      className="h-[145px] w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  <p className="text-[12px] font-semibold uppercase text-[#0085CA]">
                    {post.category?.name || 'WORLD'}
                  </p>

                  <h3 className="mt-2 text-[15px] font-semibold leading-tight group-hover:text-[#0085CA] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#999]">{formatDate(post.published_at)}</p>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400 py-10">No world news available.</p>
            )}
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
      {/* ARTS - Commented out as requested */}
      {/* <section className="pb-12">
        ...
      </section> */}
    </main>
  );
}
