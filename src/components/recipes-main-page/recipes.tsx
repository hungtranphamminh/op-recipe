"use client";
import { useRecipeSearchParams } from "@/utils/store/search-store";
import { useState, useEffect, useCallback } from "react";
import { MOCKUP_RECIPES } from "@/utils/consts/recipe.const";
import Image from "next/image";

interface Recipe {
  title: string;
  imgUrl: string;
  rating: number;
  votes: number;
  author: string;
}

export default function Recipes() {
  const { name, tags, ingredients, collections } = useRecipeSearchParams();
  const [recipes, setRecipes] = useState<Recipe[]>();

  useEffect(() => {
    fetchRecipeWithParams();
  }, []);

  const fetchRecipeWithParams = useCallback(async () => {
    /* TODO: fetch recipe here */
    setRecipes(MOCKUP_RECIPES);
  }, [name, tags, ingredients, collections]);

  return (
    <div className="w-full flex flex-wrap items-center gap-4">
      {recipes?.map((recipe, index) => (
        <div
          key={index}
          className="w-[300px] flex flex-col items-center justify-center relative"
        >
          <div className="w-[300px]">
            <Image
              src={recipe.imgUrl}
              alt={recipe.title}
              width={400}
              height={400}
              className="w-full h-[400px] object-cover "
            />
          </div>
        </div>
      ))}
    </div>
  );
}
