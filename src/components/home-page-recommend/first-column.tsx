import { Rating } from "@mui/material";
import Image from "next/image";
import { Recipe } from "../home-page/recommended-recipes";
import authorblack from "@/images/landing/wtc/author-black.svg";

export default function FirstRecipeColumn({ recipes }: { recipes: Recipe[] }) {
  console.log("recipes: ", recipes);

  return (
    <div className="w-[400px] flex flex-col items-center justify-start gap-[30px]">
      {/* what to cook card */}
      <div className="w-full uppercase">
        <div className=" bg-white tracking-[0.1em] w-full">
          <div className="text-primaryGolden w-full flex items-center justify-center font-semibold text-base text-center tracking-[0.2em]">
            <p>DELICACIES FOR YOU</p>
          </div>
          <div className="mt-2 pt-[15px] w-full border-t border-t-[#e1e1e1] text-[#888] text-center font-playball">
            From Our Finest
          </div>
        </div>
      </div>
      {/* recipes */}
      {recipes.map((recipe: Recipe, index: number) => (
        <article
          key={index}
          className="w-[400px] flex flex-col transition-all duration-300 items-center justify-center relative mt-5 group"
        >
          {/* main image */}
          <div
            className={`w-[400px] relative z-10 aspect-w-7 ${
              index === 1 ? "aspect-h-4" : "aspect-h-4"
            }`}
          >
            <Image
              src={recipe.imgUrl}
              alt={recipe.title}
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-all duration-200"
              fill
            />
          </div>
          {/* recipe info */}
          <div
            className="flex flex-col
           w-full bg-white py-4 transition-all duration-300"
          >
            {/* time */}
            <p className="text-[#888] font-medium text-[14px] leading-[25px] font-raleWay tracking-[0.01em]">
              01/24/2022
            </p>
            {/* title */}
            <h1 className=" text-base font-raleWay tracking-[0.12em] font-semibold text-primarydblue group-hover:text-primaryGolden transition-all duration-200 w-fit">
              {recipe.title}
            </h1>

            {/* rating */}
            <div className="flex justify-start items-center gap-1 mt-2.5 ">
              <p className="text-xs">{recipe.rating.toLocaleString()}</p>
              <Rating
                name="read-only"
                value={recipe.rating}
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#1A2433",
                  },
                  "& .MuiRating-iconEmpty": {
                    color: "gray",
                  },
                  "& .MuiRating-icon": {
                    marginRight: "6px", // adjust as needed
                  },
                  "& .MuiSvgIcon-root": {
                    height: "10px",
                    width: "auto",
                  },
                }}
              />
              {/* votes */}
              <div className="font-[300] text-xs">
                {"(" + recipe.votes} votes{")"}
              </div>
            </div>
            {/* description */}
            <div className=" font-light mt-2.5 text-[#888] text-[14px] leading-[25px] tracking-[0.01em] h-[70px] overflow-y-hidden line-clamp-3">
              {recipe.description}
            </div>
            {/* author */}
            <div className=" flex items-center gap-1  text-xs mt-[37px] pt-[15px] border-t border-t-[#e1e1e1]">
              <Image src={authorblack} alt="author" width={13} height={13} />
              <p className="font-medium text-[13px] leading-7 transition-all duration-300 text-[#888]">
                RECIPE | Courtesy of{" "}
                <span className="uppercase tracking-[0.2em] font-medium hover:text-primaryGolden text-[#545454] transition-all duration-300">
                  <span className="font-semibold">{recipe.author}</span>
                </span>
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
