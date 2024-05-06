import ExpertAdviceDefaultCard from "../recipe-card/expert-advice-card";
import { MOCKUP_EA_POSTS } from "@/utils/consts/home/expert-advice-posts";

const ExpertAdvice = () => {
  return (
    <div className="mt-10 max-w-[1440px] ">
      {/* title */}
      <div className="w-full flex flex-col items-center justify-start pt-8">
        {/* title */}
        <h1 className="text-2xl font-medium text-[rgb(51,51,51)] font-raleWay tracking-[0.32em]">
          EXPERT ADVICES
        </h1>
        <div className="w-[100px] h-[2px] bg-primaryGolden my-6"></div>
        <div className="font-alexBrush text-3xl tracking-widest text-[#888]">
          Let's Learn the Secrets from the Experts
        </div>
      </div>
      {/* advice posts */}
      <div className=" w-full flex flex-wrap justify-between mt-10 gap-6">
        {MOCKUP_EA_POSTS.map((item, index) => {
          return (
            <div key={index} className="max-w-[700px] w-full">
              <ExpertAdviceDefaultCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpertAdvice;
