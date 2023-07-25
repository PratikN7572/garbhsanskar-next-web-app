"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";
import CalenderIcon from "@/public/icons/ic_calendar.svg";
import ClockIcon from "@/public/icons/ic_clock.svg";
import { format, parseISO } from "date-fns";
const CustomCarousel = ({
  images,
  dotsWrapperClass,
  dotsClass,
  dotClass,
  dotActiveClass,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images?.length - 1 ? 0 : prevImage + 1
      );
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, [images?.length]);

  function formatDate(dateString) {
    if (dateString) {
      const date = parseISO(dateString);
      return format(date, "dd MMM");
    }
  }
  return (
    <div className="carousel h-full max-h-44 relative">
      <div className="viewport rounded-lg">
        {images?.map((image, index) => {
          const eventStartDate = formatDate(image?.event_start_date);
          return (
            <div
              key={index}
              style={{ transform: `translateX(${-100 * currentImage}%)` }}
              className={`relative w-full h-full slide ${
                index === currentImage ? "active" : ""
              }`}
            >
              <Image
                src={image.small_image}
                alt={`Slide ${index}`}
                fill
                loading="lazy"
              />
              {image.main_type == "event" && (
                <div
                  className="w-full absolute bottom-0 h-9 px-2"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.6)",
                    backdropFilter: "opacity(10%)",
                  }}
                >
                  <div className="w-full flex gap-3 items-center justify-start">
                    <CalenderIcon className="w-4 fill-white/70" />
                    <h4 className="text-xs sm:text-sm text-white">
                      {eventStartDate}
                    </h4>
                    <ClockIcon className="w-4 fill-white/70 m-0" />
                    <h4 className="text-xs sm:text-sm text-white">
                      From: {image.event_start_time} To:
                      {image.event_end_time}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {images?.length > 1 && <div
        className={clsx({
          [dotsWrapperClass]: !!dotsWrapperClass,
        })}
      >
        {/* dots */}
        <div
          className={clsx("dots", {
            [dotsClass]: !!dotsClass,
          })}
        >
          {images?.map((_, index) => (
            <div
              role="button"
              onClick={() => setCurrentImage(index)}
              key={index}
              className={clsx({
                [dotClass]: !![dotClass],
                [dotActiveClass]: index === currentImage && !!dotActiveClass,
              })}
            />
          ))}
        </div>
      </div>}
    </div>
  );
};

export default CustomCarousel;
