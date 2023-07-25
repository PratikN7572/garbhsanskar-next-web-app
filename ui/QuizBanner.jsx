'use client';

import React, { useCallback, useContext } from 'react'
import { UserInfoContext } from '@/app/context/userInfoContext'
import { imageSources } from "@/db";
import Image from 'next/image'
const QuizBanner = () => {
    const {state} = useContext(UserInfoContext)
    const getImageSrc = useCallback((userLang) => {
        return imageSources[userLang] || "/images/planner_quiz_banner_english.webp";
    }, []);
    const userLang = state?.data?.user_lang || "en"; 
  const src = getImageSrc(userLang);
    if (state?.data?.user_type === 'planner') {
        return (
            <div
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
                  </div>
              )
    }
  
}

export default QuizBanner