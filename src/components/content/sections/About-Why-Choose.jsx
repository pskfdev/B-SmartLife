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
      <h2 className="text-center">
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
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-lighting-_usecase_6.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2 className="text-primary">Lighting</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-gates-_usecase_7.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2 className="text-primary">Blinds</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-gates-_usecase_3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2 className="text-primary">Gates</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/pl/wp-content/uploads/sites/5/2018/05/use-cases-climate-_usecase_9.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2 className="text-primary">Temperature</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-security-_usecase_7.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2 className="text-primary">Safety</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center rounded-3xl">
            <img
              src="https://www.fibaro.com/en/wp-content/uploads/sites/5/2018/05/use-cases-safety-_usecase_4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white opacity-70 rounded-3xl">
              <h2 className="text-primary">Security</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Why choose B Smart-Life */}
      <div className="w-4/5 rounded-3xl mx-auto pt-20">
        <h2>
          Why choose HDL Automation from B Smart-Life?{" "}
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
