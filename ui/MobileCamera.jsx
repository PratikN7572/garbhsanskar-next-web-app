'use client';

import { useEffect, useRef } from 'react';

const MobileCamera = () => {
  const videoRef = useRef(null);

  const startCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(error => {
          console.error('Error accessing mobile camera:', error);
        });
    }
  };

  useEffect(() => {
    startCamera();
  }, []);

  return (
    <div>
      <button onClick={startCamera}>Start Mobile Camera</button>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default MobileCamera;
