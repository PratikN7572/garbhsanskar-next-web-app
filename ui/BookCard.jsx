import Image from "next/image";
import React, { memo } from "react";

const BookCard = ({
  header_text,
  middle_text,
  footer_text,
  thumbnail_image,
}) => {
  return (
    <div className="w-full shadow-base rounded-lg p-3">
      <div className="container flex gap-3">
        <div className="w-20 aspect-square flex-[0.3] overflow-hidden rounded-sm relative">
          <Image
            src={thumbnail_image || "/images/profile_img.webp"}
            alt="thumbnail of the book"
            fill
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 w-full flex-col justify-between">
          <h4 className="text-lg capitalize leading-4 font-semibold mb-2">
            {header_text}
          </h4>
          {middle_text && (
            <h4 className="text-xs capitalize leading-4 font-semibold text-primary-pink mb-2">
              {middle_text}
            </h4>
          )}
          <h5 className="text-sm capitalize leading-4 pt-1 border-t border-black/20 font-extralight">
            {footer_text}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default memo(BookCard);
