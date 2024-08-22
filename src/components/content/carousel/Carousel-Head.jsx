'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
// import css/navigation
import 'swiper/css/navigation';


function CarouselHead() {
  return (
    <div className="rounded-[50px] h-[600px] overflow-hidden">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-full w-full">
        <SwiperSlide className='flex justify-center items-center text-center '>
          <img src="/bg/showroom.jpg" alt="artDNA" className="h-full w-full object-cover block" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center text-center '>
          <img src="https://via.placeholder.com/600/92c952" alt="artDNA" className="h-full w-full object-cover block" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center text-center '>
          <img src="https://via.placeholder.com/600/92c952" alt="artDNA" className="h-full w-full object-cover block" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center text-center '>
          <img src="https://via.placeholder.com/600/92c952" alt="artDNA" className="h-full w-full object-cover block" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center text-center'>
          <img src="https://via.placeholder.com/600/92c952" alt="artDNA" className="h-full w-full object-cover block" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselHead;
