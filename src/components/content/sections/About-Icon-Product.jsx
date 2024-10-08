import React from "react";
import { HiOutlineLightBulb, HiOutlineMusicNote } from "react-icons/hi";
import { FaMicrosoft, FaTemperatureHigh, FaLaptopCode, FaUserShield, FaDoorOpen, FaHourglassHalf } from "react-icons/fa";

//Components
import CardTypeProduct from "../card/Card-Type-Product";
import Link from "next/link";

function AboutIconProduct() {
  return (
    <div className="py-20 flex flex-col justify-center">
      <div className="text-center w-11/12 lg:w-3/5 mx-auto">
        <h2>
          What can Home Automation systems control
        </h2>
        <h3 className="py-2">We integrate all smart home devices into one completed system</h3>
        <p className="my-2">Complete and integrated smart home experience</p>
        <p>
          We connects your lights, curtains, air-conditioners and other devices
          into the system, and allows you to control them through a mobile
          phone, tablet, wall panel or smart speaker.For example, you that are
          able to integrate various functions and cover every area of your home.
        </p>
      </div>

      <div className="my-5 w-3/4 flex flex-wrap justify-center mx-auto">
        <CardTypeProduct
          icon={HiOutlineLightBulb}
          title="Lighting Control"
          des="ระบบควบคุมไฟแสงสว่าง"
        />
        <CardTypeProduct
          icon={FaMicrosoft}
          title="Shading Control(Curtain / Roller Blind moter )"
          des="ระบบควบคุมม่านไฟฟ้าและมอเตอร์"
        />
        <CardTypeProduct
          icon={FaTemperatureHigh}
          title="Climate / Temperature Control"
          des="ระบบควบคุมอุณภูมิและเครื่องปรับอากาศ"
        />
        <CardTypeProduct
          icon={HiOutlineMusicNote}
          title="Music Streaming / Airplay"
          des="ระบบสตรีมเพลงและแอร์เพลย์"
        />

        <CardTypeProduct
          icon={FaLaptopCode}
          title="Scene Control"
          des="ระบบซีนคอลโทรล"
        />
        <CardTypeProduct
          icon={FaUserShield}
          title="Safety & Security"
          des="ระบบความปลอดภัย และป้องกันขโมย"
        />
        <CardTypeProduct
          icon={FaDoorOpen}
          title="Access Control"
          des="ระบบควบคุมการเข้าออก"
        />
        <CardTypeProduct
          icon={FaHourglassHalf}
          title="Voice Control"
          des="ระบบการสั่งงานด้วยเสียง"
        />
      </div>

      <Link href="/product" className="btn btn-accent text-white mx-auto">ดูอุปกรณ์ทั้งหมด</Link> 
    </div>
  );
}

export default AboutIconProduct;
