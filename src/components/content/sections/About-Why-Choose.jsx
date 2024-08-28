"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCards } from "swiper/modules";
// import css/pagination and css/effect-coverflow
import "swiper/css/effect-cards";

function AboutWhyChoose() {
  return (
    <div className="py-20 space-y-10">
      <h1 className="text-center">
        Smart Home Solution from FIBARO smart home
      </h1>

      {/* Carousel */}
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-full max-w-[700px] h-[500px]"
        >
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-lighting-_usecase_6.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2>Lighting</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-gates-_usecase_7.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2>Blinds</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-gates-_usecase_3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2>Gates</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/pl/wp-content/uploads/sites/5/2018/05/use-cases-climate-_usecase_9.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2>Temperature</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-security-_usecase_7.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2>Safety</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-safety-_usecase_4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2>Security</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Why choose B Smart-Life */}
      <div className="w-4/5 rounded-3xl mx-auto pt-20 space-y-5">
        <h1 className="mb-10 w-fit mx-auto">
          Why choose Smart home from B Smart-Life?{" "}
        </h1>

        <div className="flex flex-wrap gap-5 mx-auto justify-center">
          <div className="space-y-1 w-[500px] lg:h-44 p-3 border border-sky-200 rounded-3xl cursor-pointer bg-slate-100 hover:bg-white">
            <h2 className="w-fit">Data safety first</h2>
            <p>
              FIBARO knows what is the most important. The access to your home
              and your data are protected at the highest level - through the WAF
              and Anti-DDoS systems, encrypted communication using the TLS
              protocol and passwords using bcrypt.
            </p>
          </div>

          <div className="space-y-1 w-[500px] lg:h-44 p-3 border border-sky-200 rounded-3xl cursor-pointer bg-slate-100 hover:bg-white">
            <h2 className="w-fit">Plug & Play</h2>
            <p>
              The FIBARO system is simple to install and use. Plug & play
              devices are ready for use immediately after unpacking and a short
              configuration.
            </p>
          </div>

          <div className="space-y-1 w-[500px] lg:h-44 p-3 border border-sky-200 rounded-3xl cursor-pointer bg-slate-100 hover:bg-white">
            <h2 className="w-fit">Voice control</h2>
            <p>
              FIBARO is compatible with most voice control technologies. Simply
              tell the system what to do, and your wish is granted.
            </p>
          </div>

          <div className="space-y-1 w-[500px] lg:h-44 p-3 border border-sky-200 rounded-3xl cursor-pointer bg-slate-100 hover:bg-white">
            <h2 className="w-fit">Remote access from anywhere</h2>
            <p>
              Check the status of your devices and control your home from
              anywhere in the world. An internet connection is all you need to
              keep an eye on your home.
            </p>
          </div>

          <div className="space-y-1 w-[500px] lg:h-44 p-3 border border-sky-200 rounded-3xl cursor-pointer bg-slate-100 hover:bg-white">
            <h2 className="w-fit">A home filled with peace</h2>
            <p>
              FIBARO ensures your personal security in case of a fire, flooding,
              or burglary. It also assists children, the elderly, and people
              with limited mobility with everyday life things.
            </p>
          </div>

          <div className="space-y-1 w-[500px] lg:h-44 p-3 border border-sky-200 rounded-3xl cursor-pointer bg-slate-100 hover:bg-white">
            <h2 className="w-fit">Save energy</h2>
            <p>
              FIBARO allows you to monitor the amount of electricity used by
              home devices. This way you can easily identify which pieces of
              hardware keep on bumping up your bills. You can also program the
              system to help you make the most of the savings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWhyChoose;
