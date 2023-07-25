"use client";
import React, { useState } from 'react';

function ImageSharing() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const shareImage = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        // Here, you can send the imageData to your server or perform any other action.
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div>
      <h1>Image Sharing</h1>
      <input type="file" onChange={handleImageUpload} accept="image/*" />
      <button onClick={shareImage}>Share Image</button>
    </div>
  );
}

export default ImageSharing;
