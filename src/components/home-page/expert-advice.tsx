import ExpertAdviceDefaultCard from "../recipe-card/expert-advice-card";
import { MOCKUP_EA_POSTS } from "@/utils/consts/home/expert-advice-posts";
import more from "@/images/home/expert/more.jpg";
import Image from "next/image";

const ExpertAdvice = () => {
  return (
    <div className="mt-10 max-w-[1440px] ">
      {/* title */}
      <div className="w-full flex flex-col items-center justify-start pt-8">
        <h1 className="text-2xl font-medium text-[rgb(51,51,51)] font-raleWay tracking-[0.32em]">
          EXPERT ADVICES
        </h1>
        <div className="w-[100px] h-[2px] bg-primaryGolden my-6"></div>
        <div className="font-alexBrush text-3xl tracking-widest text-[#888]">
          Learn the Secrets from the Experts
        </div>
      </div>
      {/* more */}
      <div className="p-4 w-full relative mx-auto my-6 h-[300px] bg-[url('/images/home/expert/more.jpg')]">
        <div className="py-2 px-4 bg-primaryGolden text-white w-fit font-raleWay text-lg">
          Top Post
        </div>
        {/* post info */}
        <div className="absolute bottom-12 left-12 text-white text-2xl font-raleWay tracking-wider font-bold shadow-md px-4 py-2 bg-black bg-opacity-40 backdrop-blur-sm w-fit group">
          <h2 className="group-hover:text-primaryGolden group-hover:underline transition-all duration-200">
            Eliminate the Fishy Odor with These Herbs
          </h2>
          <p className="text-base font-medium w-[700px] mt-6">
            This versatile herb not only enhances the flavor of seafood dishes
            but also helps neutralize any lingering fishy odors. Whether chopped
            fresh or infused into oils, basil adds a delightful freshness that
            complements a variety of seafood options.
          </p>
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
