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
      <h2 className="text-center text-green-500">
        ระบบสมาร์ทโฮมจาก HDL (Smart Home Solution from HDL Automation)
      </h2>

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
              src="https://via.placeholder.com/600/92c952"
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://via.placeholder.com/600/f66b97"
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://via.placeholder.com/600/b0f7cc"
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://via.placeholder.com/600/51aa97"
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://via.placeholder.com/600/197d29"
              alt=""
              className="w-full h-full object-cover"
            />
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
