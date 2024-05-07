"use client";
import { useRecipeSearchParams } from "@/utils/store/search-store";
import { useState, useEffect, useCallback } from "react";
import { MOCKUP_RECOMMENDED_RECIPES_HOMEPAGE } from "@/utils/consts/recipe.const";
import Image from "next/image";
import { Rating } from "@mui/material";
import FirstRecipeColumn from "../home-page-recommend/first-column";
import SecondRecipeColumn from "../home-page-recommend/second-column";
import ThirdRecipeColumn from "../home-page-recommend/third-column";

export interface Recipe {
  title: string;
  imgUrl: string;
  rating: number;
  votes: number;
  author: string;
  description: string;
}

export default function RecommendedRecipes() {
  const { name, tags, ingredients, collections } = useRecipeSearchParams();
  const [recipes, setRecipes] = useState<Recipe[]>();

  useEffect(() => {
    fetchRecipeWithParams();
  }, []);

  const fetchRecipeWithParams = useCallback(async () => {
    /* TODO: fetch recipe here */
    setRecipes(MOCKUP_RECOMMENDED_RECIPES_HOMEPAGE);
  }, [name, tags, ingredients, collections]);

  return (
    <div className="w-full flex bg-white flex-wrap items-start justify-center gap-[30px] 2xl:max-w-[1440px] pb-10 shadow-md mb-10">
      {/* columns 1 */}
      {recipes && <FirstRecipeColumn recipes={[recipes[0], recipes[3]]} />}
      {/* columns 2 */}
      {recipes && <SecondRecipeColumn recipes={[recipes[1], recipes[4]]} />}
      {/* columns 3 */}
      {recipes && <ThirdRecipeColumn recipes={[recipes[2], recipes[5]]} />}
    </div>
  );
}
