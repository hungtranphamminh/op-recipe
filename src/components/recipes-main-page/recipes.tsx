"use client";
import { useRecipeSearchParams } from "@/utils/store/search-store";
import { useState, useEffect, useCallback } from "react";
import {
  MOCKUP_BEEF_RECIPES,
  MOCKUP_RECIPES,
} from "@/utils/consts/recipe.const";
import Image from "next/image";
import authorblack from "@/images/landing/wtc/author-black.svg";
import { Rating } from "@mui/material";
import Link from "next/link";

interface Recipe {
  title: string;
  imgUrl: string;
  rating: number;
  votes: number;
  author: string;
  description: string;
}

export default function Recipes() {
  const { name, tags, ingredients, collections, hasSearch } =
    useRecipeSearchParams();
  const [recipes, setRecipes] = useState<Recipe[]>();

  useEffect(() => {
    fetchRecipeWithParams();
  }, []);

  const fetchRecipeWithParams = useCallback(async () => {
    /* TODO: fetch recipe here */
    setRecipes(MOCKUP_RECIPES);
    if (hasSearch) setRecipes(MOCKUP_BEEF_RECIPES);
  }, [name, tags, ingredients, collections, hasSearch]);

  useEffect(() => {
    if (hasSearch) setRecipes(MOCKUP_BEEF_RECIPES);
    else setRecipes(MOCKUP_RECIPES);
  }, [hasSearch]);

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-4">
      {recipes?.map((recipe, index) => (
        <Link
          href="/recipes/single-recipe?id=123E4f1"
          key={index}
          className="w-[350px] flex hover:cursor-pointer flex-col transition-all duration-300 items-center justify-center relative mt-5 shadow-xl"
        >
          {/* main image */}
          <div className="w-[340px] relative z-10">
            <Image
              src={recipe.imgUrl}
              alt={recipe.title}
              width={400}
              height={400}
              className="w-full h-[350px] object-cover "
            />
          </div>
          {/* recipe info */}
          <div
            className="max-h-[120px] flex flex-col justify-center hover:justify-start
           h-full hover:max-h-[200px] absolute z-20 left-1/2 -translate-x-1/2 -bottom-5 
           w-[300px] bg-white border rounded-sm shadow-md p-4 group transition-all duration-300"
          >
            {/* title */}
            <h1
              className="text-lg font-stixToText font-bold text-primarydblue group-hover:text-primaryGolden group-hover:text-2xl w-fit
                   after:content-[''] after:block after:w-0 after:h-1 after:bg-primaryGolden after:transition-all after:duration-300 after:group-hover:w-full after:group-hover:h-1 after:group-hover:mt-[2px] after:group-hover:ml-1 after:group-hover:rounded-full after:group-hover:opacity-100"
            >
              {recipe.title}
            </h1>
            {/* author */}
            <div className=" flex items-center gap-1  text-xs -mt-1">
              <Image src={authorblack} alt="author" width={13} height={13} />
              <p className="font-medium text-xs transition-all duration-300 mt-2">
                RECIPE | Courtesy of{" "}
                <span className="italic font-medium text-primaryGolden transition-all duration-300">
                  <span className="font-semibold">{recipe.author}</span>
                </span>
              </p>
            </div>
            {/* rating */}
            <div className="flex justify-start items-center gap-1 mt-1 ">
              <p className="text-xs">{recipe.rating.toLocaleString()}</p>
              <Rating
                name="read-only"
                value={recipe.rating}
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#1A2433",
                  },
                  "& .MuiRating-iconEmpty": {
                    color: "gray",
                  },
                  "& .MuiRating-icon": {
                    marginRight: "6px", // adjust as needed
                  },
                  "& .MuiSvgIcon-root": {
                    height: "10px",
                    width: "auto",
                  },
                }}
              />
              {/* votes */}
              <div className="font-[300] text-xs">
                {"(" + recipe.votes} votes{")"}
              </div>
            </div>
            {/* description */}
            <div className="px-2 italic font-light mt-2 text-primarydblue text-xs h-[80px] hidden group-hover:block overflow-y-hidden text-ellipsis">
              {'"' + recipe.description + '"'}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
