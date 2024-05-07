import ExpertAdvice from "./expert-advice";
import DietaryPreferences from "./dietary-experience";
import SeasonalIngredients from "./seasonal-ingre";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecipeCollections from "./recipe-collections";
import RecommendedRecipes from "./recommended-recipes";
import RecommendCard from "../home-page-recommend/recommend-card";
import WelcomeBanner from "./welcome-banner";
import deco from "@/images/home/deco1.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="w-full bg-[#fafafa] flex flex-col items-center justify-start">
      {/* welcome banner */}
      <div className="w-full">
        <WelcomeBanner />
        {/* welcome */}
        <div className="w-full flex flex-col items-center gap-4">
          <p className="font-playball text-3xl text-primaryGolden tracking-widest">
            Hello dear
          </p>
          <p className="font-kaushan text-5xl">
            Welcome to
            <span className="ml-3">Nom</span>
            <span className="text-primaryGolden">Nom</span>
          </p>
          <Image src={deco} alt="deco" width={54} height={14} />
          <p className="max-w-[800px] text-center mb-10 text-[#9b9b9b] text-base">
            Welcome to NomNom, your go-to destination for culinary delights!
            Explore our curated recipes, collections, and expert advice to
            elevate your cooking game. Let our talented chefs inspire you with
            mouthwatering creations and invaluable tips.
          </p>
        </div>
      </div>
      {/* recommend recipes */}
      <div className="w-full flex flex-col items-center justify-center">
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
