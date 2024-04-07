/* TODO: decide if this section should be turned into dyn w real data */

import { Rating } from "@mui/material";
import { BestFromBookSideCard } from "../recipe-card/recipe-menu-card";
import Image from "next/image";

const MOCKUP_RM_POST = [
  {
    postName: "Three Cities of Spain Cheesecake",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627549/gourmet/Why-This-Is-the-Best-Cheesecake-Ever-14062018_pzmsdk.webp",
  },
  {
    postName: "Flourless Chocolate Cake",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627549/gourmet/FlourlessChocolateCake_RECIPE_20220125_1814_final_bovsvv.webp",
  },
  {
    postName: "Mango Sticky Rice",
    rating: 4.5,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627548/gourmet/MangoStickyRice_RECIPE_04142022_9683_final_okufn6.webp",
  },
];

const RandomSection = ({ title, mainPost, sidePost }: RandomSectionProp) => {
  return (
    <section className="w-full mb-14 py-12 px-14 bg-[rgb(245,241,231)] flex flex-col items-center justify-start">
      {/* section title */}
      <div className="w-full max-w-[calc(1600px-128px)] flex flex-col items-center justify-start pb-4 border-b-[0.0625rem] border-solid border-b-[rgb(51,51,51)] text-center mb-8">
        <p className="text-[24px] leading-[26px] font-medium text-[rgb(51,51,51)]">
          {title}
        </p>
        <div className="mt-4 mb-10 w-[100px] border-b-2 border-b-[rgb(235,0,0)] border-solid"></div>
      </div>
      {/* section info */}
      <div className="w-full max-w-[calc(1600px-128px)] flex items-start justify-start gap-8">
        {/* main post */}
        <div className="w-[720px] flex flex-col items-center">
          {/* post title */}
          <div className="pb-6 text-center w-full font-bold text-[rgb(51,51,51)] text-[42px] leading-[47px] hover:underline">
            {mainPost.title}
          </div>
          {/* post img */}
          <div className="w-[460px] h-[614px] rounded-2xl bg-emerald-300">
            <div className="w-full h-full rounded-2xl ">
              <Image
                src={mainPost.imgUrl}
                alt="post img"
                width={460}
                height={614}
                className="rounded-2xl"
              />
            </div>
          </div>
          {/* post rating */}
          <div className="pt-4 w-[460px]">
            <Rating name="read-only" value={5} readOnly />
          </div>
        </div>
        {/* side cards */}
        <div className="grow max-w-[595px]">
          {/* main post description */}
          <p className="text-[rgb(80,80,80)] font-normal text-[16px] leading-[27px] mb-8">
            {mainPost.description}
          </p>
          {sidePost.map((item, index) => {
            return (
              <div key={index}>
                <BestFromBookSideCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RandomSection;
