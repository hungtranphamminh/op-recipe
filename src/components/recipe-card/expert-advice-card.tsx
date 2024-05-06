import Image from "next/image";

interface ExpertAdviceCardProp {
  postName: string;
  description?: string;
  time?: string;
  imgUrl: string;
}

const ExpertAdviceDefaultCard = ({
  postName,
  description,
  imgUrl,
}: ExpertAdviceCardProp) => {
  return (
    <article className="flex items-center bg-white group hover:scale-105 transition-all duration-200">
      {/* post img */}
      <div className="w-[350px] relative z-10 aspect-w-10 aspect-h-3">
        <Image
          src={imgUrl}
          alt="ingredient img"
          style={{ objectFit: "cover" }}
          className=""
          fill
        />
      </div>
      {/* post info */}
      <div className="p-4 grow max-w-[300px] flex flex-col items-center font-raleWay">
        <h2 className="mb-4 font-semibold text-base text-primarydblue group-hover:text-primaryGolden group-hover:underline transition-all duration-200 text-center">
          {postName}
        </h2>
        <p className="mb-2 font-normal text-sm tracking-[0.05em] text-[#888]">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ExpertAdviceDefaultCard;

const MOCKUP_SINGLE_EA_POSTS = {
  postName: "How King Cake Became Carnival Royalty in New Orleans",
  description:
    "With or without the plastic baby baked inside, this purple, green, and gold cake is an icon of Mardi Gras.",
  time: "December 19, 2022",
  imgUrl:
    "https://res.cloudinary.com/dyeiygws0/image/upload/v1709628697/KingCake_HERO_111622_42500_eitqxc.webp",
};

export const SingleEAPostCard = () => {
  const { postName, description, time, imgUrl } = MOCKUP_SINGLE_EA_POSTS;
  return (
    <div className="my-20 max-w-[1600px] px-16 ">
      <div className="w-full flex items-center rounded-[20px] gap-8 bg-[rgb(245,239,239)]">
        {/* post img */}
        <div className="w-[720px] h-[720px] rounded-l-2xl">
          <Image
            src={imgUrl}
            alt="ingredient img"
            width={720}
            height={720}
            className="w-[720px] h-[720px] rounded-l-2xl"
          />
        </div>
        {/* post info */}
        <div className="pb-8 grow ">
          <div className="text-[12px] leading-[17px] font-medium hover:underline text-[rgb(235,0,0)]">
            EXPERT ADVICE
          </div>
          <div className="mb-4 font-bold text-[29px] leading-[36px] text-[rgb(51,51,51)] hover:underline">
            {postName}
          </div>
          <div className="font-normal text-[15px] leading-[22px] text-[rgb(80,80,80)] mb-2">
            {description}
          </div>
          <div className="font-normal text-[11px] leading-[15px] text-[rgb(117,117,117)] mb-2">
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};
