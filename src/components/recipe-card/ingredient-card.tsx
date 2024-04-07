import Image from "next/image";

interface IngredientProp {
  ingredient: string;
  description?: string;
  rating?: number;
  imgUrl: string;
}

export const SeasonalIngredientCard = ({
  ingredient,
  imgUrl,
}: IngredientProp) => {
  return (
    <div className="w-[150px] h-[200px] rounded-2xl relative hover:cursor-pointer">
      {/* ingredient img */}
      <div className="w-full h-full rounded-2xl ">
        <Image
          src={imgUrl}
          alt="ingredient img"
          width={150}
          height={200}
          className="rounded-2xl"
        />
      </div>
      {/* ingredient name */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-70% via-transparent to-transparent rounded-b-2xl"></div>
      <div className="absolute z-10 bottom-1 px-2 w-full ">
        <div className="py-2 text-[12px] leading-[12px] font-medium text-white pb-2 mb-2 hover:border-b-white border-b-4 border-b-transparent">
          {ingredient}
        </div>
      </div>
    </div>
  );
};
