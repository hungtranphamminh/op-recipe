import rec_bg from "@/images/home/bg1.jpg";
import Image from "next/image";
import bg from "@/images/home/collections/bg.jpeg";

export default function RecommendCard() {
  return (
    <div className="w-full relative mb-10">
      <Image src={bg} alt="background" className="w-full blur-none" />
      <div className="p-4 absolute font-raleWay tracking-[0.1em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url('/images/background/pattern.jpg')]">
        <div className="bg-white px-[9%] py-[6.5%] flex flex-col items-center justify-center">
          <h1 className="uppercase font-semibold text-2xl">
            these wonders might please you
          </h1>
          <p className="text-center mt-4 text-[#888]">
            Explore our chef-curated selection of delectable dishes, guaranteed
            to tantalize your taste buds and inspire your next culinary
            adventure.
          </p>
        </div>
      </div>
    </div>
  );
}
