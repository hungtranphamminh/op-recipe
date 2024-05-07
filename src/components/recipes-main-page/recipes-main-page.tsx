"use client";
import { Suspense } from "react";
import SectionController from "./section-controll";
export default function RecipesMainPage() {
  return (
    <div className="w-full relative py-10 flex flex-col items-center">
      <div className="w-full fixed -top-20 left-0 h-[100vh] bg-[url('/images/background/recipes-bg.jpg')] bg-cover bg-no-repeat bg-center"></div>
      <div className="w-full relative z-20 h-[600px] flex flex-col items-center justify-center">
        {/* title */}
        <div className="font-raleWay text-6xl text-white tracking-widest">
          DELICACIES FOR EVERYONE
        </div>
        <div className="w-40 h-[2px] bg-primaryGolden my-6"></div>
        <div className="font-alexBrush text-5xl text-[rgb(184,187,190)]">
          Recipes & Collections
        </div>
        SectionController
      </div>
      <Suspense>
        <SectionController />
      </Suspense>
    </div>
  );
}
