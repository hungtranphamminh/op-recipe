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
    <div className="max-w-[700px]">
      {/* post img */}
      <div className="w-[700px] h-[447px] rounded-[20px]">
        <Image
          src={imgUrl}
          alt="ingredient img"
          width={700}
          height={447}
          className="w-[700px] h-[447px] rounded-2xl"
        />
      </div>
      {/* post info */}
      <div className="py-4">
        <p className="mb-4 font-bold text-[20px] leading-[29px] text-[rgb(51,51,51)] hover:underline">
          {postName}
        </p>
        <p className="mb-2 font-normal text-[15px] leading-[22px] text-[rgb(80,80,80)]">
          {description}
        </p>
      </div>
    </div>
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
