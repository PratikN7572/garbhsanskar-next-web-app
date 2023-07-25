import { UserInfoContext } from "@/app/context/userInfoContext";
import getBannerDetails from "@/lib/getbannerDetails";
import React, { useContext, useEffect, useState } from "react";
import CustomCarousel from "./CustomCarousel";

const HomeBanner = () => {
  const [images, setImages] = useState([]);
  const { state } = useContext(UserInfoContext);

  const banner_details = async () => {
    const data = JSON.parse(localStorage.getItem("user"));
    const response = await getBannerDetails(data?.token, {
      is_paid: state?.user_plan_type === "paid_plan" ? "paid" : "free",
    });
    const filteredData = response?.data?.filter(
      (item) => item.main_type === "event"
    );
    localStorage.setItem("eventData", JSON.stringify(filteredData));
    setImages(response?.data);
  };
  useEffect(() => {
    banner_details();
  }, []);

  return (
    <>
      {images.length > 0 && (
        <div className="p-2 rounded-lg overflow-hidden">
          <CustomCarousel
            images={images}
            dotsWrapperClass="controls"
            dotClass="dot--banner"
            dotActiveClass="dot_active--banner"
          />
        </div>
      )}
    </>
  );
};

export default HomeBanner;
