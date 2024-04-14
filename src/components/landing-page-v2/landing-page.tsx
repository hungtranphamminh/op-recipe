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
import OurStory from "./our-story";
import HeaderLanding from "../header/header-landing";

export default function LandingPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="w-full h-[100vh] relative">
      <HeaderLanding atSlide={activeSlide} />
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
        <SwiperSlide>
          <OurStory isActive={activeSlide === 3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
