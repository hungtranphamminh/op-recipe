import Image from "next/image";
import o1 from "@/images/single-rec/o1.jpg";
import o2 from "@/images/single-rec/o2.jpg";
import o3 from "@/images/single-rec/o3.jpg";
import o4 from "@/images/single-rec/o4.jpg";
import o5 from "@/images/single-rec/o5.jpg";
import o6 from "@/images/single-rec/o6.jpg";
import o7 from "@/images/single-rec/o7.jpg";
import o8 from "@/images/single-rec/o8.jpg";
import o9 from "@/images/single-rec/o9.jpg";
import plus from "@/images/single-rec/plus.svg";
import SingleRecipeComment from "./recipe-comment";

export default function SingleRecipeStep({ recipeInfo }: any) {
  const bgSrc = [o1, o2, o3, o4, o5, o6, o7, o8, o9];

  return (
    <div className="w-full flex items-center flex-col">
      {/* main information */}
      <section className="w-full max-w-[1050px]">
        {/* steps and ingredients */}
        <div className="w-full flex items-start justify-between pt-6 border-b-2">
          {/* left section */}
          <div className="w-full max-w-[390px]">
            {/* ingredients */}
            <div className=" w-full px-2 border-b border-b-[rgb(226,221,204)]">
              <div className="w-full font-renner font-bold text-[20px] leading-[28px] text-black mb-6 pb-4 border-b-2 border-b-[rgb(226,221,204)]">
                Ingredients
              </div>
              {recipeInfo.ingredients.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="font-srcSerif px-2 py-1 text-[14px] leading-[20px] font-normal relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-primaryGolden transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
                    <div className="relative group-hover:text-white group-hover:font-medium">
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* private note */}
            <div>
              <div className="w-full font-renner font-bold text-[20px] leading-[28px] text-black my-6">
                My Private Notes
              </div>
              <div className="flex items-center gap-3">
                <button className="size-8 flex items-center justify-center rounded-full bg-primarydblue">
                  <Image alt="plus" src={plus} width={20} height={20} />
                </button>
                <p className="font-medium">Add a note</p>
              </div>
            </div>
          </div>
          {/* steps */}
          <div className="grow max-w-[660px] flex flex-col items-center">
            <div className="w-full font-renner text-center font-bold text-[20px] leading-[28px] text-black mb-6 pb-4 border-b-2 border-b-[rgb(226,221,204)]">
              Directions
            </div>
            <div className="w-full max-w-[700px] px-10 flex flex-col font-stixToText text-[16px] leading-[27px] font-normal">
              {recipeInfo.steps.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`relative ${
                      index !== recipeInfo.steps.length - 1 ? "border-b" : ""
                    } border-b-[#e0e0e0] w-full first-letter:font-stixToText text-left first-letter:text-white py-2 first-letter:text-4xl first-letter:float-left first-letter:font-bold first-letter:mr-4 bg-contain first-letter:p-1`}
                  >
                    <p className="relative z-10">{item}</p>
                    <Image
                      src={bgSrc[index % 9]}
                      alt="orange"
                      width={50}
                      height={50}
                      className="z-0 absolute top-1 -left-4"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* reviews and comments */}
        <SingleRecipeComment {...recipeInfo.rating} />
      </section>
    </div>
  );
}
