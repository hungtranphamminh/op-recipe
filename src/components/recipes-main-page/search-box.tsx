"use client";
import { useRecipeSearchParams } from "@/utils/store/search-store";
import Image from "next/image";
import close from "@/images/recipes/close.svg";
import plus from "@/images/recipes/plus.svg";

export default function SearchBox() {
  const {
    name,
    tags,
    ingredients,
    collections,
    updateName,
    updateTags,
    updateIngredients,
    updateCollections,
  } = useRecipeSearchParams();

  return (
    <div className="w-[350px] sticky top-0 left-0 ">
      {/* banner */}
      <div className=" font-bold font-playball text-white text-3xl w-full h-[150px] flex justify-center items-center my-4 bg-[url('/images/footer/bg4.jpeg')] bg-[length:800px_500px] bg-center rounded-sm">
        Recipe <span className="text-orange-400 ml-2">Compass</span>
      </div>

      {/* search box */}
      <div className="border p-4 w-full flex flex-col ">
        {/* name param */}
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border p-4 focus:outline-none"
          onChange={(e) => {
            updateName(e.target.value);
          }}
          value={name}
        />
        {/* collection param */}
        <div className="w-full mt-6">
          <div>Collections:</div>
          {/* search for collection */}
          <div className="w-full border mt-4 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className=" p-2 focus:outline-none grow rounded-l-lg"
              onChange={(e) => {
                updateName(e.target.value);
              }}
              value={name}
            />
            <div className="h-10 p-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primarydblue">
                <Image src={plus} alt="plus" width={16} height={16} />
              </button>
            </div>
          </div>
          {/* collections */}
          <div className="flex flex-wrap gap-2 mt-4">
            {collections.map((collection, index) => (
              <div
                key={index}
                className={`border px-2 py-1 rounded-3xl text-sm flex items-center gap-1 group hover:cursor-pointer`}
              >
                <p>{collection}</p>
                <button
                  onClick={() => {
                    const temp = [...collections];
                    updateCollections(
                      temp.filter((item) => item !== collection)
                    );
                  }}
                  className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-6 transition-all duration-300"
                >
                  <Image
                    src={close}
                    alt="close"
                    width={24}
                    height={24}
                    className=""
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* tag param */}
        <div className="w-full mt-6">
          <div>Tags:</div>
          {/* search for tag */}
          <div className="w-full border mt-4 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="p-2 focus:outline-none grow rounded-l-lg"
              onChange={(e) => {
                updateName(e.target.value);
              }}
              value={name}
            />
            <div className="h-10 p-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primarydblue">
                <Image src={plus} alt="plus" width={16} height={16} />
              </button>
            </div>
          </div>
          {/* tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`border px-2 py-1 rounded-3xl text-sm flex items-center gap-1 group hover:cursor-pointer`}
              >
                <p>{tag}</p>
                <button
                  onClick={() => {
                    const temp = [...tags];
                    updateTags(temp.filter((item) => item !== tag));
                  }}
                  className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-6 transition-all duration-300"
                >
                  <Image
                    src={close}
                    alt="close"
                    width={24}
                    height={24}
                    className=""
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* ingredients param */}
        <div className="w-full mt-6">
          <div>Ingredients:</div>
          {/* search for ingredients */}
          <div className="w-full border mt-4 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="p-2 focus:outline-none grow rounded-l-lg"
              onChange={(e) => {
                updateName(e.target.value);
              }}
              value={name}
            />
            <div className="h-10 p-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primarydblue">
                <Image src={plus} alt="plus" width={16} height={16} />
              </button>
            </div>
          </div>
          {/* tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {ingredients.map((collection, index) => (
              <div
                key={index}
                className={`border px-2 py-1 rounded-3xl text-sm flex items-center gap-1 group hover:cursor-pointer`}
              >
                <p>{collection}</p>
                <button
                  onClick={() => {
                    const temp = [...ingredients];
                    updateIngredients(
                      temp.filter((item) => item !== collection)
                    );
                  }}
                  className="w-0 opacity-0 group-hover:opacity-100 group-hover:w-6 transition-all duration-300"
                >
                  <Image
                    src={close}
                    alt="close"
                    width={24}
                    height={24}
                    className=""
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
