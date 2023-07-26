import React, { useContext, memo, useCallback } from "react";
import { imageSources } from "@/db";
import PackageDay from "./PackageDay";
import Image from "next/image";
import { UserInfoContext } from "@/app/context/userInfoContext";
import FetusStatus from "./FetusStatus";
import CustomCarousel from "./CustomCarousel";
import HomeBanner from "./HomeBanner";

const ScreenHeader = () => {
  const getImageSrc = useCallback((userLang) => {
    return imageSources[userLang] || "/images/planner_quiz_banner_english.webp";
  }, []);
  const { state } = useContext(UserInfoContext);
  const userLang = state?.data?.user_lang || "en"; 
  const src = getImageSrc(userLang);
  return (
    <header id="planner_banner">
      {state?.data?.user_type  === 'pregnant' && <HomeBanner />}
      {state?.data?.user_type === 'planner' && <div
        className="overflow-hidden mx-2 h-24 rounded-md relative shadow-dark"
        id="quiz_image"
      >
        <Image
          priority
          src={src}
          alt="quiz banner according to the selected language"
          fill
          sizes="(min-width:280px) 240px"
        />
      </div>}
      <PackageDay />
      {state?.data?.user_type === 'pregnant' && <FetusStatus/>}
    </header>
  );
};

export default ScreenHeader;
