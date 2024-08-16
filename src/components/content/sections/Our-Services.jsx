import React from "react";
import CardService from "../card/Card-Service";

function OurServices() {
  return (
    <div className="space-y-5 h-screen">
      <div className="text-center w-1/2 mx-auto py-10">
        <h2>Why use our services !!</h2>
        <h2>B Smart-life - turnkey solution provider for smart home</h2>
        <p className="my-2">ทำไมต้องเลือกเรา!!</p>
        <p>
          บริษัทบี สมาร์ทไลฟ์
          เราคือผู้นำด้านการออกแบบและติดตั้งระบบโฮมออโตเมชั่น (Home Automation)
          และสมาร์ทโฮม (Smart Home) แบบ Professional system ครบวงจร
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        <CardService
          img="https://via.placeholder.com/600/24f355"
          title="One stop service Smart home / Home Automation system provider"
          des="เราให้บริการแบบ One-stop service ที่เดียวจบครบทุกความต้องการด้านสมาร์ทโฮมและโฮมออโตเมชั่น"
        />
        <CardService
          img="https://via.placeholder.com/600/d32776"
          title="No issues of contractor left job unfinished"
          des="หมดปัญหาเรื่องผู้รับเหมาทิ้งงาน เพราะเราคือรูปแบบบริษัทมีการทำสัญญา และมีทีมงานดูแลตรวจสอบงานแทนลูกค้าจนส่งมอบงานให้ลูกค้า"
        />
        <CardService
          img="https://via.placeholder.com/600/f66b97"
          title="Best in class automation solutions yet easy to use-HDL Automation"
          des="HDL Automation เป็นแบรนด์หลักที่เราเลือกใช้ซึ่งเป็นผลิตภัณฑ์ที่ได้มาตรฐานมีชื่อเสียงเป็นที่ยอมรับในวงการ Home Automation ทั่วโลก"
        />
        <CardService
          img="https://via.placeholder.com/600/56a8c2"
          title="Easily switch to traditional system to ensure your daily"
          des="หมดกังวลเรื่องระบบขัดข้องไม่สามารถใช้งานได้ เพราะคุณสามารถสลับเข้าโหมดการใช้งานปกติและสามารถใช้งานระบบต่างๆของบ้านได้ตามปกติ"
        />
      </div>
    </div>
  );
}

export default OurServices;
