import React from "react";
//Components
import {
  FaRegLightbulb,
  FaShieldAlt,
  FaTemperatureLow,
  FaMicrosoft,
} from "react-icons/fa";
import { AiOutlineAlert } from "react-icons/ai";
import BannerHeadVideo from "@/components/content/banner/Banner-Head-Video";
import CardProduct from "@/components/content/card/Card-Product";
import CardProductIcon from "@/components/content/card/Card-Product-Icon";

function page() {
  return (
    <div>
      {/* Banner Head */}
      <BannerHeadVideo />

      <div className="py-20">
        {/* Type products */}
        <div className="flex flex-wrap justify-center mb-10 space-x-10">
          <CardProductIcon icon={FaRegLightbulb} text="Lighting" />
          <CardProductIcon icon={FaShieldAlt} text="Security" />
          <CardProductIcon icon={FaTemperatureLow} text="Climate" />
          <CardProductIcon icon={FaMicrosoft} text="Gates and Blinds" />
          <CardProductIcon icon={AiOutlineAlert} text="Safety" />
        </div>

        {/* List Products */}
        <div className="w-4/5 grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2021/04/yh_icon.png"
            title="Home center 3 lite"
            link="https://manuals.fibaro.com/home-center-3-lite/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2020/01/HC3_icon.png"
            title="Home center 3"
            link="https://manuals.fibaro.com/home-center-3/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/drs_icon.png"
            title="Smart module"
            link="https://manuals.fibaro.com/smart-module/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/rgbw_icon.png"
            title="RGBW Controller"
            link="https://manuals.fibaro.com/rgbw-2/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/d2_icon.png"
            title="Dimmer"
            link="https://manuals.fibaro.com/dimmer-2/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/srs_icon.png"
            title="Single Switch"
            link="https://manuals.fibaro.com/relay-switch/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/drs_icon.png"
            title="Double Switch"
            link="https://manuals.fibaro.com/switch-2/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/rs2_icon.png"
            title="Roller Shutter"
            link="https://manuals.fibaro.com/roller-shutter-3/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/05/dws2.jpg"
            title="Door Sensor"
            link="https://manuals.fibaro.com/door-window-sensor-2/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/ms_icon.png"
            title="Motion Sensor"
            link="https://manuals.fibaro.com/motion-sensor/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/fs_icon.png"
            title="Flood Sensor"
            link="https://manuals.fibaro.com/flood-sensor/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/07/sd_icon.png"
            title="Smoke Sensor"
            link="https://manuals.fibaro.com/smoke-sensor/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/kf_icon.png"
            title="KeyFob"
            link="https://manuals.fibaro.com/keyfob/"
          />
          <CardProduct
            img="https://manuals.fibaro.com/wp-content/uploads/2017/02/button_icon.png"
            title="Button"
            link="https://manuals.fibaro.com/button/"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
