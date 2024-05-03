import rec_bg from "@/images/home/bg1.jpg";
import Image from "next/image";

export default function Backgrounds() {
  return (
    <div className="w-full ">
      <Image src={rec_bg} alt="background" className="w-full" />
    </div>
  );
}
