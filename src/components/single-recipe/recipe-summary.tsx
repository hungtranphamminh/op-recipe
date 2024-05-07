"use client";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function SingleRecipeSummary({ recipeInfo }: any) {
  const [save, setSave] = useState(false);
  return (
    <section className="border-b border-b-[rgb(226,221,204)]">
      <div className="w-full flex items-center justify-between">
        {/* desc */}
        <div className="grow flex flex-col items-center justify-center">
          {/* gourmet tag */}
          <div className="mb-3 px-3 py-2 text-white text-xs bg-orange-600 font-renner">
            GOURMET
          </div>
          {/* name */}
          <div className="mb-4 max-w-[500px] text-center  text-3xl font-bold text-black font-srcSerif">
            {recipeInfo.name}
          </div>
          {/* create info */}
          <div className="text-sm font-medium text-black uppercase mb-1 font-renner">
            BY {recipeInfo.author}
          </div>
          <div className="text-[11px] leading-[14px] font-light mb-6 text-[rgb(117,117,117)] font-stixToText">
            {recipeInfo.createdAt}
          </div>
          {/* Saved recipe */}
          <button
            className={`mb-10 flex items-center w-[150px] 
          ${
            save
              ? "bg-orange-600"
              : "bg-[rgba(51,51,51,0.08)] hover:bg-[rgba(51,51,51,0.28)]"
          } 
          px-[20px]`}
            onClick={() => setSave(!save)}
          >
            {!save && (
              <svg
                className="ButtonIcon-YqaGo iwlhuX button-icon icon icon-bookmark"
                width="32"
                height="32"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Save Story</title>
                <path
                  className="icon-bookmark-fill"
                  fill="#000"
                  fill-rule="evenodd"
                  d="M1.929.815h7.3v1h-6.3v12.323l4.4-2.514 4.4 2.514V9.25h1v6.611l-5.4-3.085-5.4 3.085V.816Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  className="icon-bookmark-stroke"
                  fill="#000"
                  fill-rule="evenodd"
                  d="M11.744 6.911V1h1v5.911h-1Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  className="icon-bookmark-stroke"
                  fill="#000"
                  fill-rule="evenodd"
                  d="M15.2 4.456H9.289v-1h5.91v1Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
            {!save ? (
              <div className="text-xs  ml-2 font-renner py-[17px] ">
                {" "}
                SAVE RECIPE
              </div>
            ) : (
              <div className="text-sm  ml-2 tracking-widest py-[10px] text-white w-full text-center font-semibold font-raleWay">
                {" "}
                SAVED
              </div>
            )}
          </button>
          {/* rating */}
          <div className=" flex gap-1 items-center font-renner">
            {/* in number */}
            <div className="font-bold text-[rgb(80,80,80)] text-[24px] leading-[28px]">
              {recipeInfo.rating.points.toLocaleString()}
            </div>
            {/* in star */}
            <Rating
              name="read-only"
              value={recipeInfo.rating.points}
              readOnly
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "black",
                },
                "& .MuiRating-iconEmpty": {
                  color: "gray",
                },
                "& .MuiRating-icon": {
                  marginRight: "12px", // adjust as needed
                },
                "& .MuiSvgIcon-root": {
                  height: "16px",
                  width: "auto",
                },
              }}
            />
            {/* number of ratings */}
            <div className="text-[rgb(117,117,117)] font-medium text-[12px] leading-[17px]">
              {`(${recipeInfo.rating.votes})`}
            </div>
          </div>
          {/* read review */}
          <div className="uppercase text-[12px] leading-[17px] font-bold text-black mt-2 font-renner hover:underline">
            Read Reviews
          </div>
        </div>
        {/* img */}
        <div className="">
          <Image
            src={recipeInfo.imgUrl}
            className=""
            width={1000}
            height={650}
            alt="img url"
          />
        </div>
      </div>
    </section>
  );
}
