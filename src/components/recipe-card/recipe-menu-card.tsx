import Image from "next/image";
import Rating from "@mui/material/Rating";

interface RecipeMenuProp {
  postName: string;
  description?: string;
  rating?: number;
  imgUrl?: string;
}

/* TODO: make these titles link & attach img */

/* default card for recipe & menu posts */
const RecipeMenuPostCard = ({ postName, imgUrl }: RecipeMenuProp) => {
  return (
    <div className="w-[344px]">
      {/* post img */}
      <div className="w-[344px] h-[239px] rounded-lg border">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="ingredient img"
            width={344}
            height={239}
            className="w-[344px] h-[239px] rounded-2xl"
          />
        )}
      </div>
      {/* post title */}
      <div className="py-2 pr-2">
        <p className="font-medium text-[12px] leading-[17px] text-[rgb(235,0,0)] hover:underline">
          RECIPES & MENUS
        </p>
        <p className="font-bold text-[16px] leading-[27px] text-black hover:underline">
          {postName}
        </p>
      </div>
    </div>
  );
};

export const MainFeaturedPostCard = ({
  postName,
  description,
  rating,
  imgUrl,
}: RecipeMenuProp) => {
  return (
    <div className="w-[720px] ">
      {/* post img */}
      <div className="w-[720px] h-[720px] rounded-lg border">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="ingredient img"
            width={720}
            height={720}
            className="w-[720px] h-[720px] rounded-2xl"
          />
        )}
      </div>
      {/* post info */}
      <div className="w-full py-2 pr-2">
        <p className="text-[12px] leading-[17px] font-medium text-[rgb(235,0,0)]">
          RECIPES & MENUS
        </p>
        <p className="text-[42px] leading-[47px] font-bold text-[rgb(51,51,51)]">
          {postName}
        </p>
        <p className="text-[15px] leading-[22px] font-normal text-[rgb(80,80,80)] pb-4 pt-2">
          {description}
        </p>
        <Rating name="read-only" value={rating} readOnly />
      </div>
    </div>
  );
};

export const SidePostCard = ({ postName, rating, imgUrl }: RecipeMenuProp) => {
  return (
    <div className="pt-5 pb-4 flex flex-row items-center justify-between border-t border-t-[rgb(226,221,204)] border-solid">
      {/* post info */}
      <div className="">
        <p className="font-medium text-[12px] leading-[17px] text-[rgb(235,0,0)]">
          RECIPES & MENUS
        </p>
        <p className="text-[rgb(51,51,51)] text-[18px] leading-[25px] font-bold pb-4">
          {postName}
        </p>
        <Rating name="read-only" value={rating} readOnly size="small" />
      </div>
      {/* post img */}
      <div className="w-[75px] h-[75px] border-2xl">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="ingredient img"
            width={75}
            height={75}
            className="w-[75px] h-[75px] rounded-2xl"
          />
        )}
      </div>
    </div>
  );
};

export const RecipeSwiperCard = ({
  postName,
  rating,
  imgUrl,
}: RecipeMenuProp) => {
  return (
    <div className="w-[250px] mb-5 group shadow-md hover:scale-105 transition-all duration-200">
      {/* recipe img */}
      <div className=" w-[250px] h-[295px] border border-primaryGolden">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="ingredient img"
            width={250}
            height={295}
            className="w-[250px] h-[295px] "
          />
        )}
      </div>
      {/* recipe info */}
      <div className="px-2 pt-4 pb-2 h-[100px]">
        <div className="flex justify-start items-center gap-1 mt-2.5 ">
          <p className="text-xs">{rating?.toLocaleString()}</p>
          <Rating
            name="read-only"
            value={rating}
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
            {"("} 200 votes{")"}
          </div>
        </div>
        <p className="font-semibold text-primarydblue text-base font-raleWay tracking-wider mb-4 hover:underline group-hover:text-primaryGolden transition-all duration-200">
          {postName}
        </p>
      </div>
    </div>
  );
};

export const RecipeWheelSwiperCard = ({
  postName,
  rating,
  imgUrl,
}: RecipeMenuProp) => {
  return (
    <div className="w-[100px] text-[#434248] text-xs">
      {/* recipe img */}
      <div className=" w-[80px] h-[80px] rounded-full shadow-2xl">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="ingredient img"
            width={80}
            height={80}
            className="w-[80px] h-[80px] rounded-full"
          />
        )}
      </div>
      {/* recipe info */}
      <div className="px-2 pt-4">
        <p className="font-medium hover:underline">{postName}</p>
      </div>
    </div>
  );
};

export const BestFromBookSideCard = ({ title, rating, imgUrl }: PostInfo) => {
  return (
    <div className="flex items-center justify-start gap-8 mb-8">
      {/* recipe img */}
      <div className="w-[96px] h-[128px] rounded-2xl">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="ingredient img"
            width={96}
            height={128}
            className="rounded-2xl"
          />
        )}
      </div>
      {/* recipe info */}
      <div className="">
        <p className="font-medium text-[12px] leading-[17px] text-[rgb(235,0,0)]">
          RECIPES & MENUS
        </p>
        <p className="text-[rgb(51,51,51)] text-[18px] leading-[25px] font-bold pb-4">
          {title}
        </p>
        {rating && (
          <Rating name="read-only" value={rating} readOnly size="small" />
        )}
      </div>
    </div>
  );
};

export default RecipeMenuPostCard;
