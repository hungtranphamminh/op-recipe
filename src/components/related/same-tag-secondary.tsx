import Image from "next/image";
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

export default function SameTagsSecondaryRelated(
  sectionInfo: RelatedSectionInfo
) {
  return (
    <div className="border-[0.5px] border-slate-300 rounded-md mb-6">
      {/* Title */}
      <div className="p-4 w-full text-center font-renner font-medium text-lg bg-primarydblue text-white rounded-t-md">
        Others{" "}
        <span className=" text-orange-400 italic">{sectionInfo.title}</span>
      </div>
      {/* posts */}
      <div className=" flex flex-col w-full pb-3">
        {sectionInfo.recipes.map((item, index) => {
          return (
            <div className="w-full px-3 pt-3" key={index}>
              <div className="relative rounded-md group hover:cursor-pointer flex items-center">
                <Image
                  src={item.imgUrl}
                  alt="rec img"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                {/* related recipe info */}
                <div className="font-renner px-2 text-primarydblue w-full group-hover:text-orange-400  transition-all duration-300">
                  <div className="text-lg font-medium flex flex-col mb-2">
                    {/* title */}
                    <p className="font-medium hover:underline">{item.title}</p>
                    {/* additional info */}
                    <div className="flex items-center text-xs my-1">
                      {/* author */}
                      <p className="font-medium text-xs">{item.author}</p>
                      <div className="ml-2">|</div>
                      {/* votes */}
                      <div className="border-r border-white px-1">
                        {item.votes} votes
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