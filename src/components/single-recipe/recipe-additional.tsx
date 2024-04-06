import Image from "next/image";
import servings from "@/images/single-rec/people.svg";
import prep from "@/images/single-rec/clock.svg";
import cook from "@/images/single-rec/cook.svg";
import level from "@/images/single-rec/level.svg";
import cuisine from "@/images/single-rec/cuisine.svg";
import download from "@/images/single-rec/download.svg";

export default function AdditionalInfoRec({ recipeInfo }: any) {
  return (
    <div className="w-full flex items-center flex-col">
      <section className="w-full max-w-[1440px] pt-6">
        {/* additional info */}
        <div className="w-full flex items-center justify-between">
          {/* servings */}
          <div className="flex items-center">
            {/* icon */}
            <div className="p-3 rounded-full bg-amber-100">
              <Image src={cuisine} alt="servin" width={24} height={24} />
            </div>
            <div className="ml-3">
              <p className="font-renner text-sm text-gray-400">Cuisine</p>
              <p className="font-renner text-base font-semibold">French Food</p>
            </div>
          </div>
          {/* servings */}
          <div className="flex items-center">
            {/* icon */}
            <div className="p-3 rounded-full bg-amber-100">
              <Image src={servings} alt="servin" width={24} height={24} />
            </div>
            <div className="ml-3">
              <p className="font-renner text-sm text-gray-400">Servings</p>
              <p className="font-renner text-base font-semibold">{4} people</p>
            </div>
          </div>
          {/* prep */}
          <div className="flex items-center">
            {/* icon */}
            <div className="p-3 rounded-full bg-amber-100">
              <Image src={prep} alt="servin" width={24} height={24} />
            </div>
            <div className="ml-3">
              <p className="font-renner text-sm text-gray-400">Prep Time</p>
              <p className="font-renner text-base font-semibold">
                {recipeInfo.time.prep}
              </p>
            </div>
          </div>
          {/* cook */}
          <div className="flex items-center">
            {/* icon */}
            <div className="p-3 rounded-full bg-amber-100">
              <Image src={cook} alt="servin" width={24} height={24} />
            </div>
            <div className="ml-3">
              <p className="font-renner text-sm text-gray-400">Cook Time</p>
              <p className="font-renner text-base font-semibold">
                {recipeInfo.time.cook}
              </p>
            </div>
          </div>
          {/* level */}
          <div className="flex items-center">
            {/* icon */}
            <div className="p-3 rounded-full bg-amber-100">
              <Image src={level} alt="servin" width={24} height={24} />
            </div>
            <div className="ml-3">
              <p className="font-renner text-sm text-gray-400">Difficulty</p>
              <p className="font-renner text-base font-semibold">
                {recipeInfo.level} level
              </p>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="my-10">
          <div className="max-w-[900px]">
            <p className="font-stixToText text-[16px] leading-[27px] font-light mb-10">
              {recipeInfo.description}
            </p>
            {/* tags n download */}
            <div className="flex items-center justify-between">
              {/* tags */}
              <div className="">
                <div className="font-renner">Tags</div>
                <div className="flex flex-wrap font-renner mt-2">
                  {recipeInfo.tags.map((item: any, index: number) => {
                    return (
                      <p
                        key={index}
                        className="mr-1 text-sm text-orange-500 hover:underline"
                      >
                        {item}
                        {index === recipeInfo.tags.length - 1 ? "" : ","}
                      </p>
                    );
                  })}
                </div>
              </div>
              {/* download */}
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
