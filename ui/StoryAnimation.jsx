import React from "react";
import Image from "next/image";
// import Lottie from "lottie-react";
// const Lottie = dynamic(() => import("lottie-react"));
// import storyAnimation from "@/public/animations/story_anim_1.json";
// import dynamic from "next/dynamic";

const StoryAnimation = () => {
  return (
    <div className="circular_shadow_wrapper">
      <div className="avatar overflow-hidden relative">
        <Image
          src="/images/tips_img.webp"
          alt="displays a mother holding her baby"
          fill
          priority
          sizes="(min-width:280px) 40px"
        />
      </div>
    </div>
  );
};

export default StoryAnimation;
// <div className="relative flex items-center justify-center h-10">
{
  /* <Lottie
        animationData={storyAnimation}
        width={24}
        height={24}
        className="absolute w-12 aspect-square"
        loop={false}
      /> */
}

{
  /* </div> */
}
