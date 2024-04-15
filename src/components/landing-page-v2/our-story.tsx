import Image from "next/image";
import { getVerticalVariant } from "@/utils/animation/landing-page/slide-1";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "@/styles/swiper.css";
import golden from "@/images/landing/slide3/golden.png";

export default function OurStory({ isActive }: { isActive: boolean }) {
  const controlBackground = useAnimation();

  useEffect(() => {
    if (isActive) {
      controlBackground.start("visible");
    } else {
      controlBackground.start("hidden");
    }
  }, [isActive, controlBackground]);

  return (
    <div className="w-full h-full relative flex">
      {/* text content */}
      <div className="grow flex flex-col items-center justify-center w-full p-10 max-w-[500px] h-full bg-[url('/images/landing/slide2/bg.jpg')] ">
        <motion.div
          variants={getVerticalVariant(0.3, 1.5, "50px")}
          initial="hidden"
          animate={controlBackground}
          className="font-playball text-5xl font-bold first-letter:text-6xl text-white"
        >
          Our Story
        </motion.div>

        <motion.div
          variants={getVerticalVariant(0.6, 1.5, "50px")}
          initial="hidden"
          animate={controlBackground}
          className="w-[23px] h-[21px] mt-6"
        >
          <Image src={golden} alt="golden" width={0} height={0} className="" />
        </motion.div>

        {/* motto */}
        <motion.div
          variants={getVerticalVariant(0.6, 1.5, "50px")}
          initial="hidden"
          animate={controlBackground}
          className="font-alexBrush text-[39px] leading-[39px] mt-6 text-[rgb(187,187,188)]"
        >
          Anyone Can Cook
          <p className="text-right font-stixToText text-white text-lg">
            - Chef Auguste Gusteau
          </p>
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
          className="mt-6 text-base text-white text-center"
        >
          At{" "}
          <span className=" text-white font-semibold font-stixToText">Nom</span>
          <span className=" text-orange-300 font-semibold font-stixToText">
            Nom
          </span>
          , we believe in the power of every individual to create culinary
          masterpieces.
          <p className="mt-3">
            Whether you're an experienced chef or just starting your cooking
            journey, we are here to empower you. With easy-to-follow recipes,
            expert tips, and a supportive community, we're dedicated to helping
            you unleash your inner chef.
          </p>
          <p className="mt-3">
            Join us as we embark on a flavorful adventure together. Let's prove
            that with{" "}
            <span className=" text-white font-semibold font-stixToText">
              Nom
            </span>
            <span className=" text-orange-300 font-semibold font-stixToText">
              Nom
            </span>
            ,
            <br />
            <span className="font-playball text-xl font-bold">
              anyone can cook.
            </span>
          </p>
        </motion.div>
        {/* navigate link */}
        <motion.div
          variants={getVerticalVariant(1.2, 1.5, "50px")}
          initial="hidden"
          animate={controlBackground}
          className="py-4 px-9 mt-10 bg-primarydblue font-stixToText text-white font-semibold cursor-pointer hover:bg-white hover:text-orange-300 border hover:border-orange-200"
        >
          Start The Journey
        </motion.div>
      </div>

      {/* animation bg */}
      <div className="w-full h-full bg-[url('/images/landing/slide4/bg3.jpeg')] bg-cover bg-center "></div>

      <div className="grow w-full max-w-[100px] h-full bg-[url('/images/landing/slide2/bg.jpg')] "></div>
    </div>
  );
}
