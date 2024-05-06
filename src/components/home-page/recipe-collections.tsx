import Image from "next/image";
import number from "@/images/home/collections/number.svg";
import author from "@/images/landing/wtc/author.svg";
import { MOCKUP_MAIN_POSTS } from "@/utils/consts/home/collection-posts";
import { MOCKUP_SIDE_POSTS } from "@/utils/consts/home/collection-posts";
import enter from "@/images/home/collections/enter.svg";
import Link from "next/link";

export default function RecipeCollections() {
  return (
    <div className="w-full shadow-sm ">
      {/* main info section */}
      <div className=" w-full mx-auto ">
        {/* main featured collection */}
        <div className="w-full flex items-center">
          {/* image */}
          <div className={`w-full max-w-[940px] h-[400px] relative z-10 `}>
            {/* food image */}
            <Image
              src={MOCKUP_MAIN_POSTS.imgUrl}
              alt="collection"
              style={{ objectFit: "cover" }}
              fill
              className="group-hover:scale-105 transition-all duration-200"
            />
            <div className="bottom-10 left-10 absolute p-10 bg-white font-raleWay tracking-[0.1em] text-xl font-semibold hover:text-primaryGolden hover:underline transition-all duration-200">
              {MOCKUP_MAIN_POSTS.title}
            </div>
          </div>
          {/* info */}
          <div className="grow max-w-[500px]  text-white bg-[url('/images/background/blackpaint.jpg')] font-raleWay tracking-wider h-[400px] p-4">
            <div className="px-2.5 py-1.5 bg-primaryGolden text-white w-fit">
              Trending Collections
            </div>
            <div className="w-full flex flex-col items-center pt-10 gap-6">
              <div className="font-alexBrush text-4xl tracking-widest">
                Holiday Delicacies{" "}
              </div>
              {/* description */}
              <p className=" text-center  text-base">
                {MOCKUP_MAIN_POSTS.description}
              </p>
              <div className="w-1/3 h-[1px] bg-primaryGolden"></div>
              {/* additional info */}
              <div className="w-full flex items-center justify-center gap-10">
                {/* number */}
                <div className="flex items-center justify-center gap-3">
                  <Image src={number} alt="number" width={24} height={24} />
                  <p>54 Recipes</p>
                </div>
                {/* author */}
                <div className=" flex items-center gap-3">
                  <Image src={author} alt="author" width={24} height={24} />
                  <p className="font-medium md:text-base text-xs transition-all duration-300 mt-2">
                    COLLECTIONS | By <br />
                    <span className="italic font-medium text-primaryGolden">
                      {MOCKUP_MAIN_POSTS.author}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* side collections */}
        <div className="w-full flex items-center gap-4 mt-6">
          {MOCKUP_SIDE_POSTS.map((collection, index) => {
            return (
              <article key={index} className="grow group">
                <div className={`w-full relative z-10 aspect-w-7 aspect-h-4`}>
                  <div className="group-hover:scale-105 transition-all duration-200">
                    <Image
                      src={collection.imgUrl}
                      alt={collection.title}
                      style={{ objectFit: "cover" }}
                      className=""
                      fill
                    />
                    <div className="relative w-full h-full z-20 bg-black bg-opacity-65 text-white font-raleWay hidden group-hover:flex flex-col p-6  gap-6">
                      <h3 className="font-semibold text-xl">
                        {collection.title}
                      </h3>
                      <div className="w-1/3 h-[1px] bg-primaryGolden"></div>

                      {/* additional info */}
                      <div className="w-full flex flex-col items-start justify-start gap-3">
                        {/* number */}
                        <div className="flex items-center justify-center gap-3">
                          <Image
                            src={number}
                            alt="number"
                            width={20}
                            height={20}
                          />
                          <p>{collection.recipesCount} recipes</p>
                        </div>
                        {/* author */}
                        <div className=" flex items-center gap-3">
                          <Image
                            src={author}
                            alt="author"
                            width={20}
                            height={20}
                          />
                          <p className="font-medium md:text-base text-xs transition-all duration-300 mt-2">
                            COLLECTIONS | By
                            <span className="italic font-medium text-primaryGolden ml-3">
                              {MOCKUP_MAIN_POSTS.author}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {/* nav */}
        <div className="w-full flex items-center justify-end my-6 gap-4 font-raleWay text-primaryGolden">
          <div className="grow h-[1px] bg-primaryGolden"></div>
          <Link
            href="/recipes"
            className="flex px-6 py-4 gap-3 hover:scale-105 transition-all duration-200 border-primaryGolden border bg-[url('/images/background/pattern.jpg')]"
          >
            Explore more collections
            <Image src={enter} alt="enter" width={24} height={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
