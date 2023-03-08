import React from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { contents } from "../Gallery/config";
import { Content } from "../Content";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Mousewheel} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Hotels = (props, { className }) => {
  let blockHotel;
  if (props.formData === "") {
    blockHotel = (<p className={"d_none"}></p>);
  } else {
    blockHotel = (
      <section className={classNames("house", 'homes', 'container')}>
        <h2>Available Hotels</h2>
        <Swiper
          slidesPerView={4}
          modules={[Navigation, Pagination, A11y, Mousewheel]}
          navigation={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="mySwiper"
        >
          <div className={"Gallery"}>
            {contents
              .filter((data) => {
                if (props.formData === "") {
                    return 'nothing find'
                } else if (
                  data.name.toString().toLowerCase().includes(props.formData.toString().toLowerCase())
                ) {
                  return data;
                } else if (
                  data.city.toString().toLowerCase().includes(props.formData.toString().toLowerCase())
                ) {
                  return data;
                } else if (
                  data.country.toString().toLowerCase().includes(props.formData.toString().toLowerCase())
                ) {
                  return data;
                }
                return false;
              })
              .map((data) => (
                <SwiperSlide className={"slides"}>
                  <Content key={data.id} {...data} />
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </section>
    );
  }
  return <>{blockHotel}</>;
};

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);
