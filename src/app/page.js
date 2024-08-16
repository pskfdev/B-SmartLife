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
      <CarouselHead />

      {/* Card Hero Smart-thing */}
      <div className="w-full my-10 flex justify-center drop-shadow-2xl">
        <CardHero
          img="https://via.placeholder.com/600/24f355"
          text="Smart home"
        />
        <CardHero
          img="https://via.placeholder.com/600/d32776"
          text="Smart building"
        />
        <CardHero
          img="https://via.placeholder.com/600/f66b97"
          text="Smart hotel"
        />
        <CardHero
          img="https://via.placeholder.com/600/56a8c2"
          text="Smart marine"
        />
      </div>

      {/* Section Our-Services */}
      <OurServices />

      {/* Section Our-System */}
      <OurSystem
        img="https://via.placeholder.com/600/24f355"
        style="justify-end"
        border="rounded-l-3xl"
        title="BESS (Battery Energy Storage System)"
        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aut
          quas vel dolorum corrupti consequatur recusandae explicabo a iure
          facilis sequi optio ea eos rem dolore sapiente ipsam tenetur quis
          aliquid, eligendi labore eius molestiae minima. Consectetur magnam
          minima sunt voluptatem! Enim deserunt, veritatis itaque dignissimos
          qui aliquid iste ipsa!"
      />
      <OurSystem
        img="https://via.placeholder.com/600/f66b97"
        style="justify-start"
        border="rounded-r-3xl"
        title="BESS (Battery Energy Storage System)"
        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aut
          quas vel dolorum corrupti consequatur recusandae explicabo a iure
          facilis sequi optio ea eos rem dolore sapiente ipsam tenetur quis
          aliquid, eligendi labore eius molestiae minima. Consectetur magnam
          minima sunt voluptatem! Enim deserunt, veritatis itaque dignissimos
          qui aliquid iste ipsa!"
      />
      <OurSystem
        img="https://via.placeholder.com/600/56a8c2"
        style="justify-end"
        border="rounded-l-3xl"
        title="BESS (Battery Energy Storage System)"
        des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aut
          quas vel dolorum corrupti consequatur recusandae explicabo a iure
          facilis sequi optio ea eos rem dolore sapiente ipsam tenetur quis
          aliquid, eligendi labore eius molestiae minima. Consectetur magnam
          minima sunt voluptatem! Enim deserunt, veritatis itaque dignissimos
          qui aliquid iste ipsa!"
      />

      {/* Card Service Icon */}
      <div className="w-full my-10 flex justify-center rounded-3xl overflow-hidden">
        <CardServiceIcon
          icon={FiBookOpen}
          title="Consultancy services"
          subti="Consultancy service - Smart home & building"
          des="ให้คำปรึกษาระบบสมาร์ทโฮมและสมาร์ทบิวดิ้ง"
          bg="bg-teal-500"
        />
        <CardServiceIcon
          icon={FiEdit3}
          title="Design"
          subti="Concept Design -Smart home , smart building , smart hotel"
          des="ออกแบบคอนเซ็ปต์ระบบสมาร์ทโฮมและสมาร์ทบิวดิ้ง"
          bg="bg-zinc-500"
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
          bg="bg-green-400"
        />
      </div>

      {/* Our Partner */}
      <OurPartner />
    </div>
  );
}
