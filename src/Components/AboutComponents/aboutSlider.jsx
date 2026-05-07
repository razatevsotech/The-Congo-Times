import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useAdvertisementsByPlacement } from "../../hooks/useAdvertisements";
import { AD_PLACEMENTS } from "../../utils/categoryUtils";

export default function AboutSlider() {
  // Fetch advertisement placement AD_7
  const { data: adData, loading: adLoading } = useAdvertisementsByPlacement(
    AD_PLACEMENTS.AD_7
  );

  // Prepare ad items with date filtering and sorting
  const ads = useMemo(() => {
    if (!adData?.items?.length) return [];
    const now = new Date();
    return adData.items
      .filter(ad => {
        if (!ad.starts_at && !ad.ends_at) return true;
        const start = ad.starts_at ? new Date(ad.starts_at) : null;
        const end = ad.ends_at ? new Date(ad.ends_at) : null;
        return (!start || now >= start) && (!end || now <= end);
      })
      .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
  }, [adData]);

  // If still loading or no ads, render nothing
  if (adLoading || ads.length === 0) {
    return null;
  }

  return (
    <section className="pb-5">
      <div className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="relative h-[250px] w-full overflow-hidden md:h-[517px]"
        >
          {ads.map((ad, index) => {
            const hasButton = !!ad.button_text;
            const adContent = (
              <div className="relative h-full w-full group">
                <img
                  src={ad.image}
                  alt={ad.title || "Ad"}
                  className="w-full object-cover h-full transition-transform duration-700 group-hover:scale-105"
                />
                {(ad.heading || ad.subheading || ad.button_text) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 text-left">
                    {ad.heading && (
                      <h3 className="text-white text-lg md:text-2xl font-black mb-2 leading-tight">
                        {ad.heading}
                      </h3>
                    )}
                    {ad.subheading && (
                      <p className="text-white/90 text-xs md:text-sm max-w-[80%] mb-4 line-clamp-2">
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
}