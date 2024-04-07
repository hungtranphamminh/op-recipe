"use client";
import React, { useState } from "react";
import arrow from "@/images/single-rec/arrow.svg";
import Image from "next/image";

const NutritionInfoBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute right-0 top-0">
      <div className=" bg-white rounded-xl shadow-md flex items-center relative">
        {/* nutrition */}
        <div
          className={`transition-all font-renner duration-300 overflow-hidden   ${
            !isOpen ? "max-h-[110px]" : "max-h-52"
          }`}
        >
          {/* title */}
          <div className="flex items-center gap-3 bg-primarydblue p-3 rounded-t-xl">
            <div className="text-lg font-renner font-medium text-white">
              Nutritional Information
            </div>
            <div className="text-orange-400  px-2 py-1 ">per serving</div>
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
              <Image
                src={arrow}
                alt="Arrow"
                width={18}
                height={18}
                className={`transform transition-transform duration-100 ${
                  isOpen ? "rotate-[-180deg]" : ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
          {/* content */}
          <div className="w-full px-4">
            <div className="flex w-full items-center justify-between mt-2">
              <p className="text-gray-500">Calories: </p>
              <p>100</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-gray-500">Protein: </p>
              <p>10g</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-gray-500">Fat: </p>
              <p>5g</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-gray-500">Fiber: </p>
              <p>3g</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-gray-500">Sugars: </p>
              <p>2g</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-gray-500">Carbohydrate: </p>
              <p>20g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionInfoBox;
