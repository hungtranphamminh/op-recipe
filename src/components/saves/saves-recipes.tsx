import Image from "next/image";
import Recipes from "./recipes";
import search from "@/images/recipes/recipes/search.svg";
import Link from "next/link";
export default function SavesRecipes() {
  return (
    <div className="md:max-w-[1440px] w-full">
      {/* search bar */}
      <div className="w-full flex items-center justify-end">
        <div className="flex items-center border border-primaryGolden">
          <input
            type="text"
            placeholder="Search for recipes, collections and posts"
            className="bg-transparent border-0 outline-none focus:outline-none p-2 text-sm placeholder:text-sm w-[300px]"
          />
          <div className="p-2 bg-primaryGolden">
            <Image src={search} alt="search icon" width={20} height={20} />
          </div>
        </div>
      </div>
      {/* navigation */}
      <div className="w-full font-semibold flex items-center justify-center font-raleWay tracking-widest gap-3 border-b">
        <Link
          href="/saves"
          className="text-primaryGolden w-[140px] text-center pb-2 border-b-2 border-primaryGolden"
        >
          Recipes
        </Link>
        <Link
          href="/saves"
          className="text-[#888] w-[140px] text-center pb-2 border-b-2 border-b-transparent"
        >
          Collections
        </Link>
        <Link
          href="/saves"
          className="text-[#888] w-[140px] text-center pb-2 border-b-2 border-b-transparent"
        >
          Expert Advices
        </Link>
      </div>
      <div className=" w-full flex items-start gap-6 relative mt-6">
        {/* recipes */}
        <div className="grow">
          {/* recipes */}
          <Recipes />
          {/* pagination */}
          {/* <div className="flex flex-col items-center mt-14">
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1
              </span>{" "}
              to{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                15
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                100
              </span>{" "}
              Recipes
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Prev
              </button>
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
