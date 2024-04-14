import {
  getVerticalVariant,
  getFadeVariant,
  getHorizontalVariant,
} from "@/utils/animation/landing-page/slide-1";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
const MotionImage = motion(Image);
import sauce1 from "@/images/landing/slide1/sauce1.png";
import leaves2 from "@/images/landing/slide1/leaves2.png";
import cheese from "@/images/landing/slide1/cheese.png";
import dish2 from "@/images/landing/slide1/dish2.png";
import leaves from "@/images/landing/slide1/leaves.png";
import noodle1 from "@/images/landing/slide1/noodle1.png";
import dish1 from "@/images/landing/slide1/dish1.png";
import leaves4 from "@/images/landing/slide1/leaves4.png";
import leaves3 from "@/images/landing/slide1/leaves3.png";
import dish3 from "@/images/landing/slide1/dish3.png";

export default function Greeting({ isActive }: { isActive: boolean }) {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controlBackground = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 },
      });
      controls2.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.9 },
      });
      controls3.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 1.3 },
      });
      controlBackground.start("visible");
    } else {
      controls.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });
      controls2.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });
      controls3.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });
      controlBackground.start("hidden");
    }
  }, [isActive, controls]);

  return (
    <div className="w-full h-full bg-[url('/images/background/whitestone.jpg')]">
      {/* animation bg */}
      <div className="z-10 absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full relative">
          {/* top left */}
          <motion.div
            variants={getHorizontalVariant(0.5, 2.0, "-550px")}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[11] top-0 left-0 w-[550px] h-[315px]"
          >
            <MotionImage
              src={sauce1}
              alt="sauce1"
              width={450}
              height={473}
              objectFit="cover"
            />
          </motion.div>
          {/* top left leaves */}
          <motion.div
            variants={getFadeVariant(1.5, 0.8)}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[12] -top-10 -left-28  w-[153px] h-[174px]"
          >
            <MotionImage
              src={leaves2}
              alt="leaves2"
              width={153}
              height={174}
              objectFit="cover"
            />
          </motion.div>
          {/* bot left cheese */}
          <motion.div
            variants={getVerticalVariant(0.5, 2.0, "475px")}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[11] -bottom-24 -left-40 w-[450px] h-[473px] bg-cover"
          >
            <MotionImage
              src={cheese}
              alt="cheese"
              width={450}
              height={473}
              objectFit="cover"
            />
          </motion.div>
          {/* left salmon */}
          <motion.div
            variants={getFadeVariant(0.8, 1.3)}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[12] bottom-1/3 left-0 w-[300px] h-[298px] bg-cover"
          >
            <MotionImage
              src={dish2}
              alt="dish2"
              width={300}
              height={298}
              objectFit="cover"
            />
          </motion.div>
          {/* bot left leaves */}
          <motion.div
            variants={getFadeVariant(1.5, 0.8)}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[12] bottom-[8%] left-[18%] w-[200px] h-[175px]"
          >
            <MotionImage
              src={leaves}
              alt="leaves"
              width={200}
              height={175}
              objectFit="cover"
            />
          </motion.div>
          {/* bot right pasta */}
          <motion.div
            variants={getHorizontalVariant(0.5, 1.3, "495px")}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[11] -bottom-24 -right-52 w-[500px] h-[495px]"
          >
            <MotionImage
              src={noodle1}
              alt="leaves"
              width={500}
              height={495}
              objectFit="cover"
            />
          </motion.div>
          {/* bot right dish */}
          <motion.div
            variants={getVerticalVariant(0.5, 2.0, "475px")}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[13] -bottom-80 right-36 w-[500px] h-[500px]"
          >
            <MotionImage
              src={dish1}
              alt="dish1"
              width={500}
              height={500}
              objectFit="cover"
            />
          </motion.div>
          {/* top leaves */}
          <motion.div
            variants={getVerticalVariant(0.5, 2.0, "-300px")}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[12] -top-44 right-1/3 w-[300px] h-[300px]"
          >
            <MotionImage
              src={leaves4}
              alt="leaves4"
              width={300}
              height={300}
              objectFit="cover"
            />
          </motion.div>
          {/* top right leaves */}
          <motion.div
            variants={getFadeVariant(0.8, 1.3)}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[11] top-24 right-0 w-[400px] h-[244px]"
          >
            <MotionImage
              src={leaves3}
              alt="leaves3"
              width={400}
              height={244}
              objectFit="cover"
            />
          </motion.div>
          {/* top right dish */}
          <motion.div
            variants={getVerticalVariant(0.5, 2.0, "-300px")}
            initial="hidden"
            animate={controlBackground}
            className="absolute z-[12] -top-20 right-2 w-[300px] h-[300px]"
          >
            <MotionImage
              src={dish3}
              alt="dish3"
              width={300}
              height={300}
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
      {/* greeting content */}
      <div className="relative z-30 w-full h-full  flex flex-col items-center justify-center">
        {/* web motto */}
        <motion.div initial={{ y: 50, opacity: 0 }} animate={controls}>
          <p className="font-playball text-5xl font-bold first-letter:text-6xl">
            Whisking Up
            <br />
            Wonderful!
          </p>
        </motion.div>
        {/* description */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls2}
          className="max-w-[720px] flex flex-col items-center text-base text-[rgb(136,137,137)] mt-6"
        >
          <p>
            Welcome to{" "}
            <span className="font-srcSerif text-orange-400 font-semibold">
              {" "}
              NomNom
            </span>
            , where every dish is a masterpiece in the making. With each whisk
            and stir, we're whisking up wonderful flavors and memories. From
            comforting classics to daring innovations, our recipes are crafted
            to inspire and delight, whether you're a seasoned chef or a culinary
            novice. Join us as we embark on a journey of culinary discovery, one
            recipe at a time. Get ready to unleash your inner chef and savor the
            magic of cooking with us!
          </p>
          <p className="text-black text-2xl font-playball w-full text-right mt-4">
            {" "}
            Bon Appetit!
          </p>
        </motion.div>
        {/* navigate link */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls3}
          className="py-4 px-9 bg-primarydblue text-white font-semibold cursor-pointer hover:bg-white hover:text-orange-300 transition-all duration-300 border hover:border-orange-200"
        >
          Explore our recipes
        </motion.div>
      </div>
    </div>
  );
}
