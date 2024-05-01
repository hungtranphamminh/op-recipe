"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserInfo } from "@/utils/store/user-store";
import { useEffect, useState } from "react";
import nullavatar from "@/images/profile/avatar.svg";
import Image from "next/image";
import { ClearAccountSession, GetAccountSession } from "@/utils/lib/session";

const MOCKUP_USER = {
  userId: "1",
  avatar: "",
  username: "Gucci Bi",
};

export default function MainHeader() {
  const {
    userId,
    avatar,
    username,
    updateUsername,
    updateAvatar,
    updateUserId,
  } = useUserInfo();

  const [scroll, setScroll] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false);

  const currentPath = usePathname();

  const getTextStyle = (pathName: string) => {
    if (currentPath.startsWith(pathName)) {
      return "font-medium py-6 px-6";
    } else
      return " text-[#888] py-6 px-6 hover:text-white transition-all duration-300";
  };

  const getBorderStyle = (pathName: string) => {
    if (currentPath.startsWith(pathName)) {
      return "w-10 h-[2px] mt-2 bg-amber-400 bg-opacity-100 ";
    } else
      return "w-10 h-[2px] mt-2 bg-amber-400 bg-opacity-0 group-hover:bg-opacity-100 transition-all duration-300";
  };

  /* fetch user info with user id */
  const fetchUserInfo = async (userId: string) => {
    /* TODO: attach api */
    updateUsername(MOCKUP_USER.username);
    updateAvatar(MOCKUP_USER.avatar);
  };

  const logOut = () => {
    ClearAccountSession();
    updateUsername("");
    updateAvatar("");
    updateUserId("");
  };

  useEffect(() => {
    if (userId) fetchUserInfo(userId);
  }, [userId, avatar]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scroll]);

  useEffect(() => {
    const token = GetAccountSession();
    if (token && userId === "") {
      fetchUserInfo(MOCKUP_USER.userId);
    }
  }, []);

  return (
    <section className="w-full sticky text-white top-0 left-0 z-[9999] ">
      <div className="relative w-full ">
        <div
          className={` font-raleWay w-full flex items-center justify-between 
          px-10 relative z-30 backdrop-blur-[2px]
          ${!scroll ? "bg-black" : "bg-black bg-opacity-85 shadow-lg"}
          `}
        >
          {/* logo n name */}
          <Link href="/welcome" className="flex items-center">
            {/* name */}
            <div className="text-white flex items-center text-4xl gap-2 font-medium">
              Nom
              <p className="-ml-2 text-primaryGolden">Nom</p>
            </div>
          </Link>
          {/* nav section */}
          <div className="flex items-center justify-center gap-4 font-medium px-4">
            {/* Home */}
            <Link
              href="/home"
              className={
                "flex flex-col items-center justify-center group" +
                getTextStyle("/home")
              }
            >
              Home
              <div
                className={"w-10 h-[1px] mt-2" + getBorderStyle("/home")}
              ></div>
            </Link>
            {/* contributor */}
            <Link
              href=""
              className={
                "flex flex-col items-center justify-center group" +
                getTextStyle("/contributor")
              }
            >
              Contributor
              <div className={getBorderStyle("/contributor")}></div>
            </Link>
            {/* recipes */}
            <Link
              href="/recipes"
              className={
                "flex flex-col items-center justify-center group" +
                getTextStyle("/recipes")
              }
            >
              Recipes
              <div className={getBorderStyle("/recipes")}></div>
            </Link>
            {/* Expert Advices */}
            <Link
              href=""
              className={
                "flex flex-col items-center justify-center group" +
                getTextStyle("/expert")
              }
            >
              Expert Advices
              <div className={getBorderStyle("/expert")}></div>
            </Link>
            {/* About Us */}
            <Link
              href="/about"
              className={
                "flex flex-col items-center justify-center group" +
                getTextStyle("/about")
              }
            >
              About Us
              <div className={getBorderStyle("/about")}></div>
            </Link>
          </div>
          {/* login/sign up section */}
          {userId === "" ? (
            <div className="flex items-center justify-end gap-4 text-base font-medium">
              <Link href="/sign-in">Sign in</Link>
              <Link href="/sign-up">Sign up</Link>
            </div>
          ) : (
            /* account */
            <div
              className="relative h-[82px] flex items-center px-6 justify-center"
              onMouseEnter={() => setHoverProfile(true)}
              onMouseLeave={() => setHoverProfile(false)}
            >
              {/* profile button */}
              <button className="flex items-center justify-end gap-4 text-base font-medium group relative z-10">
                <div>
                  Hi,{" "}
                  <span className="text-amber-200 mx-1 font-stixToText italic group-hover:underline">
                    {username}
                  </span>
                  !
                </div>
                <div className="p-2 flex items-center justify-center rounded-full border border-white">
                  <Image
                    src={avatar ? avatar : nullavatar}
                    alt="avatar"
                    width={20}
                    height={20}
                  />
                </div>
              </button>
              {/* profile nav */}
              <div
                className={`absolute top-[82px] bg-black bg-opacity-85 overflow-hidden w-full px-3  transition-all duration-300 
              ${hoverProfile ? "max-h-24 py-2" : "max-h-0"}
              h-full`}
              >
                <Link
                  href="/profile"
                  className="flex items-center justify-start group hover:text-amber-300 transition-all duration-300"
                >
                  <div className="w-0 h-[2px] bg-amber-400 mr-1 group-hover:w-3 transition-all duration-300"></div>
                  Profile
                </Link>
                <Link
                  href="/contact-us"
                  className="flex items-center justify-start group hover:text-amber-300 transition-all duration-300"
                >
                  <div className="w-0 h-[2px] bg-amber-400 mr-1 group-hover:w-3 transition-all duration-300"></div>
                  Contact Us
                </Link>
                <button
                  onClick={logOut}
                  className="flex items-center justify-start group hover:text-amber-300 transition-all duration-300"
                >
                  <div className="w-0 h-[2px] bg-amber-400 mr-1 group-hover:w-3 transition-all duration-300"></div>
                  Log Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
