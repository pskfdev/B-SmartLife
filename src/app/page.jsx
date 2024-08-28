import CardHero from "@/components/content/card/Card-Hero";
import CardServiceIcon from "@/components/content/card/Card-Service-Icon";
import CarouselHead from "@/components/content/carousel/Carousel-Head";
import OurPartner from "@/components/content/sections/Our-Partner";
import OurServices from "@/components/content/sections/Our-Services";
import OurSystem from "@/components/content/sections/Our-System";
import { FiBookOpen, FiEdit3, FiMonitor, FiTool } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-200">
        <CarouselHead />
      </div>

      {/* Card Hero Smart-thing */}
      <div className="w-full py-10 flex flex-wrap justify-center rounded-b-3xl drop-shadow-2xl bg-slate-200">
        <CardHero bg="bg-smart-home" text="Smart home" />
        <CardHero bg="bg-smart-building" text="Smart building" />
        <CardHero bg="bg-smart-hotel" text="Smart hotel" />
        <CardHero bg="bg-smart-marine" text="Smart garden" />
      </div>

      {/* Section Our-Services */}
      <OurServices />

      {/* Section Our-System */}
      <OurSystem
        bg="bg-our-system1"
        style="justify-end"
        border="rounded-l-3xl"
        title="Conrol lighting system."
        des="The FIBARO Single/Double Switch enables to turn on/off any electrical device remotely. 
        Turn your dishwasher on or automatically cut the power off in case of a malfunction at any time. 
        You can control all the household appliances you own by cutting the power off or turning it on in the socket."
        link="https://www.fibaro.com/en/smart-home-in-use/the-smart-light/"
      />
      <OurSystem
        bg="bg-our-system2"
        style="justify-start"
        border="rounded-r-3xl"
        title="Security system"
        des="The FIBARO System allows you to arm your devices. In case of tampering, an alarm scene will be activated and notification will be send by Door and Motion sensor.
        The FIBARO Door/Window Sensor will immediately inform you about any attempts to remove the sensor or open its case. You can be sure that you and your family are protected.
        The FIBARO Motion Sensor is your home's ultimate guardian, watching over you and your family 24/7."
        link="https://www.fibaro.com/en/smart-home-in-use/home-safety/"
      />
      <OurSystem
        bg="bg-our-system3"
        style="justify-end"
        border="rounded-l-3xl"
        title="Control Blind system"
        des="FIBARO Roller Shutter 3 is a new version of the radio-controller based on Z-Wave 5 technology. It works with motorized roller blinds, venetian blinds, awnings and gates. The Roller Shutter 3 is powered by a single-phase AC and provides precise positioning of blinds, awnings or gates so they can be set to the position you choose.
         The module is also equipped with a power metering feature when used with a FIBARO Home Center."
        link="https://www.fibaro.com/en/smart-home-in-use/home-access-center/"
      />
      <OurSystem
        bg="bg-our-system4"
        style="justify-start"
        border="rounded-r-3xl"
        title="Remote access from anywhere"
        des="Thanks to FIBARO, you have access to your home from any place in the world. 
        The mobile app and Internet access is enough to remotely control the home appliances using the modules FIBARO."
        link="https://www.fibaro.com/en/smart-home-in-use/"
      />

      {/* Card Service Icon */}
      <div className="w-fit my-10 flex flex-wrap justify-center rounded-3xl overflow-hidden mx-auto">
        <CardServiceIcon
          icon={FiBookOpen}
          title="Consultancy services"
          subti="Consultancy service - Smart home"
          des="ยินดีให้คำปรึกษาระบบสมาร์ทโฮมทุกรูปแบบ"
          bg="bg-teal-200"
        />
        <CardServiceIcon
          icon={FiEdit3}
          title="Design"
          subti="Concept Design - Smart home"
          des="ช่วยออกแบบคอนเซ็ปต์ระบบสมาร์ทโฮมทุกรูปแบบ"
          bg="bg-zinc-300"
        />
        <CardServiceIcon
          icon={FiMonitor}
          title="Installation & Commissioning"
          subti="Installation & commissioning"
          des="บริการรับติดตั้งระบบสมาร์ทโฮม และสอนการใช้งานรวมถึงทักษะการเขียนโปรแกรม"
          bg="bg-slate-400"
        />
        <CardServiceIcon
          icon={FiTool}
          title="Maintenance & After service"
          subti="Maintenance & After service - Smart home"
          des="ตรวจสอบ บำรุงรักษาระบบสมาร์ทโฮมสำหรับบ้านทุกรูปแบบ"
          bg="bg-green-200"
        />
      </div>

      {/* Our Partner */}
      <OurPartner />
    </div>
  );
}
