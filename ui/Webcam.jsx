"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const Webcam = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setimage] = useState("")

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(error => {
          console.error('Error accessing webcam:', error);
        });
    }
  }, []);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw video frame on canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get image data from canvas
      const imageData = canvas.toDataURL('image/png');

      // Do something with the captured image data (e.g., save or display it)
        setimage(imageData);
    }
  };

  
  return (
    // <div style={{height:'100vh'}}>
    //   <video style={{ width: '100%', height: '100vh',objectFit:'cover' }} ref={videoRef} autoPlay  playsInline/>
    //       <canvas ref={canvasRef} style={{ display: 'none' }} />
    //   <button onClick={captureImage}>Capture Image</button>
    //       {image !== "" &&  <img src={image} alt='myself' height={'100%'} width={100} />}
         
    // </div>
    <div style={{ height: '100vh', position: 'relative' }}>
      <video style={{ width: '100%', height: '100vh', objectFit: 'cover' }} ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={captureImage}>Capture Image</button>
      {image !== "" && <img src={image} alt="myself" height="100%" width={100} />}
      <div
        style={{
          width: '200px',
          paddingTop: '200px', // Aspect ratio 1:1 (square) padding top as percentage of width
          backgroundColor: 'red',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '1',
          bottom: 0
        }}
      />
    </div>
  );
};

export default Webcam;
