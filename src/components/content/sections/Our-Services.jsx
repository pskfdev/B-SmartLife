import React from "react";
import CardService from "../card/Card-Service";

function OurServices() {
  return (
    <div className="space-y-5 my-20">
      <div className="text-center md:w-1/2 mx-auto py-10 text-indigo-500">
        <h1 className="my-5">Why use our services</h1>
        <p>
          บริษัทบี สมาร์ทไลฟ์
          เราคือผู้นำด้านการออกแบบและติดตั้งระบบโฮมออโตเมชั่น (Home Automation)
          โดยเป็นอุปกรณ์แบรนด์ FIBARO จากประเทศโปแลนด์
        </p>
      </div>

      <div className="flex flex-wrap justify-center space-x-5">
        <CardService
          img="https://via.placeholder.com/600/24f355"
          title="One stop service Smart home / Home Automation system provider"
          des="เราให้บริการแบบ One-stop service ที่เดียวจบครบทุกความต้องการด้านสมาร์ทโฮมและโฮมออโตเมชั่น"
        />
        <CardService
          img="https://via.placeholder.com/600/d32776"
          title="No issues of contractor left job unfinished"
          des="หมดปัญหาเรื่องผู้รับเหมาทิ้งงาน เพราะเรามีการทำสัญญา และมีทีมงานดูแลตรวจสอบงานแทนลูกค้าจนส่งมอบงานให้ลูกค้า"
        />
        <CardService
          img="https://via.placeholder.com/600/f66b97"
          title="Best in class automation solutions yet easy to use-HDL Automation"
          des="FIBARO Automation เป็นแบรนด์หลักที่เราเลือกใช้ซึ่งเป็นผลิตภัณฑ์ที่ได้มาตรฐานมีชื่อเสียงเป็นที่ยอมรับในวงการ Home Automation ทั่วโลก"
        />
        <CardService
          img="https://via.placeholder.com/600/56a8c2"
          title="Easily switch to traditional system to ensure your daily"
          des="หมดกังวลเรื่องบริการหลังการขาย เนื่องจากเรามีการดูแลระบบให้ตลอด และมีระบบการจัดเคลมอุปกรณ์ให้กับลูกค้าหากมีการเสีย ซ่อมแซมโดยบริษัทแม่จากทางยุโรป"
        />
      </div>
    </div>
  );
}

export default OurServices;
