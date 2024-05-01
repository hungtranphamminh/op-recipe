import Image from "next/image";
import {
  getVerticalVariant,
  getFadeVariant,
  getHorizontalVariant,
} from "@/utils/animation/landing-page/slide-1";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import healthy from "@/images/landing/slide2/healthy.jpg";
import cake from "@/images/landing/slide2/cake.jpg";
import nuts from "@/images/landing/slide2/nuts.jpg";
import vegan from "@/images/landing/slide2/vegan.jpg";
import appetit from "@/images/landing/slide2/appetizer.jpg";
import CollectionCard from "./collection-card";
import "@/styles/swiper.css";
import golden from "@/images/landing/slide3/golden.png";

const MOCKUP_COLLECTIONS = [
  {
    imgUrl: healthy.src,
    title: "HEALTHY RECIPES",
  },
  {
    imgUrl: cake.src,
    title: "THE ART OF CAKES",
  },
  {
    imgUrl: nuts.src,
    title: "THE DANCE OF SWEETS",
  },
  {
    imgUrl: vegan.src,
    title: "AMAZING GREENS",
  },
  {
    imgUrl: appetit.src,
    title: "SAVORY STARTERS",
  },
];

export default function Collections({ isActive }: { isActive: boolean }) {
  const controlBackground = useAnimation();

  useEffect(() => {
    if (isActive) {
      controlBackground.start("visible");
    } else {
      controlBackground.start("hidden");
    }
  }, [isActive, controlBackground]);

  return (
    <div className="w-full h-full relative flex">
      {/* text content */}
      <div className="grow flex flex-col items-center justify-center w-full p-10 max-w-[500px] h-full bg-[url('/images/landing/slide2/bg.jpg')] ">
        <motion.div
          variants={getVerticalVariant(0.3, 1.5, "50px")}
          initial="hidden"
          animate={controlBackground}
          className="font-playball text-5xl font-bold first-letter:text-6xl text-white"
        >
          Curated Culinary Journeys
        </motion.div>

        <motion.div
          variants={getVerticalVariant(0.6, 1.5, "50px")}
          initial="hidden"
          animate={controlBackground}
          className="w-[23px] h-[21px] mt-6"
        >
          <Image src={golden} alt="golden" width={0} height={0} className="" />
        </motion.div>

        {/* motto */}
        <motion.div
          variants={getVerticalVariant(0.6, 1.5, "50px")}
          initial="hidden"
          animate={controlBackground}
          className="font-alexBrush text-[39px] leading-[39px] mt-6 text-[rgb(187,187,188)]"
        >
          We Reach for convenience
        </motion.div>

        <motion.div
          variants={getVerticalVariant(0.9, 1.5, "50px")}
          initial="hidden"
          animate={controlBackground}
          className="mt-6 w-10 h-[2px] bg-primaryGolden"
        ></motion.div>

        {/* content */}
        <motion.div
          variants={getVerticalVariant(0.9, 1.5, "50px")}
          initial="hidden"
          animate={controlBackground}
          className="mt-6 text-base ml-10 text-white"
        >
          Explore our handpicked assortments of recipes designed to cater to
          every palate and preference. From healthy options to indulgent treats,
          vegan delights to mouthwatering appetizers, our collections offer
          something for everyone.
        </motion.div>
      </div>

      {/* animation bg */}
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={{ width: "auto", height: "auto" }}
      >
        {MOCKUP_COLLECTIONS.map((item, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide-collection">
              <CollectionCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="grow w-full max-w-[100px] h-full bg-[url('/images/landing/slide2/bg.jpg')] "></div>
    </div>
  );
}
