"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const WebCameraButton = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/dashboard/tools/babyBump/webCam")}
      className="bg-gray-200 w-20 h-12 border rounded-md grid place-content-center border-black"
    >
      <div className="relative h-10 w-11">
        <Image src="/images/ic_photo_camera.png" alt="black camera icon" fill />
      </div>
    </div>
  );
};

export default WebCameraButton;
