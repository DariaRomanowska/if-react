import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {contents} from "./config";
import {Content} from "../Content";
import SwiperCore, { Navigation, Pagination, Mousewheel, Lazy } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination,  Mousewheel, Lazy]);

export const Gallery = () => (
    <>
        <Swiper
            slidesPerView={4}
            modules={[Navigation, Pagination, Mousewheel, Lazy]}
            navigation={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="mySwiper"
        >
            <>
                {contents.map((data) => (
                    <SwiperSlide className={"slides"}>
                        <Content key={data.id} {...data} />
                    </SwiperSlide>
                ))}
            </>
        </Swiper>
    </>
);