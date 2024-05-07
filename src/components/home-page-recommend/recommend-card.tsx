import rec_bg from "@/images/home/bg1.jpg";
import Image from "next/image";
import bg from "@/images/home/collections/bg.jpeg";

export default function RecommendCard() {
  return (
    <div className="w-full max-w-[1440px] h-[200px] overflow-hidden relative mb-10">
      <Image src={bg} alt="background" className="w-full blur-none -mt-20" />
      <div className="p-4 absolute font-raleWay tracking-[0.1em] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="bg-black bg-opacity-30 backdrop-blur-md px-[32px] tracking-wider py-[16px] flex flex-col items-center justify-center">
          <p className="text-center mt-4 text-white font-semibold">
            Explore our chef-curated selection of delectable dishes, guaranteed
            to tantalize your taste buds and inspire your next culinary
            adventure.
          </p>
        </div>
      </div>
    </div>
  );
}
