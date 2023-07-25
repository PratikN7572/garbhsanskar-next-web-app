"use client";

import React, { useState } from "react";
import UnLikeIcon from "@/public/icons/sg_like.svg";
import LikeIcon from "@/public/icons/sg_liked.svg";
import { ModuleContext } from "@/app/context/moduleContext";
const LikeButton = () => {
    // const { state } = useContext(ModuleContext)
    const [like, setLike] = useState(false);
    if (like) {
        return <LikeIcon role="button" onClick={() => setLike(false)} className="w-6 !m-0" />
    } else {
        return <UnLikeIcon role="button" onClick={() => setLike(true)} className="w-6 !m-0" />
    }
};

export default LikeButton;
