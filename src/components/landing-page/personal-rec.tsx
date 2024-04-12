"use client";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useState, useEffect } from "react";
import author from "@/images/landing/wtc/author.svg";
import authorblack from "@/images/landing/wtc/author-black.svg";
import clock from "@/images/landing/wtc/clock.svg";

const MOCKUP_MAIN_POSTS = {
  title: "Slow-Cooker Pinto Beans",
  author: " DANA BENINATI",
  description:
    "If you have yet to cook beans from scratch and own a slow cooker, this is the recipe for you! It comes together with pantry ingredients, requires minimal prep and thanks to the slow cooker, you’ll be rewarded with plump, perfectly tender beans with almost zero hands-on time. (Navy beans would also work well here.) Seasoned with warm spices and pickled jalapenos, they are a great side dish. Or serve them over rice or with warm tortillas as a meal.",
  rating: 5.0,
  imgUrl:
    "https://res.cloudinary.com/dyeiygws0/image/upload/v1712827406/pinato_bgys5g.jpg",
  time: "8 hour 10 minutes",
  votes: 420,
};

const MOCKUP_RECOMMEND_RECS = [
  {
    title: "Slow-Cooker Pinto Beans",
    author: " DANA BENINATI",
    description:
      "If you have yet to cook beans from scratch and own a slow cooker, this is the recipe for you! It comes together with pantry ingredients, requires minimal prep and thanks to the slow cooker, you’ll be rewarded with plump, perfectly tender beans with almost zero hands-on time. (Navy beans would also work well here.) Seasoned with warm spices and pickled jalapenos, they are a great side dish. Or serve them over rice or with warm tortillas as a meal.",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1712827406/pinato_bgys5g.jpg",
    time: "8 hour 10 minutes",
    votes: 420,
  },
  {
    title: "Chicken with Creamy Mushrooms and Snap Peas",
    author: " FOOD NETWORK KITCHEN",
    description:
      "Savor the richness of our Creamy Chicken with Mushrooms and Snap Peas, where tender chicken cutlets meet a velvety sauce infused with earthy mushrooms, crisp snap peas, and aromatic scallions. Each golden-seared cutlet is bathed in a luxurious cream sauce, creating a symphony of flavors that delights the palate with every bite. Whether it's a special occasion or a cozy night in, this gourmet dish promises indulgence and satisfaction in every mouthful.",
    rating: 4.5,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1712842899/chickenpea_ffndxh.jpg",
    time: "35 minutes",
    votes: 219,
  },
  {
    title: "Chicken and Broccoli with White Sauce",
    author: "ANDY LIANG",
    description:
      "The chicken and broccoli you find at your favorite Chinese restaurant is usually covered in an intensely flavored brown sauce often based on oyster and soy sauces. This recipe showcases a milder but equally delicious Chinese white sauce that might be familiar to you from dishes like shrimp in lobster sauce. It’s clear and savory, thickened with a cornstarch slurry. This recipe also highlights the traditional Chinese technique of “velveting,” a marinating process that coats proteins to tenderize, lock in the juices and promote browning. We tested a variety of velveting processes that use egg, egg white and even just water. Our conclusion? Chicken covered in salt and water (similar to brining) then coated with cornstarch produced the best texture. We also eliminated the common step of boiling or deep-frying the chicken before stir-frying; a quick sear in the wok produced tender results. If velveting seems daunting, don’t let it be; it’s essentially a marinating process and takes just a few minutes of work and 30 minutes of hands-off time. And it’s worth it: Your velveted chicken will be juicy and tender with tons of savory flavor.",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1712842900/brocorli_esapfu.jpg",
    time: "50 minutes",
    votes: 1210,
  },
  {
    title: "Chicken Broccoli Casserole",
    author: "TRISHA YEARWOOD",
    description:
      "Indulge in comfort with our Chicken Broccoli Casserole, a classic dish that's sure to become a family favorite. Tender chicken, cooked to perfection and shredded, is layered with vibrant broccoli florets and fluffy rice, creating a hearty base for this comforting meal. A creamy mixture of chicken soup, sour cream, mayonnaise, and zesty lemon juice envelops the layers, infusing them with rich flavor and velvety smoothness. Topped with a generous sprinkle of Cheddar cheese, this casserole bakes to golden perfection, creating a dish that's both satisfying and delicious. Perfect for busy weeknights or special gatherings, our Chicken Broccoli Casserole is a timeless classic that never fails to please.",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1712842899/chikenbroc_mvr14l.jpg",
    time: "2 hour 50 minutes",
    votes: 967,
  },
  {
    title: "Collard Burrito",
    author: "FOOD NETWORK KITCHEN",
    description:
      "Collards are key to these paleo-friendly breakfast wraps: bacon, eggs and a fresh avocado salsa (think salsa meets gauc) are wrapped up in tender collard leaves, which can be prepped a day in advance.",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1712842899/leaveburito_ac7pqe.jpg",
    time: "30 minutes",
    votes: 541,
  },
  {
    title: "Spinach, Tomato and Feta Oatmeal",
    author: "FOOD NETWORK KITCHEN",
    description:
      "This satisfying dish takes a traditional breakfast favorite and turns it into a savory version with an almost risotto-like texture. It's great served warm or at room temperature.",
    rating: 5.0,
    imgUrl:
      "https://res.cloudinary.com/dyeiygws0/image/upload/v1712846561/oatmeal_snmjqe.jpg",
    time: "25 minutes",
    votes: 98,
  },
];

export interface RecommendRecipe {
  title: string;
  author: string;
  description: string;
  rating: number;
  imgUrl: string;
  time: string;
  votes: number;
}

const PersonalRecommendations = () => {
  const [rec, setRec] = useState<RecommendRecipe[]>();
  const [currentIndex] = useState<number>(0);

  useEffect(() => {
    fetchRecommend();
  }, []);

  const fetchRecommend = async () => {
    /* fetch real data */
    setRec(MOCKUP_RECOMMEND_RECS);
  };

  return (
    <div className="w-full bg-[url('/images/footer/bg.jpeg')]  flex flex-col items-center bg-top py-10 mt-[120px]">
      <section className="max-w-[1440px] w-full flex flex-col items-center gap-10">
        {/* title */}
        <div className="font-renner text-3xl text-white">WHAT TO COOK</div>
        <div className="w-full rounded-md flex gap-4 bg-white bg-opacity-5 backdrop-blur-md">
          {/* main recipe */}
          {rec !== undefined && (
            <div
              className="md:w-[900px] md:h-[650px] bg-[length:900px_650px] hover:bg-[length:930px_680px] group transition-all duration-300 bg-no-repeat bg-right-top rounded-md relative"
              style={{
                backgroundImage: `url("${rec[currentIndex].imgUrl}")`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-60% via-transparent to-transparent rounded-b-2xl"></div>
              {/* recipe info */}
              <div className="font-renner absolute z-10 bottom-6 px-6 w-full">
                <div className="text-lg font-medium text-white mb-2">
                  {/* title */}
                  <p
                    className="font-medium md:text-4xl transition-all duration-300
                   group-hover:text-orange-300 group-hover:text-[42px] w-fit
                   after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-400 after:transition-all after:duration-300 after:group-hover:w-full after:group-hover:h-1 after:group-hover:mt-1 after:group-hover:ml-1 after:group-hover:rounded-full after:group-hover:opacity-100"
                  >
                    {rec[currentIndex].title}
                  </p>
                  {/* additional info */}
                  <div className="flex items-start w-full gap-10 mt-3">
                    <div>
                      {/* author */}
                      <div className=" flex items-center gap-3">
                        <Image
                          src={author}
                          alt="author"
                          width={24}
                          height={24}
                        />
                        <p className="font-medium md:text-base text-xs transition-all duration-300 mt-2">
                          RECIPE | Courtesy of <br />
                          <span className="italic font-medium text-orange-500">
                            {rec[currentIndex].author}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col md:text-base my-1 text-sm transition-all duration-300">
                        {/* cook time */}
                        <div className="flex items-center gap-3">
                          <Image
                            src={clock}
                            alt="clock"
                            width={24}
                            height={24}
                          />
                          <p>{rec[currentIndex].time} cook</p>
                        </div>
                        {/* rating */}
                        <div className="flex text-center items-center gap-1 mt-3 pl-2">
                          <p>{rec[currentIndex].rating.toLocaleString()}</p>
                          <Rating
                            name="read-only"
                            value={rec[currentIndex].rating}
                            readOnly
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: "white",
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
                          {/* votes */}
                          <div className="font-[300] text-sm">
                            {"(" + rec[currentIndex].votes} votes{")"}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* description */}
                    <p className=" text-sm max-w-[60%] md:max-h-[120px] text-ellipsis">
                      {rec[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* other recommended recipes */}
          <div className="grow flex flex-col justify-between md:h-[650px] overflow-hidden">
            {rec !== undefined &&
              rec
                .filter((item, index) => index !== currentIndex)
                .map((item, index) => {
                  return (
                    <div className="w-full px-3" key={index}>
                      <div className="relative rounded-md group hover:cursor-pointer flex items-center bg-white bg-opacity-80 hover:scale-105 transform transition-transform duration-300 shadow-lg">
                        {/* recipe image */}
                        <div
                          className="md:w-[200px] md:h-[120px] bg-cover bg-no-repeat bg-center rounded-md relative shadow-md"
                          style={{
                            backgroundImage: `url("${item.imgUrl}")`,
                          }}
                        ></div>
                        {/* related recipe info */}
                        <div className="font-renner px-2 text-primarydblue w-full ">
                          <div className="text-lg font-medium flex flex-col mb-2">
                            {/* title */}
                            <p
                              className="font-medium  transition-all duration-300 
                            after:content-[''] after:block after:w-0 after:h-[0.4px] after:bg-[#1A2433] after:transition-all 
                            after:duration-300 after:group-hover:w-full after:group-hover:rounded-full after:group-hover:opacity-100
                            w-fit"
                            >
                              {item.title}
                            </p>
                            {/* author */}
                            <div className=" flex items-center gap-1 text-xs">
                              <Image
                                src={authorblack}
                                alt="author"
                                width={12}
                                height={12}
                              />
                              <p className="font-light text-xs transition-all duration-300 mt-2">
                                RECIPE | Courtesy of{" "}
                                <span className="italic font-medium  transition-all duration-300">
                                  <span className="font-semibold">
                                    {item.author}
                                  </span>
                                </span>
                              </p>
                            </div>
                            {/* rating */}
                            <div className="flex text-center items-center gap-1 mt-3 pl-2">
                              <p className="text-xs">
                                {item.rating.toLocaleString()}
                              </p>
                              <Rating
                                name="read-only"
                                value={item.rating}
                                readOnly
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
                                    height: "10px",
                                    width: "auto",
                                  },
                                }}
                              />
                              {/* votes */}
                              <div className="font-[300] text-xs">
                                {"(" + item.votes} votes{")"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalRecommendations;
