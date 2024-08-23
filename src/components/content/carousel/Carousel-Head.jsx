"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
// import css/navigation
import "swiper/css/navigation";

function CarouselHead() {
  return (
    <div className="rounded-[50px] h-[600px] overflow-hidden">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide className="flex justify-center items-center text-center ">
          <img
            src="https://www.fibaro.com/wp-content/uploads/assets/banery/header_yubii_app.png"
            alt="artDNA"
            className="h-full w-full object-cover object-right block"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center ">
          <img
            src="https://www.fibaro.com/pl/wp-content/uploads/sites/11/2020/01/HC3_desktop_v2.jpg"
            alt="artDNA"
            className="h-full w-full object-cover block"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center">
          <img
            src="https://www.fibaro.com/en/wp-content/uploads/sites/3/2017/02/adjust.jpg"
            alt="artDNA"
            className="h-full w-full object-cover block"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center ">
          <img
            src="https://www.fibaro.com/en/wp-content/uploads/sites/3/2017/02/security.jpg"
            alt="artDNA"
            className="h-full w-full object-cover block"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-center ">
          <img
            src="https://www.fibaro.com/pl/wp-content/uploads/sites/5/2018/05/lighting_one_app_tablet.jpg"
            alt="artDNA"
            className="h-full w-full object-cover block"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselHead;
