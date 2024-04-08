import WhatToCook from "./what-to-cook";
import ExpertAdvice from "./expert-advice";
import DietaryPreferences from "./dietary-experience";
import { SingleEAPostCard } from "../recipe-card/expert-advice-card";
import RandomSection from "./random-section";
import SeasonalIngredients from "./seasonal-ingre";
import RecipeWheel from "./recipe-wheel";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MOCKUP_BB_SECTION: RandomSectionProp = {
  title: "THE 51 BEST DESSERT RECIPES FROM GOURMET",
  mainPost: {
    title: "Chocolate Mousse",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627548/gourmet/Chocolate-Mousse-recipe-19032019_ssvieg.webp",
    description: `This rich and silky chocolate mousse recipe is really just two easy
    recipes—chocolate custard and whipped cream—combined to make one
    elegant dessert.`,
  },
  sidePost: [
    {
      title: "Three Cities of Spain Cheesecake",
      rating: 5.0,
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627549/gourmet/Why-This-Is-the-Best-Cheesecake-Ever-14062018_pzmsdk.webp",
    },
    {
      title: "Flourless Chocolate Cake",
      rating: 5.0,
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627549/gourmet/FlourlessChocolateCake_RECIPE_20220125_1814_final_bovsvv.webp",
    },
    {
      title: "Mango Sticky Rice",
      rating: 4.5,
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627548/gourmet/MangoStickyRice_RECIPE_04142022_9683_final_okufn6.webp",
    },
  ],
};

const MOCKUP_WN_SECTION: RandomSectionProp = {
  title: "THE 51 BEST DESSERT RECIPES FROM GOURMET",
  mainPost: {
    title: "Chocolate Mousse",
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627548/gourmet/Chocolate-Mousse-recipe-19032019_ssvieg.webp",
    description: `This rich and silky chocolate mousse recipe is really just two easy
    recipes—chocolate custard and whipped cream—combined to make one
    elegant dessert.`,
  },
  sidePost: [
    {
      title: "Three Cities of Spain Cheesecake",
      rating: 5.0,
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627549/gourmet/Why-This-Is-the-Best-Cheesecake-Ever-14062018_pzmsdk.webp",
    },
    {
      title: "Flourless Chocolate Cake",
      rating: 5.0,
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627549/gourmet/FlourlessChocolateCake_RECIPE_20220125_1814_final_bovsvv.webp",
    },
    {
      title: "Mango Sticky Rice",
      rating: 4.5,
      imgUrl:
        "https://res.cloudinary.com/dyeiygws0/image/upload/v1709627548/gourmet/MangoStickyRice_RECIPE_04142022_9683_final_okufn6.webp",
    },
  ],
};

export const LandingPage = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-start">
      <WhatToCook />
      <ExpertAdvice />
      <DietaryPreferences />
      <SingleEAPostCard />
      <RandomSection {...MOCKUP_BB_SECTION} />
      <SeasonalIngredients />
      <RandomSection {...MOCKUP_WN_SECTION} />
      <RecipeWheel />
    </div>
  );
};
