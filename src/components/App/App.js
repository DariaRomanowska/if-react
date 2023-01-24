import React from "react";
import { Container } from "../Container";
import {contents} from "./config";
import {Content} from "../Content";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const App = () => {
  return (
    <>
      <section className="background-homes">
        <Container className="homes">
          <h2>Homes guests love</h2>
          <Swiper
              slidesPerView={4}
            modules={[Navigation, Pagination, A11y]}
            navigation={true}
              pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
              className="mySwiper"
          >
            <>
              {contents.map((data) => (
                  <SwiperSlide >
                    <Content key={data.id} {...data} />
                  </SwiperSlide>
              ))}
            </>

          </Swiper>
        </Container>
      </section>
    </>
  );
};
