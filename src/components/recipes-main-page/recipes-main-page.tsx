"use client";
import CollectionsSection from "../collections/collections";
import PersonalRecommendations from "../home-page/personal-rec";
import SingleRecipesSection from "./single-recipes";
import { useState } from "react";

const SECTIONS = ["Recommended", "Single Recipes", "Collections"];

export default function RecipesMainPage() {
  const [section, setSection] = useState<number>(0);
  return (
    <div className="w-full relative py-10 flex flex-col items-center">
      <div className="w-full fixed -top-20 left-0 h-[100vh] bg-[url('/images/background/recipes-bg.jpg')] bg-cover bg-no-repeat bg-center"></div>
      <div className="w-full relative z-20 h-[800px] flex flex-col items-center justify-center">
        {/* title */}
        <div className="font-raleWay text-6xl text-white tracking-widest">
          DELICACIES FOR EVERYONE
        </div>
        <div className="w-40 h-[2px] bg-orange-300 my-6"></div>
        <div className="font-alexBrush text-5xl text-[rgb(184,187,190)]">
          Recipes & Collections
        </div>
      </div>

      <div className="w-full relative flex flex-col items-center -mt-[100px] py-[100px] bg-white">
        {/* section controller */}
        <div className="w-full flex items-center justify-center">
          {SECTIONS.map((sec, index) => {
            return (
              <button
                className={`${
                  section === index
                    ? "text-primarydblue dark:text-primarydblue"
                    : "text-gray-400 dark:text-gray-400"
                } text-xl font-semibold w-[180px] group flex items-center justify-center py-1 font-raleWay border-b border-[#e1e1e1] relative uppercase
                  hover:text-primarydblue
                `}
                onClick={() => setSection(index)}
                key={index}
              >
                {sec}
                <div
                  className={`absolute -bottom-[2px] rounded-lg h-[4px] left-0
                  ${section === index ? " bg-orange-200 w-[170px]" : "w-0"}
                  group-hover:w-[170px] transition-all duration-500 group-hover:bg-orange-200
                  `}
                ></div>
              </button>
            );
          })}
        </div>
        {/* section content */}
        {section === 0 && <PersonalRecommendations />}
        {section === 1 && <SingleRecipesSection />}
        {section === 2 && <CollectionsSection />}
      </div>
    </div>
  );
}
