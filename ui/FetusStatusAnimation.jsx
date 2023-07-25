"use client";

import React, { memo, useEffect, useState } from "react";
import "@/styles/fetusStatusAnimation.css";
import BabySmile from "@/public/animations/baby_smile.json";
import BabyOne from "@/public/images/baby_one.png";
import Lottie from "lottie-react";
import Image from "next/image";

const FetusStatusAnimation = ({src}) => {
  const [showElementA, setShowElementA] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowElementA((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full absolute -z-30 grid place-content-center">
      <div className="selection_ratio_bg w-52 h-52">
        <div className="selection_ratio">
          <Lottie
            animationData={BabySmile}
            className={`fade_in_animation ${
              showElementA ? "w-5/6 inline-block " : "hidden"
            }`}
            style={{transform: 'translateX(15px)'}}
          />
          <Image
            src={src || BabyOne}
            className={`fade_in_animation  ${
              showElementA ? "hidden " : " inline-block w-5/6"
            }`}
            alt="mimicing of the real baby fetus"
            priority
            fill
          />
          
        </div>
      </div>
    </div>
  );
};

export default memo(FetusStatusAnimation);
