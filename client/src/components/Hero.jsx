import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { assets } from '../assets/assets';

const Hero = () => {
  const slides = [
    { id: 1, title: "What's New", subtitle: 'TOP BRANDS', img: assets.hero_img1 },
    { id: 2, title: 'Exclusive Offers', subtitle: 'LIMITED TIME', img: assets.hero_img2 },
    { id: 3, title: 'Best Sellers', subtitle: 'TOP PICKS', img: assets.hero_img3 },
  ];

  return (
    <div className="tg-hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col sm:flex-row">
              {/* Hero Left Side */}
              <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141]">
                  <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base">{slide.subtitle}</p>
                  </div>
                  <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">{slide.title}</h1>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                  </div>
                </div>
              </div>
              {/* Hero Right Side */}
              <img className="w-full sm:w-1/2" src={slide.img} alt={slide.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
