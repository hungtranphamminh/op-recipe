"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { RecipeSwiperCard } from "../recipe-card/recipe-menu-card";
import "@/styles/swiper-diet.css";

// Import Swiper styles

const MOCKUP_DP_POST = [
  {
    postName: "Blueberry Compote With Coriander",
    rating: 4.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630096/12_yak2wg.webp",
  },
  {
    postName: "Gluten-Free Focaccia With Rosemary and Onion",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630096/11_xmuo9o.webp",
  },
  {
    postName: "Herby Cauliflower Fritters",
    rating: 4.5,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630095/10_qwmlpe.webp",
  },
  {
    postName: "Pasta With Feta, Olives, and Raisins",
    rating: 3.8,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630094/9_iiwiga.webp",
  },
  {
    postName: "One-Pot Broccoli Mac and Cheese",
    rating: 4.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630093/8_ztehco.webp",
  },
  {
    postName: "Raisin Vinaigrette Any Lettuce Will Love",
    rating: 4.05,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630093/7_nvbk3l.webp",
  },
  {
    postName: "Seedy Cumin Sprinkle",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630092/6_fuxcww.webp",
  },
  {
    postName: "Lemony White Bean Soup",
    rating: 4.5,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630092/5_lb4ljg.webp",
  },
  {
    postName: "Berbere Kabocha With Brown Butter Peanuts and Lime",
    rating: 3.8,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630092/4_rltljw.webp",
  },
  {
    postName: "Pork Tenderloin With Jam-and-Mustard Glaze",
    rating: 4.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709630091/3_jtnhw6.webp",
  },
];

const PREFERENCES = ["All", "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"];

/* TODO: update api for posts */

const DietaryPreferences = () => {
  const [currentPref, setPref] = useState<Number>(0);

  const handleSwitchPref = async (prefIndex: Number) => {
    setPref(prefIndex);
  };

  return (
    <div className=" max-w-[1440px] px-16  mx-auto pb-[60px]">
      {/* section title */}
      <div className="w-full flex flex-col items-center justify-start pt-8">
        <p className="text-[24px] leading-[26px] text-[rgb(51,51,51)] font-raleWay tracking-[0.1em] font-semibold">
          RECIPES BASED ON DIETARY PREFERENCES
        </p>
        <div className="mt-4 mb-10 w-[100px] border-b-2 border-b-[rgb(235,0,0)] border-solid"></div>
      </div>
      {/* main info  */}
      <div className="">
        {/* category selector */}
        <div className="pt-2 pb-4 w-full items-center flex justify-center gap-3 mb-6">
          {PREFERENCES.map((item, index) => {
            return (
              <button
                key={index}
                className={`${
                  currentPref === index
                    ? "bg-[rgb(51,51,51)] text-white  border-black"
                    : "bg-[rgba(192,57,57,0.2)] text-[rgb(51,51,51)] border-transparent"
                } text-[12px] leading-[17px] font-bold px-6 py-2 rounded-3xl border hover:border-black`}
                onClick={() => handleSwitchPref(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
        {/* post swiper */}
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          navigation={false}
          mousewheel={false}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {MOCKUP_DP_POST.map((item, index) => {
            return (
              <div key={index}>
                <SwiperSlide>
                  <RecipeSwiperCard {...item} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DietaryPreferences;
