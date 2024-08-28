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
          title="FIBARO Smart home system."
          des="FIBARO smart home devices provide a comprehensive environment that adapts to the needs of the entire family.
          FIBARO allows you to monitor the amount of electricity used by home devices. This way you can easily identify which pieces of hardware keep on bumping up your bills. 
          You can also program the system to help you make the most of the savings."
          bg="bg-about-system1"
          link="https://www.fibaro.com/en/smart-home-in-use/smart-garden/"
        />
        <AboutImageText
          style="flex-col md:flex-row-reverse"
          title="FIBARO Security system."
          des="FIBARO ensures your personal security in case of a fire, flooding, or burglary. It also assists children, the elderly, and people with limited mobility with everyday life things."
          bg="bg-about-system2"
          link="https://www.fibaro.com/en/smart-home-in-use/home-safety/"
        />
      </div>

      {/* Why choose B Smart-Life (Carousel) */}
      <AboutWhyChoose />

      {/* Clip recommend FIBARO */}
      <Aboutclipfibaro />
    </div>
  );
}

export default page;
