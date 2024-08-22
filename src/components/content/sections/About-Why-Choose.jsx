"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
// import css/pagination and css/effect-coverflow
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function AboutWhyChoose() {
  return (
    <div className="py-20 space-y-10">
      <h2 className="text-center text-green-500">
        ระบบสมาร์ทโฮมจาก HDL (Smart Home Solution from HDL Automation)
      </h2>

      {/* Carousel */}
      <div className="h-full w-full p-20 bg-slate-100 rounded-3xl mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            scale: 1,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper h-96 py-5 bg-slate-400"
        >
          <SwiperSlide className="w-10 overflow-hidden bg-black">
            <img
              src="https://via.placeholder.com/600/92c952"
              className="w-10 block"
            />
          </SwiperSlide>
          <SwiperSlide className="w-10 h-72 bg-cover bg-center">
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide className="w-72 h-72 bg-cover bg-center">
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide className="w-72 h-72 bg-cover bg-center">
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide className="w-72 h-72 bg-cover bg-center">
            <img
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              className="w-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Why choose B Smart-Life */}

      <div className="w-4/5 rounded-3xl mx-auto">
        <h2 className="text-green-500">
          Why choose HDL Automation from Vyprib??{" "}
        </h2>
        <h2 className="my-5">
          ทำไมต้องเลือกระบบ Smart Home / Home Automation ของ HDL
          จากบริษัทไหวพริบ
        </h2>
        <p>
          Being smart means your home somehow knows what you need and takes care
          of you. When you arrive home in the day time, it opens the curtains
          for you. But when you come back in the evening, it will turn on the
          lights for you. It ensures that every time you are walking into a
          properly lit room.
        </p>
        <p className="mt-5">
          การทำให้บ้านของคุณกลายเป็นสมาร์ทโฮม Smart Home หมายถึงระบบ Home
          Automation
          ที่จะถูกติดตั้งต้องมีความชาญฉลาดที่จะเข้าใจความต้องการของผู้อยู่อาศัย
          และสามารถดูแลบ้านและคุณได้
          ดังนั้นทั้งโซลูชั่นและผู้ติดตั้งระบบจะต้องมีประสบการณ์และเข้าใจเจ้าของบ้าน
          จึงจะสามารถออกแบบระบบ Smart Home ที่ตอบสนอง กับ Lifestyle ของคุณได้
          รวมถึงคำนึงถึงการใช้งานในระยะยาวและการต่อเติมในอนาคต (Future proof)
          และที่สำคัญที่สุดคือการดูแลและให้บริการหลังการขาย
          ซึ่งสิ่งที่กล่าวมาข้างต้นเป็นสิ่งที่ทำให้บริษัทไหวพริบแตกต่างจากผู้ให้บริการรายอื่นๆ
        </p>
      </div>
    </div>
  );
}

export default AboutWhyChoose;
