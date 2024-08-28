import React from "react";

//Components
import { FiNavigation } from "react-icons/fi";

function OurShowroom() {
  return (
    <div className="w-4/5 h-[500px] md:p-5 flex justify-end rounded-[50px] mx-auto overflow-hidden bg-showroom bg-bottom bg-cover">
      <div className="w-[500px] bg-white opacity-80 rounded-[50px] p-5 md:p-10 lg:my-10 space-y-2">
        <h3 className="italic text-green-500">About us</h3>
        <h2 className="w-fit">Our locations</h2>
        <p>
          ลูกค้าสามารถติดต่อสอบถามข้อมูลต่างๆ
          ได้ตามช่องทางการติดต่อที่แสดงบนเว็บไซต์ และสามารถเข้ามาเยี่ยมชม
          หรือทดลองใช้ระบบได้ที่ Showroom ของเราตามที่ระบุไว้ด้านล่างนี้.
        </p>

        {/* Icon and Text */}
        <div className="flex items-center w-full space-x-5">
          <FiNavigation size={45} className="text-success" />

          <div>
            <p>
              <span className="font-bold">Office location</span>
              <br />
              993/316 หมู่ที่ 6 ถ. แพรกษา ต.แพรกษา อ.เมือง จ.สมุทรปราการ
              10280.
            </p>
          </div>
        </div>
        <div className="flex items-center w-full space-x-5">
          <FiNavigation size={45} className="text-success" />

          <div>
            <p>
              <span className="font-bold">Showroom location</span>
              <br />
              90/49 หมู่ที่ 15 ถ. บางนาตราด ต.บางแก้ว อ.บางพลี จ.สมุทรปราการ
              10540.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurShowroom;
