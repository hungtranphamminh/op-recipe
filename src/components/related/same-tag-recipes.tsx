import Image from "next/image";
import whitestar from "@/images/related/whitestar.svg";
import saveno from "@/images/related/saveno.svg";
import saveyes from "@/images/related/saveyes.svg";
interface RelatedRecipeInfo {
  title: string;
  time: string;
  rating: number;
  votes: number;
  isSaved: boolean;
  author: string;
  imgUrl: string;
}

interface RelatedSectionInfo {
  title: string;
  recipes: RelatedRecipeInfo[];
}

export default function SameTagsRelated(sectionInfo: RelatedSectionInfo) {
  return (
    <div className="border-[0.5px] border-slate-300 rounded-md">
      {/* Title */}
      <div className="p-4 w-full text-center font-renner font-medium text-lg bg-[url('/images/footer/bg2.jpeg')] bg-[length:1000px] bg-right-bottom text-white rounded-t-md">
        <span className="text-shadow-white">Others </span>
        <span className=" text-orange-400 italic">{sectionInfo.title}</span>
      </div>
      {/* posts */}
      <div className=" flex flex-col w-full pb-3">
        {sectionInfo.recipes.map((item, index) => {
          return (
            <div className="w-full px-3 pt-3" key={index}>
              <div className="relative rounded-md group hover:cursor-pointer">
                <Image
                  src={item.imgUrl}
                  alt="rec img"
                  width={332}
                  height={432}
                  className="rounded-md"
                />
                {/* adding 20px to the height to ensure the aesthetic : D */}
                <div className="h-5 w-full"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-80% via-transparent to-transparent rounded-b-2xl"></div>
                {/* save icon */}
                <div className="absolute z-10 top-2 right-2 ">
                  <Image
                    src={`${item.isSaved ? saveyes.src : saveno.src}`}
                    alt="saved or not"
                    width={30}
                    height={30}
                    className="shadow-lg"
                  />
                </div>
                {/* related recipe info */}
                <div className="font-renner absolute z-10 bottom-3 px-2 w-full">
                  <div className="text-lg font-medium text-white mb-2">
                    {/* title */}
                    <p className="font-medium group-hover:text-xl hover:underline transition-all duration-300">
                      {item.title}
                    </p>
                    {/* author */}
                    <p className="font-medium text-xs group-hover:text-sm transition-all duration-300 mt-2">
                      RECIPE | Courtesy of {item.author}
                    </p>
                    {/* additional info */}
                    <div className="flex items-center text-xs my-1 group-hover:text-sm transition-all duration-300">
                      {/* cook */}
                      <div className="border-r border-white pr-1">
                        {item.time} cook
                      </div>
                      {/* votes */}
                      <div className="border-r border-white px-1">
                        {item.votes} votes
                      </div>
                      {/* votes */}
                      <div className=" px-1 flex text-center items-center gap-1">
                        <Image
                          src={whitestar}
                          alt="star"
                          width={16}
                          height={16}
                        />
                        <p>{item.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
