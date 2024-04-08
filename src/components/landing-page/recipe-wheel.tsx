"use client";
import Image from "next/image";
import starIcon from "@/assets/star.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { RecipeWheelSwiperCard } from "../recipe-card/recipe-menu-card";

const PREFERENCES = ["All", "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"];

const MOCKUP_VEGIE_RECIPES = [
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
];

export default function RecipeWheel() {
  const [currentPref, setPref] = useState<Number>(0);

  const handleSwitchPref = async (prefIndex: Number) => {
    setPref(prefIndex);
  };

  return (
    <div className="w-full bg-[#313236] h-[100vh] flex items-center justify-center text-[#414141]">
      <div className="max-w-[1600px] w-full bg-[#d7d6d7] rounded-xl h-[800px] flex items-center">
        {/* recipe wheel */}
        <div className="grow flex flex-col justify-between h-full">
          {/* recipe lists */}
          <div className="w-full h-full bg-green-300 flex flex-col">
            <div className="w-full bg-red-300 h-[75%]"></div>
            <div className="w-full grow bg-orange-400 flex items-center justify-center">
              {/* recipe controller */}
              <div className="w-full max-w-[900px] bg-blue-300 flex  gap-14 items-start justify-center">
                {MOCKUP_VEGIE_RECIPES.map((item, index) => {
                  return (
                    <div key={index}>
                      <RecipeWheelSwiperCard {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* category selector */}
          <div className="pt-2 pb-4 w-full items-center flex justify-center gap-3 mb-20">
            {PREFERENCES.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    currentPref === index
                      ? "bg-[rgb(51,51,51)] text-white  border-black"
                      : " border-black text-[rgb(51,51,51)] border-transparent"
                  } text-[12px] leading-[17px] font-bold px-6 py-2 rounded-3xl border hover:border-black`}
                  onClick={() => handleSwitchPref(index)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        {/* recipe info */}
        <div className="mr-4 my-10 rounded-xl p-6 bg-[#e7e6e8] max-w-xs">
          {/* info option */}
          <div className="flex items-center justify-center text-[#424242] gap-10 text-sm w-full ">
            <div className="font-bold">Overview</div>
            <div>Ingredients</div>
          </div>
          {/* recipe info */}
          <div className=" pt-10 ">
            <div className="relative rounded-3xl bg-[#F5C856] bg-opacity-60 h-[90px] w-16">
              <div className="absolute top-1 left-1/4 text-5xl font-bold">
                4.9
              </div>
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2">
                <Image src={starIcon} alt="start icon" width={16} />
              </div>
            </div>
          </div>
          {/* author */}
          <div className="font-bold text-xl mt-4">Chef Feny</div>
          {/* short desc */}
          <div className="font-light text-xs mt-4"> Fkin delicious gourmet</div>
          {/* desc */}
          <div className="font-medium text-sm mt-4">
            This rich and silky chocolate mousse recipe is really just two easy
            recipes—chocolate custard and whipped cream
          </div>
          {/* rating */}
          <div className="flex h-48"></div>
        </div>
      </div>
    </div>
  );
}
