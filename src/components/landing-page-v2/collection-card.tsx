import Image from "next/image";
export default function CollectionCard(collectionInfo: any) {
  return (
    <div className="w-[44vh] h-[100vh] relative group">
      <Image
        src={collectionInfo.imgUrl}
        alt="collection"
        width={370}
        height={825}
      />
      <div
        className="
        absolute inset-0 w-full h-full bg-black bg-opacity-70
         hidden group-hover:flex flex-col items-center justify-center
      "
      >
        {/* author? */}
        <div className="font-playball text-4xl text-[rgb(187,187,188)]">
          Gastronomy
        </div>
        <div className="mt-6 w-10 h-[2px] bg-orange-300"></div>
        <div className="mt-6 font-renner text-white text-2xl font-medium">
          {" "}
          {collectionInfo.title}
        </div>
      </div>
    </div>
  );
}
