import React from "react";

//Components
import CarouselHead from "@/components/content/carousel/Carousel-Head";
import AboutIconProduct from "@/components/content/sections/About-Icon-Product";
import AboutImageText from "@/components/content/sections/About-Image-Text";
import AboutWhyChoose from "@/components/content/sections/About-Why-Choose";
import Aboutclipfibaro from "@/components/content/sections/About-clip-fibaro";
import OurServices from "@/components/content/sections/Our-Services";

function page() {
  return (
    <div>
      <CarouselHead />

      {/* Section Icon  */}
      <AboutIconProduct />

      {/* Section Image and Text */}
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <AboutImageText
          title="HDL On bring every element of your automated home together, so you
            can keep track of all your connected systems and devices."
          des="HDL On คือ แอพพลิเคชั่นสำหรับสมาร์ทโฟนมีทั้งระบบ iOS และ Android จาก
            HDL Automation ที่จะทำให้การควบคุมระบบสมาร์ทโฮม (Smart Home)
            ของคุณเป็นเรื่องง่ายดาย เพียงปลายนิ้ว"
          img="https://via.placeholder.com/600/24f355"
        />
        <AboutImageText
          style="flex-row-reverse"
          title="On Pro - The interface is simple and easy to understand. You can view the indoor environmental quality, security state, latest news, as well as other information you may care about on the homepage. There are also shortcuts to control your favorite functions and scenarios."
          des="On Pro อีก  Mobile app จาก HDL ที่มี user interface ที่ใช้งานง่าย และผู้ใช้ยังสามารถ สร้าง scenario ต่างๆ เพื่อให้สามารถควบคุมอุปกรณ์ Home Automation ได้อย่างง่ายดาย ด้วย Smart phone"
          img="https://via.placeholder.com/600/92c952"
        />
      </div>

      {/* Why choose B Smart-Life */}
      <AboutWhyChoose />

      {/* Clip recommend FIBARO */}
      <Aboutclipfibaro />

      {/* Section Our-Services */}
      <OurServices />
    </div>
  );
}

export default page;
