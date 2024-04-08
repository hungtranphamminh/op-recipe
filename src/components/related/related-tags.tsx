import Image from "next/image";
import arrow from "@/images/related/arrowright.svg";
import arrowdown from "@/images/single-rec/arrow.svg";
import Link from "next/link";

export default function RelatedTagsRecs({ tags }: { tags: string[] }) {
  return (
    <div className="border-[0.5px] border-slate-300 rounded-md">
      {/* Title */}
      <label>
        <div className="w-full flex items-center p-4 bg-primarydblue">
          <div className="w-full text-center font-renner font-medium text-lg  text-white">
            Explore Recipes By
            <span className=" text-orange-400 italic ml-1">Tags</span>
          </div>
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
            <Image
              src={arrowdown}
              alt="Arrow"
              width={18}
              height={18}
              className={`transform transition-transform duration-100
                peer-checked/showTags:rotate-[-180deg]"
              }`}
            />
          </div>
        </div>
        {/* posts */}
        <input className="peer/showTags absolute scale-0" type="checkbox" />

        <div className=" flex flex-col max-h-40 w-full pb-3 overflow-hidden transition-all duration-300 peer-checked/showTags:max-h-72 peer-checked/showTags:overflow-auto">
          {tags.map((item, index) => {
            return (
              <div
                className="py-1 px-4 flex items-center w-full gap-2 group"
                key={index}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="transform translate-x-[-100%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Image src={arrow} alt="arrow" width={16} height={16} />
                  </div>
                </div>
                <Link
                  href=""
                  className="text-base group-hover:text-orange-400 group-hover:font-medium group-hover:underline"
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
      </label>
    </div>
  );
}
