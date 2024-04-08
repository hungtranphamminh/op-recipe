"use client";
import { Rating } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import nullavatar from "@/images/profile/nullava.svg";
import NullAvatar from "../profile/avatar";
import blackstar from "@/images/single-rec/comment/star.svg";
import like from "@/images/single-rec/comment/like.svg";
import cm from "@/images/single-rec/comment/comment.svg";
import flag from "@/images/single-rec/comment/flag.svg";

const MOCKUP_COMMENT = [
  {
    comment: [],
    author: "tomclsr",
    rating: 5,
    time: "4 days ago",
    likes: 1,
    content: `Wow!! Have not made Beef Bourguignon in years. I lost my original French recipe and none of the replacement recipes looked
  right.
  The only thing I changed is the pearl onions. I have no problem getting fresh ones here year round, so I used those at the beginning instead of adding frozen at the end. I have read some of the other reviews that say the dish is not cooked enough when you follow Inas instructions. Remember that this is a French style recipe, not your G'mas pot that has no texture.`,
  },
  {
    comment: [],
    author: "bill",
    rating: 5,
    time: "6 days ago",
    likes: 0,
    content: `A big hit at our dinner party. Took about 6 hours of low, slow cooking. thank you, Ina`,
  },
  {
    comment: [],
    author: "Tara Brock",
    rating: 4.5,
    time: "17 days ago",
    likes: 2,
    content: `We have made this countless times. We have never strayed from the exact recipe. Always a crowd pleaser. We served it to a Frencb foreign exchange student who felt it was the most French tasting food he has had since he’s been in the states.`,
  },
  {
    comment: [],
    author: "Shelly M.",
    rating: 5,
    time: "24 days ago",
    likes: 0,
    content: `One of my favorites, ever!`,
  },
  {
    comment: [],
    author: "Donna V.",
    rating: 5,
    time: "March 2, 2024",
    likes: 3,
    content: `Definitely 5 ⭐️’s This is the most impressive meal that everyone absolutely loves! We’re huge garlic fans so I add more. I cook it in a Dutch oven on the stove for several hours until the meat is very tender. I’ve also served it over cheesy polenta (Ina’s recipe). Comfort food at its best!`,
  },
];

export default function SingleRecipeComment({ points, votes }: any) {
  const [comment, setComment] = useState("");
  return (
    <div className="w-full flex items-start py-10">
      {/* ratings  */}
      <div className="max-w-[250px] w-full font-renner">
        <div className="font-semibold text-2xl mb-2">
          {votes}
          <span className="ml-2 font-renner">Reviews</span>
        </div>
        <Rating
          name="read-only"
          value={points}
          readOnly
          sx={{
            "& .MuiRating-iconFilled": {
              color: "#1A2433",
            },
            "& .MuiRating-iconEmpty": {
              color: "gray",
            },
            "& .MuiRating-icon": {
              marginRight: "12px", // adjust as needed
            },
            "& .MuiSvgIcon-root": {
              height: "30px",
              width: "auto",
            },
          }}
        />
      </div>
      {/* comment */}
      <div className="grow">
        {/* own  */}
        <div className="w-full flex items-start gap-6">
          {/* personal info */}
          <NullAvatar />
          {/* own comment box */}
          <form className="w-full">
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Have you tried this recipe? Leave a review!"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                {/* submit */}
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primarydblue rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-opacity-75"
                >
                  Post comment
                </button>

                {/* rating */}
                <div className="flex items-center">
                  <div className="mr-2">Your rating:</div>
                  <Rating
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "#1A2433",
                      },
                      "& .MuiRating-iconEmpty": {
                        color: "gray",
                      },
                      "& .MuiRating-icon": {
                        marginRight: "6px", // adjust as needed
                      },
                      "& .MuiSvgIcon-root": {
                        height: "20px",
                        width: "auto",
                      },
                    }}
                  />
                </div>
                <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 12 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                      />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    <span className="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                    <span className="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* others */}
        <div className="w-full flex flex-col mt-4 px-2 py-1 gap-4">
          {MOCKUP_COMMENT.map((item, index) => {
            return (
              <div
                className="font-renner w-full flex items-start pb-4 border-b"
                key={index}
              >
                {/* avatar */}
                <div>
                  <div className="size-10 flex items-center justify-center rounded-full bg-slate-100 opacity-65">
                    <Image
                      src={nullavatar}
                      alt="null ava"
                      width={26}
                      height={26}
                    />
                  </div>
                </div>
                {/* comment content */}
                <div className="px-2 text-sm grow">
                  <div className="flex items-center gap-4">
                    {/* name */}
                    <p className=" text-base font-semibold font-renner">
                      {item.author}
                    </p>
                    {/* time */}
                    <p className="text-xs font-light opacity-70">{item.time}</p>
                    {/* rating */}
                    <div className="flex items-center">
                      <Image
                        src={blackstar}
                        alt="star"
                        width={10}
                        height={10}
                      />
                      <p>{item.rating}</p>
                    </div>
                  </div>
                  {/* content */}
                  <p className="font-stixToText">{item.content}</p>
                  {/* bottom icons  */}
                  <div className="w-full flex items-center justify-between">
                    {/* like and reply */}
                    <div className="flex items-center mt-4 gap-10 text-xs">
                      {/* likes */}
                      <div className="flex items-center gap-1">
                        <button>
                          <Image src={like} alt="like" width={20} height={20} />
                        </button>
                        <p>{item.likes}</p>
                      </div>
                      {/* comments */}
                      <div className="flex items-center gap-1">
                        <button>
                          <Image src={cm} alt="like" width={20} height={20} />
                        </button>
                        <p>{item.comment.length}</p>
                      </div>
                    </div>
                    {/* flag this comment */}
                    <button>
                      <Image src={flag} alt="flag" width={14} height={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* pagination */}

        <div className="flex flex-col items-center mt-6">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              5
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              20
            </span>{" "}
            Comment
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Prev
            </button>
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
