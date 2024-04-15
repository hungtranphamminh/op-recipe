import Image from "next/image";
import nullavatar from "@/images/profile/nullava.svg";
export default function NullAvatar() {
  return (
    <div className="size-14 flex items-center justify-center rounded-full bg-slate-100 opacity-65">
      <Image src={nullavatar} alt="null ava" width={36} height={36} />
    </div>
  );
}
