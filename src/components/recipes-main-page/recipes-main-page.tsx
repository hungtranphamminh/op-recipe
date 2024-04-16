"use client";
import SingleRecipesSection from "./single-recipes";
import { useState } from "react";

const SECTIONS = ["Single Recipes", "Collections", "Ingredients"];

export default function RecipesMainPage() {
  const [section, setSection] = useState<number>(0);
  return (
    <div className="w-full relative py-10 flex flex-col items-center">
      <div className="w-full relative flex flex-col items-center mt-[200px]">
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
                  group-hover:w-[170px] transition-all duration-300 group-hover:bg-orange-200
                  `}
                ></div>
              </button>
            );
          })}
        </div>
        {/* section content */}
        {section === 0 && <SingleRecipesSection />}
      </div>
    </div>
  );
}
