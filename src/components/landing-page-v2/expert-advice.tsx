import {
  getVerticalVariant,
  getFadeVariant,
  getHorizontalVariant,
} from "@/utils/animation/landing-page/slide-1";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ExpertAdvice({ isActive }: { isActive: boolean }) {
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
    <div className="w-full h-full relative">
      <div className="w-full h-full absolute top-0 left-0 z-0 bg-[url('/images/landing/slide3/bg1.jpg')] bg-cover bg-no-repeat blur-sm"></div>
    </div>
  );
}
