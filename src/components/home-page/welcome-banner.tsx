import rec_bg from "@/images/home/bg1.jpg";
import Image from "next/image";
import bg from "@/images/home/collections/bg.jpeg";
import bg2 from "@/images/home/bg2.jpg";

export default function WelcomeBanner() {
  return (
    <div className="w-full overflow-hidden relative mb-10">
      <Image src={bg2} alt="background" className="w-full blur-none -mt-20" />
      <div
        style={{
          backgroundImage:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABRJREFUGFdjZGBg+M/AwMDIyAAFAA4pAQP4L554AAAAAElFTkSuQmCC)",
        }}
        className="w-full h-screen bg-repeat absolute z-20 top-0 left-0"
      ></div>
      <div className="p-4 absolute font-raleWay tracking-[0.1em] top-1/2 -translate-y-1/2 w-full z-30">
        <div className=" text-white flex flex-col items-center justify-center mx-auto">
          <h2 className="font-semibold text-3xl">
            <span className="font-bold">Nom</span>
            <span className="text-primaryGolden mr-2 font-bold">Nom</span>
            Offers You
          </h2>
          <h1 className="text-6xl font-kaushan tracking-widest mt-10">
            A Wonderful Culinary Journey!
          </h1>
          <p className="max-w-[550px] text-base text-center mt-10 font-semibold">
            NomNom is a culinary haven, where delectable recipes, curated
            collections, and expert advicess await.
          </p>
        </div>
      </div>
    </div>
  );
}
