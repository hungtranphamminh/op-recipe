import ExpertAdvice from "./expert-advice";
import DietaryPreferences from "./dietary-experience";
import { SingleEAPostCard } from "../recipe-card/expert-advice-card";
import SeasonalIngredients from "./seasonal-ingre";
import PersonalRecommendations from "./personal-rec";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecipeCollections from "./recipe-collections";
import RecommendedRecipes from "./recommended-recipes";
import RecommendCard from "../home-page-recommend/recommend-card";

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

const HomePage = () => {
  return (
    <div className="w-full bg-[#fafafa] flex flex-col items-center justify-start">
      {/* recommend recipes */}
      <div className="w-full flex flex-col items-center justify-center bg-white">
        <RecommendCard />
        <RecommendedRecipes />
      </div>
      {/* dietary experiences */}
      <div className="w-full bg-[url('/images/background/white_stone.jpg')]">
        <DietaryPreferences />
      </div>
      {/* recipe collections */}
      <div className="w-full flex max-w-[1440px] ">
        <RecipeCollections />
      </div>
      {/* seasonal */}
      <div className="w-full max-w-[1440px]">
        <SeasonalIngredients />
      </div>
      {/* expert advice */}
      <ExpertAdvice />
    </div>
  );
};

export default HomePage;
