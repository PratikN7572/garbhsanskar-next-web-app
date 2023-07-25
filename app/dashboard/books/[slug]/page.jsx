"use client";
import React, { useEffect, useState } from "react";
import ImageCarousel from "@/ui/ImageCarousel";
import ImageSharing from "@/ui/ShareImage";
import { useParams } from "next/navigation";
import getGsBookInfo from "@/lib/getGsBookInfo";

const Page = () => {
  const params = useParams();
  
  const [pages, setPages] = useState([]);

  async function getBookInfo() {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await getGsBookInfo(user?.token, {
      book_key: params?.slug,
    });
    setPages(response?.data)
  }

  useEffect(() => {
    getBookInfo();
  }, []);

  return (
    <div className="h-full">
      <ImageCarousel images={pages} />
    </div>
  );
};

export default Page;
