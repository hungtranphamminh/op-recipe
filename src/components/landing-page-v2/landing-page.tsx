"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Greeting from "./greeting";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import "@/styles/swiper.css";
import { useState } from "react";
import ExpertAdvice from "./expert-advice";
import Collections from "./collections";

export default function LandingPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="w-full h-[100vh] relative">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      >
        <SwiperSlide>
          <Greeting isActive={activeSlide === 0} />
        </SwiperSlide>
        <SwiperSlide>
          <Collections isActive={activeSlide === 1} />
        </SwiperSlide>
        <SwiperSlide>
          <ExpertAdvice isActive={activeSlide === 2} />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
