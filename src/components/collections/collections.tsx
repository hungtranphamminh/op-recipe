import author from "@/images/landing/wtc/author.svg";
import Image from "next/image";
import golden from "@/images/landing/slide3/golden.png";
import PopularCollections from "./popular";

const FEATURED_COLLECTIONS = {
  title: "Fresh and Flavorful Summer Weekend Dinners",
  author: " Anakin Skywalker",
  description: `From vibrant salads to sizzling barbecues and refreshing desserts,
  each dish celebrates the season's bounty. Perfect for gatherings
  or quiet nights in, these recipes promise to elevate your summer
dining with fresh, vibrant flavors.`,
};

export default function CollectionsSection() {
  return (
    <div className="md:max-w-[1440px] w-full">
      {/* doesnt know what for : D but i'll still keep it here just in case u know */}
      <div className="w-full h-[100px]"></div>
      {/* featured collections info */}
      <div className="w-full flex items-center relative">
        {/* collection thumbnail */}
        <div className="w-1/2 h-[500px] bg-[url('/images/recipes/collections/featured.jpeg')] bg-cover bg-no-repeat bg-center"></div>
        {/* collection info */}
        <div className="group relative grow bg-[url('/images/background/blackpaint.jpg')] bg-bottom h-[500px] flex flex-col justify-center items-center">
          {/* featured stamp */}
          <div className="absolute top-5 left-5 p-3 text-sm bg-red-500 text-white uppercase font-raleWay">
            {" "}
            Featured Collection
          </div>
          <div className="group relative w-full flex flex-col items-center max-h-[180px] group-hover:max-h-full transition-all duration-700 overflow-hidden">
            {/* title */}
            <div className="max-w-[500px] text-3xl text-center font-raleWay text-white">
              {FEATURED_COLLECTIONS.title}
            </div>
            <div className="w-20 h-[2px] rounded-md my-6 bg-orange-200"></div>
            <div className=" flex items-center gap-3 text-white">
              <Image src={author} alt="author" width={24} height={24} />
              <p className="font-medium md:text-base text-xs mt-2">
                COLLECTION | Collections by
                <span className=" ml-3 font-playball text-xl font-medium text-orange-200">
                  {FEATURED_COLLECTIONS.author}
                </span>
              </p>
            </div>
            <Image
              src={golden}
              alt="golden"
              width={23}
              height={21}
              className="my-6"
            />

            {/* description */}
            <div className="max-w-[500px] text-center text-white italic">
              {FEATURED_COLLECTIONS.description}
            </div>
          </div>
        </div>
      </div>
      {/* you popular recently */}
      <PopularCollections />
      {/* all collections and search */}
      <div></div>
    </div>
  );
}
