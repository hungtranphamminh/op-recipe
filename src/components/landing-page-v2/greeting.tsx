import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Greeting({ isActive }: { isActive: boolean }) {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

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
    } else {
      controls.start({
        y: 50,
        opacity: 0,
        transition: { duration: 0.5 },
      });
      controls2.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });
      controls3.start({ y: 50, opacity: 0, transition: { duration: 0.5 } });
    }
  }, [isActive, controls]);

  return (
    <div className="w-full h-full bg-[url('/images/background/whitestone.jpg')]">
      {/* animation bg */}
      <div className="z-10 absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full relative">
          {/* top left */}
          <div
            className="
          absolute z-[11] top-0 left-0 bg-[url('/images/landing/slide1/sauce1.png')] 
          bg-[length:550px_275px] w-[550px] h-[275px]"
          ></div>
          {/* top left leaves */}
          <div
            className="absolute z-[12] -top-10 -left-28 bg-[url('/images/landing/slide1/leaves2.png')] 
          bg-[length:153px_174px] w-[153px] h-[174px]"
          ></div>
          {/* bot left cheese */}
          <div
            className="absolute z-[11] -bottom-24 -left-40 bg-[url('/images/landing/slide1/cheese.png')] 
          bg-[length:450px_475px] w-[450px] h-[475px]"
          ></div>
          {/* bot left salmon */}
          <div
            className="absolute z-[12] bottom-1/3 left-0 bg-[url('/images/landing/slide1/dish2.png')] 
          bg-[length:300px_300px] w-[300px] h-[300px]"
          ></div>
          {/* bot left leaves */}
          <div
            className="absolute z-[12] bottom-[8%] left-[18%] bg-[url('/images/landing/slide1/leaves.png')] 
          bg-[length:200px_175px] w-[200px] h-[175px]"
          ></div>
          {/* bot right pasta */}
          <div
            className="absolute z-[11] -bottom-0 -right-52 bg-[url('/images/landing/slide1/noodle1.png')] 
          bg-[length:500px_495px] w-[500px] h-[495px]"
          ></div>
          {/* bot right pasta */}
          <div
            className="absolute z-[12] -bottom-80 right-14 bg-[url('/images/landing/slide1/dish1.png')] 
          bg-[length:500px_500px] w-[500px] h-[500px]"
          ></div>
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
            Welcome to <span className="font-srcSerif"> NomNom</span>, where
            every dish is a masterpiece in the making. With each whisk and stir,
            we're whisking up wonderful flavors and memories. From comforting
            classics to daring innovations, our recipes are crafted to inspire
            and delight, whether you're a seasoned chef or a culinary novice.
            Join us as we embark on a journey of culinary discovery, one recipe
            at a time. Get ready to unleash your inner chef and savor the magic
            of cooking with us!
          </p>
          <p className="text-black text-2xl font-playball w-full text-right mt-4">
            {" "}
            Bon Appetit!
          </p>
        </motion.div>
        {/* navigate link */}
        <motion.div initial={{ y: 50, opacity: 0 }} animate={controls3}>
          see menu
        </motion.div>
      </div>
    </div>
  );
}
