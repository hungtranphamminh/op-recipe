"use client";
import CollectionsSection from "../collections/collections";
import PersonalRecommendations from "./personal-rec";
import SingleRecipesSection from "./single-recipes";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SECTIONS = ["Recommended", "Single Recipes", "Collections"];

export default function SectionController() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [section, setSection] = useState<number>(0);

  const search = searchParams.get("s");

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  };

  useEffect(() => {
    if (search === "1") setSection(1);
    else if (search === "2") setSection(2);
    else setSection(0);
  }, [search]);

  return (
    <div className="w-full relative flex flex-col items-center -mt-[100px] py-[100px] bg-white">
      {/* section controller */}
      <div className="w-full flex items-center justify-center">
        {SECTIONS.map((sec, index) => {
          return (
            <button
              className={`${
                section === index ? "text-primaryGolden " : "text-gray-400 "
              } text-xl font-semibold w-[180px] group flex tracking-wide items-center justify-center py-1 font-raleWay border-b border-[#e1e1e1] relative uppercase
                  hover:text-primaryGolden
                `}
              onClick={() => {
                router.push(
                  pathname + "?" + createQueryString("s", index.toString()),
                  { scroll: false }
                );
              }}
              key={index}
            >
              {sec}
              <div
                className={`absolute -bottom-[2px] rounded-lg h-[4px] left-0
                  ${section === index ? " bg-primaryGolden w-[170px]" : "w-0"}
                  group-hover:w-[170px] transition-all duration-500 group-hover:bg-primaryGolden
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
  );
}
