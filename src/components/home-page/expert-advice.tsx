import ExpertAdviceDefaultCard from "../recipe-card/expert-advice-card";
import { MOCKUP_EA_POSTS } from "@/utils/consts/home/expert-advice-posts";

const ExpertAdvice = () => {
  return (
    <div className="mt-10 max-w-[1600px] px-16">
      {/* title */}
      <div className="w-full flex flex-col items-center justify-start pt-8">
        <p className="text-[24px] leading-[26px] font-medium text-[rgb(51,51,51)]">
          EXPERT ADVICE
        </p>
        <div className="mt-4 mb-10 w-[100px] border-b-2 border-b-[rgb(235,0,0)] border-solid"></div>
      </div>
      {/* advice posts */}
      <div className=" w-full flex flex-wrap items-center justify-between">
        {MOCKUP_EA_POSTS.map((item, index) => {
          return (
            <div key={index}>
              <ExpertAdviceDefaultCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpertAdvice;
