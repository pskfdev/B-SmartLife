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
        title="BESS (Battery Energy Storage System)"
        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aut
          quas vel dolorum corrupti consequatur recusandae explicabo a iure
          facilis sequi optio ea eos rem dolore sapiente ipsam tenetur quis
          aliquid, eligendi labore eius molestiae minima. Consectetur magnam
          minima sunt voluptatem! Enim deserunt, veritatis itaque dignissimos
          qui aliquid iste ipsa! (พูดเกี่ยวกับระบบไฟ)"
        link="https://www.fibaro.com/en/smart-home-in-use/the-smart-light/"
      />
      <OurSystem
        bg="bg-our-system2"
        style="justify-start"
        border="rounded-r-3xl"
        title="BESS (Battery Energy Storage System)"
        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aut
          quas vel dolorum corrupti consequatur recusandae explicabo a iure
          facilis sequi optio ea eos rem dolore sapiente ipsam tenetur quis
          aliquid, eligendi labore eius molestiae minima. Consectetur magnam
          minima sunt voluptatem! Enim deserunt, veritatis itaque dignissimos
          qui aliquid iste ipsa! (พูดเกี่ยวกับระบบความปลอดภัย)"
        link="https://www.fibaro.com/en/smart-home-in-use/home-safety/"
      />
      <OurSystem
        bg="bg-our-system3"
        style="justify-end"
        border="rounded-l-3xl"
        title="BESS (Battery Energy Storage System)"
        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aut
          quas vel dolorum corrupti consequatur recusandae explicabo a iure
          facilis sequi optio ea eos rem dolore sapiente ipsam tenetur quis
          aliquid, eligendi labore eius molestiae minima. Consectetur magnam
          minima sunt voluptatem! Enim deserunt, veritatis itaque dignissimos
          qui aliquid iste ipsa! (พูดเกี่ยวกับระบบม่าน)"
        link="https://www.fibaro.com/en/smart-home-in-use/home-access-center/"
      />
      <OurSystem
        bg="bg-our-system4"
        style="justify-start"
        border="rounded-r-3xl"
        title="BESS (Battery Energy Storage System)"
        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aut
          quas vel dolorum corrupti consequatur recusandae explicabo a iure
          facilis sequi optio ea eos rem dolore sapiente ipsam tenetur quis
          aliquid, eligendi labore eius molestiae minima. Consectetur magnam
          minima sunt voluptatem! Enim deserunt, veritatis itaque dignissimos
          qui aliquid iste ipsa! (พูดเกี่ยวกับระบบคลาวด์)"
        link="https://www.fibaro.com/en/smart-home-in-use/"
      />

      {/* Card Service Icon */}
      <div className="w-fit my-10 flex flex-wrap justify-center rounded-3xl overflow-hidden mx-auto">
        <CardServiceIcon
          icon={FiBookOpen}
          title="Consultancy services"
          subti="Consultancy service - Smart home & building"
          des="ให้คำปรึกษาระบบสมาร์ทโฮมและสมาร์ทบิวดิ้ง"
          bg="bg-teal-200"
        />
        <CardServiceIcon
          icon={FiEdit3}
          title="Design"
          subti="Concept Design -Smart home , smart building , smart hotel"
          des="ออกแบบคอนเซ็ปต์ระบบสมาร์ทโฮมและสมาร์ทบิวดิ้ง"
          bg="bg-zinc-300"
        />
        <CardServiceIcon
          icon={FiMonitor}
          title="Installation & Commissioning"
          subti="Installation & commissioning,  configuration and customization"
          des="บริการติดตั้งระบบออโตเมชั่น สมาร์ทโฮม สมาร์ทบิวดิ้ง สมาร์ทโฮเต็ล"
          bg="bg-slate-400"
        />
        <CardServiceIcon
          icon={FiTool}
          title="Maintenance & after sales service"
          subti="Home Automation system maintenance - repair"
          des="ตรวจสอบ บำรุงรักษาระบบออโตเมชั่นสำหรับบ้าน อาคาร และ โรงแรม"
          bg="bg-green-200"
        />
      </div>

      {/* Our Partner */}
      <OurPartner />
    </div>
  );
}
