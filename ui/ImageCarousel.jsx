"use client"

import Image from "next/image";
import { useState } from "react";
import clsx from 'clsx';
import ZoomIn from '@/public/icons/zoom-in.svg'
import ZoomOut from '@/public/icons/zoom-out.svg'
const Carousel = ({ images }) => {
  const [scale, setScale] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    if (scale > 0.1) {
      setScale(scale - 0.1);
    }
   
  };
  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="carousel">
      <div className="viewport">
        {images.map((image, index) => (
          <div
            key={index}
            style={{ transform: `translateX(${-100 * currentImage}%)`}}
            className={`relative w-full h-full slide ${index === currentImage ? "active" : ""}`}
          >
                    <Image style={{transform: `scale(${scale})`,
          transformOrigin: 'top left', }} src={image.thumbnail_image} alt={`Slide ${index}`} fill loading="lazy"  />
          </div>
        ))}
      </div>
      <div className="controls">
              <button onClick={handlePrevClick} className={clsx("btn shadow-dark", {
                  "opacity-0 pointer-events-none":  currentImage <= 0
              })}
                  
        >Prev</button>
        <button onClick={handleZoomIn}><ZoomIn/></button>
        <p>{currentImage + 1} / {images.length}</p>
       
      <button onClick={handleZoomOut}><ZoomOut/></button>
        <button onClick={handleNextClick} className={clsx("btn shadow-dark", {
                  "opacity-0 pointer-events-none":  currentImage === images.length - 1
              })}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;