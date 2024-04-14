import {
  getVerticalVariant,
  getFadeVariant,
  getHorizontalVariant,
} from "@/utils/animation/landing-page/slide-1";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import chef from "@/images/landing/slide3/chef-jean.png";
import Image from "next/image";
import golden from "@/images/landing/slide3/golden.png";
import wine from "@/images/landing/slide3/wine.png";
import salt from "@/images/landing/slide3/salt.png";
import knife from "@/images/landing/slide3/knife.png";
import charboard from "@/images/landing/slide3/charboard.png";
import leave from "@/images/landing/slide3/leave.png";

const MotionImage = motion(Image);

export default function ExpertAdvice({ isActive }: { isActive: boolean }) {
  const controlBackground = useAnimation();

  useEffect(() => {
    if (isActive) {
      controlBackground.start("visible");
    } else {
      controlBackground.start("hidden");
    }
  }, [isActive, controlBackground]);

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full absolute top-0 left-0 z-0 bg-[url('/images/landing/slide3/bg2.jpg')] bg-cover bg-no-repeat"></div>

      <div className="w-full h-full flex items-center justify-center relative z-10">
        {/* main content */}
        <div className="rounded-md overflow-hidden flex items-center bg-[url('/images/background/blackpaint.jpg')]  relative z-20 ">
          {/* bg image */}
          {/* top right */}
          <motion.div
            variants={getFadeVariant(0.5, 2.0)}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[11] -top-16 right-1/2 w-[201px] h-[204px]"
          >
            <MotionImage
              src={wine}
              alt="sauce1"
              width={201}
              height={204}
              objectFit="cover"
            />
          </motion.div>
          {/* top salt */}
          <motion.div
            variants={getFadeVariant(0.5, 2.0)}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[11] top-6 right-1/3 w-[134px] h-[55px]"
          >
            <MotionImage
              src={salt}
              alt="salt"
              width={134}
              height={55}
              objectFit="cover"
            />
          </motion.div>
          {/* top knife */}
          <motion.div
            variants={getFadeVariant(0.5, 2.0)}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[11] top-6 right-1/3 w-[95px] h-[114px]"
          >
            <MotionImage
              src={knife}
              alt="sauce1"
              width={95}
              height={114}
              objectFit="cover"
            />
          </motion.div>
          {/* top board */}
          <motion.div
            variants={getFadeVariant(0.5, 2.0)}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[11] top-[30%] right-[44%] w-[201px] h-[175px]"
          >
            <MotionImage
              src={charboard}
              alt="sauce1"
              width={201}
              height={175}
              objectFit="cover"
            />
          </motion.div>
          {/* top board */}
          <motion.div
            variants={getFadeVariant(0.5, 2.0)}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[14] top-[20%] right-1/2 w-[80px] h-[47px]"
          >
            <MotionImage
              src={leave}
              alt="leave"
              width={80}
              height={47}
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            variants={getFadeVariant(0.8, 1.3)}
            initial="hidden"
            animate={controlBackground}
            className="w-[600px] h-[700px] pb-10"
          >
            <Image
              src={chef}
              alt="chef"
              width={400}
              height={500}
              className=""
            />
          </motion.div>
          {/* text content */}
          <div className="relative z-20 p-10 max-w-[650px] text-white flex flex-col items-center">
            {/* title */}
            <motion.div
              variants={getVerticalVariant(0.3, 1.5, "50px")}
              initial="hidden"
              animate={controlBackground}
              className="font-playball text-5xl font-bold first-letter:text-6xl"
            >
              Explore Culinary Insights
            </motion.div>

            <motion.div
              variants={getVerticalVariant(0.6, 1.5, "50px")}
              initial="hidden"
              animate={controlBackground}
              className="w-[23px] h-[21px] mt-6"
            >
              <Image
                src={golden}
                alt="golden"
                width={0}
                height={0}
                className=""
              />
            </motion.div>

            {/* motto */}
            <motion.div
              variants={getVerticalVariant(0.6, 1.5, "50px")}
              initial="hidden"
              animate={controlBackground}
              className="font-alexBrush text-[39px] leading-[39px] mt-6 text-[rgb(187,187,188)]"
            >
              We aim to share
            </motion.div>

            <motion.div
              variants={getVerticalVariant(0.9, 1.5, "50px")}
              initial="hidden"
              animate={controlBackground}
              className="mt-6 w-10 h-[2px] bg-orange-300"
            ></motion.div>

            {/* content */}
            <motion.div
              variants={getVerticalVariant(0.9, 1.5, "50px")}
              initial="hidden"
              animate={controlBackground}
              className="mt-6 text-base ml-10"
            >
              <span className="font-stixToText font-bold text-xl"> Nom</span>
              <span className="font-stixToText font-bold text-orange-400  text-xl">
                Nom
              </span>{" "}
              presents the Expert Advice Hub, a treasure trove of culinary
              wisdom. From mastering kitchen fundamentals to discovering
              advanced techniques, our collection of curated posts and blogs
              offers invaluable insights from seasoned chefs and food
              enthusiasts. Whether you're seeking to hone your skills or uncover
              new culinary horizons, our expert advice hub is your go-to
              destination
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
