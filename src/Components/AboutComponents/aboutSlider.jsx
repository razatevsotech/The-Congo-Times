import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'; 
import banner from "../../assets/carpy.png";



export default function AboutSlider() {

      const banners = [
      { src: banner, alt: "Cosmetic Advertisement 1" },
      { src: banner, alt: "Cosmetic Advertisement 2" },
      { src: banner, alt: "Cosmetic Advertisement 3" },
    ];
    

  return (
    

<section className="pt-6 pb-5">
        <div className="mx-auto max-w-[1100px] px-4">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="relative h-[150px] w-full overflow-hidden md:h-[517px]"
          >
            {banners.map((ban, index) => (
              <SwiperSlide key={index}>
                <img
                  src={ban.src}
                  alt={ban.alt}
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
}