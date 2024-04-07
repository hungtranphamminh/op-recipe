"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const currentPath = usePathname();
  console.log("current path is: ", currentPath);

  const getStyle = (pathName: string) => {
    if (currentPath.startsWith(pathName)) {
      return " font-bold text-orange-500 border-b-[4px] rounded-2xl bg-white border-orange-500 py-2 px-6";
    } else
      return " mb-[4px] border-transparent py-2 px-6  hover:bg-white hover:bg-opacity-30 rounded-2xl";
  };

  return (
    <section className="w-full fixed top-0 left-0 z-[9999]">
      <div className="relative w-full ">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent rounded-b-2xl z-10"></div> */}
        <div className="w-full flex items-center justify-between py-6 px-10 relative z-30 bg-white bg-opacity-30 backdrop-blur-xl">
          {/* logo n name */}
          <div className="flex items-center">
            {/* logo */}
            <div></div>
            {/* name */}
            <div className="text-black flex items-center text-2xl gap-2 font-bold">
              Nom
              <p className="text-orange-500">Nom</p>
            </div>
          </div>
          {/* nav section */}
          <div className="flex items-center justify-center gap-4 font-medium px-4 py-2 border border-white border-opacity-60 rounded-3xl">
            {/* Home */}
            <Link href="/home" className={getStyle("/home")}>
              Home
            </Link>
            {/* contributor */}
            <Link href="" className={getStyle("/contributor")}>
              Contributor
            </Link>
            {/* recipes */}
            <Link href="" className={getStyle("/recipes")}>
              Recipes
            </Link>
            {/* Expert Advices */}
            <Link href="" className={getStyle("/expert")}>
              Expert Advices
            </Link>
            {/* About Us */}
            <Link href="" className={getStyle("/about")}>
              About Us
            </Link>
          </div>
          {/* login/sign up section */}
          <div className="flex items-center justify-end gap-4 text-base font-medium">
            <button className="px-3 py-2 font-bold text-orange-500">
              Login
            </button>
            <button className="text-white px-5 py-3 bg-black rounded-3xl">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
