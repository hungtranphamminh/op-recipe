import Image from "next/image";
import appetize from "@/images/recipes/collections/appetize.jpg";
import desserts from "@/images/recipes/collections/desserts.jpg";
import sushi from "@/images/recipes/collections/sushi.jpg";
import chocolate from "@/images/recipes/collections/chocolate.jpg";
import author from "@/images/landing/wtc/author.svg";

const MOCKUP_POPULAR_COLLECTIONS = [
  {
    title: "Wonderful Starts",
    imgUrl: appetize.src,
    author: "Anakin Skywalker",
    description: `Dive into our appetizer collection, featuring an array of tantalizing bites perfect for any occasion. From elegant canapés to crispy finger foods, these recipes are sure to impress and satisfy. Elevate your entertaining with these delicious starters that are guaranteed to leave a lasting impression`,
  },
  {
    title: "A Sweet Dance of Pistachios",
    imgUrl: desserts.src,
    author: "Anakin Skywalker",
    description: `Satisfy your sweet tooth with our pistachio dessert collection. From creamy ice cream to decadent cakes, each treat offers a delightful nutty twist. Elevate your dessert game with these irresistible pistachio creations.`,
  },
  {
    title: "Freshes of The Sea",
    imgUrl: sushi.src,
    author: "Anakin Skywalker",
    description: `Discover our sushi selection, a harmony of taste and texture. With traditional favorites and innovative creations, each bite offers a delightful culinary adventure.`,
  },
  {
    title: "Comfortably Bitterness for Your Tea Break",
    imgUrl: chocolate.src,
    author: "Anakin Skywalker",
    description: ` From rich chocolate cakes to delicate truffles and comforting hot cocoa blends, these recipes promise to elevate your tea break to a whole new level of luxury. Perfect for solo indulgence or sharing with loved ones, our collection invites you to savor the sweetness of life, one chocolatey treat at a time.`,
  },
];

export default function PopularCollections() {
  return (
    <div className="w-full mt-14 flex items-start">
      {/* title */}
      <div className="flex flex-col items-center justify-center p-4">
        <div className="font-raleWay tracking-widest font-medium text-4xl leading-[36px] text-primarydblue">
          {" "}
          POPULAR{" "}
        </div>
        <div className="w-20 h-[3px] rounded-md my-6 bg-orange-200"></div>
        <div className="font-alexBrush text-4xl font-light text-[rgba(0,0,0,0.6)]">
          Enjoy Together
        </div>
      </div>
      {/* content */}
      <div className="grow flex flex-wrap items-center gap-3">
        {MOCKUP_POPULAR_COLLECTIONS.map((item, index) => {
          return (
            <div
              className=" w-[600px] relative rounded-md group hover:scale-[102%] transition-all duration-300"
              key={index}
            >
              <Image
                src={item.imgUrl}
                alt="collection"
                width={600}
                height={700}
                className="rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-80% via-transparent to-transparent rounded-b-2xl"></div>
              {/* related recipe info */}
              <div className="font-renner absolute z-10 bottom-3 px-2 w-full">
                <div className="text-xl font-medium text-white mb-2">
                  {/* title */}
                  <p className="font-medium text-2xl group-hover:text-3xl group-hover:underline transition-all duration-300">
                    {item.title}
                  </p>
                  {/* author */}
                  <div className=" flex items-center gap-3 text-white">
                    <Image src={author} alt="author" width={24} height={24} />
                    <p className="font-medium md:text-base text-xs mt-2">
                      COLLECTION | Collections by
                      <span className=" ml-3 font-playball text-xl font-medium text-orange-200">
                        {item.author}
                      </span>
                    </p>
                  </div>
                  <p className="text-xs mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
