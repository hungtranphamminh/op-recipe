import RecipeMenuPostCard, {
  MainFeaturedPostCard,
  SidePostCard,
} from "../recipe-card/recipe-menu-card";

const MOCKUP_RM_POSTS = [
  {
    postName:
      "Bakeries Sell Millions of These Cookies. How Many Are Actually Homemade?",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709634380/Italian-Butter-Cookies_HERO_lzntfz.webp",
  },
  {
    postName: "This Senegalese Peanut Sauce Can Turn Any Vegetable Into Dinner",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709634383/Mafe-Sauce_HERO_tgiyt5.webp",
  },
];

const MOCKUP_MAIN_POSTS = {
  postName: "Quick Pork Ramen",
  description:
    "You'll add the bok choy to the noodles during the last minute of cooking, and punch up a quick broth with ground pork, miso, and soaked dried mushrooms.",
  rating: 5.0,
  imgUrl:
    "https://res.cloudinary.com/dyeiygws0/image/upload/v1709634382/Rosemary-and-Garlic-Roasted-Potatoes-05092018_gstvvl.webp",
};

const MOCKUP_SIDE_POSTS = [
  {
    postName: "Homemade Ginger Beer",
    rating: 4.05,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709634378/Ginger-Beer_RECIPE_s8bki3.webp",
  },
  {
    postName: "Homemade Ginger Ale",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709634378/Ginger-Ale_RECIPE_xpphpi.webp",
  },
  {
    postName: "German Buttercream (Crème Mousseline)",
    rating: 4.5,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709634377/German-Buttercream_RECIPE_oon8dm.webp",
  },
  {
    postName: "Italian Butter Cookies",
    rating: 3.8,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709634381/Italian-Butter-Cookies_RECIPE_ikgcdq.webp",
  },
  {
    postName: "French Buttercream",
    rating: 4.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709634377/French-Buttercream_RECIPE_xhscws.webp",
  },
];

const WhatToCook = () => {
  return (
    <div className="max-w-[1600px] mb-14 pt-[100px]">
      <div className="bg-[#f5f1e7] px-16 w-full h-full">
        {/* title */}
        <div className="py-8 w-full text-center items-center justify-center">
          <div className="text-[24px] leading-[26px] font-medium text-[rgb(51,51,51)] pb-4 border-b-2 border-b-black">
            WHAT TO COOK TODAY
          </div>
        </div>
        {/* recipes */}
        <div className="w-full flex justify-between items-start">
          {/* recipes and menu */}
          <div className=" flex flex-col items-center justify-start pr-4">
            {MOCKUP_RM_POSTS.map((item, index) => {
              return (
                <div key={index}>
                  <RecipeMenuPostCard {...item} />
                </div>
              );
            })}
          </div>
          {/* main recipe */}
          <MainFeaturedPostCard {...MOCKUP_MAIN_POSTS} />
          {/* latest recipe */}
          <div className="pl-4">
            <h2 className="font-bold text-[(rgb(51,51,51)] text-[16px] leading-[27px] pb-2">
              Lastest Recipes
            </h2>
            {MOCKUP_SIDE_POSTS.map((item, index) => {
              return (
                <div key={index}>
                  <SidePostCard {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToCook;
