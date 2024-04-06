import ExpertAdviceDefaultCard from "../recipe-card/expertAdviceCard";

const MOCKUP_EA_POSTS = [
  {
    postName: "Pickled Red Onions Are the Quick Trick That Brighten Any Meal",
    description:
      "Add a pop of color and acidic punch to tacos, salads, sandwiches, and more.",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709633680/Pickled-Red-Onions_HERO_ch0b6d.webp",
  },
  {
    postName: "How to Make a Dish Less Spicy",
    description: "Tame the flame in that fiery curry like a pro.",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709633680/Peppers_HERO_gccuhy.webp",
  },
  {
    postName: "What’s the Difference Between Lox and Smoked Salmon?",
    description:
      "Here's how to tell them apart—and what to know about gravlax and kippered salmon too.",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709633681/What-is-Lox_HERO_bcsmo1.webp",
  },
  {
    postName: "Does Vinegar Last Forever?",
    description: "And does it matter where you store it?",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709633680/Shelf-Life-of-Vinegar_HERO_r6a00u.webp",
  },
];

const ExpertAdvice = () => {
  return (
    <div className="mt-14 max-w-[1600px] px-16">
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
