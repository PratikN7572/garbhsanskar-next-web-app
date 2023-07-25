"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import "@/styles/homeModal.css";
import Lottie from "lottie-react";
import BabySmile from "@/public/animations/baby_smile.json";
import BabySad from "@/public/animations/baby_sad.json";
import Button from "@/ui/Button";
import Confetti from "@/public/animations/confetti.json";
import getDesireBabyList from "@/lib/getDesireBabyList";
import saveDesireBaby from "@/lib/saveDesireBaby";
import { UserInfoContext } from "@/app/context/userInfoContext";
const HomeModal = () => {
  const audioTuneRef = useRef(null);
  const audioTune = audioTuneRef.current;
  const [userData, setUserData] = useState({});
  const [qualitiesList, setQualitiesList] = useState({});
  const [selectedQualities, setSelectedQualities] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const { state } = useContext(UserInfoContext);
  const desire_baby_list = async (token) => {
    const response = await getDesireBabyList(token);
    setQualitiesList(response);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUserData(data);
    desire_baby_list(data?.token);
  }, []);
  useEffect(() => {
    audioTuneRef.current = new Audio("/audios/bell_sound_quality.wav");
    audioTuneRef.current.load();
  if (selectedQualities.length === 4) {
    setShowConfetti(true);
    audioTune.volume = 0.1;
    audioTune.play();
  } else {
    setShowConfetti(false)
    audioTune?.pause();
  }
}, [selectedQualities])

  function handleQuaityClick(quality) {
    const selectedQuality = selectedQualities.map((quality) => quality.id);
    if (!selectedQuality.includes(quality.id)) {
      setSelectedQualities((prev) => [...prev, { ...quality }]);
    } else {
      setSelectedQualities((prev) =>
        prev.filter((selectedquality) => selectedquality.id !== quality.id)
      );
    }
  }
  const baby_activities = [
    ...new Set(selectedQualities.map((x) => x.activity_id)),
  ]
    .flatMap((str) => str?.split(","))
    .sort((a, b) => parseInt(a) - parseInt(b));

  const desire_baby_activity_guns = [...new Set(baby_activities)].toString();
  const desire_baby_activity = selectedQualities
    .map((x) => x.id)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .toString();
  const handleSubmit = async () => {
   
    const save_desire_baby_response = await saveDesireBaby(userData?.token, {
      desire_baby_activity: desire_baby_activity,
      desire_baby_activity_guns: desire_baby_activity_guns,
    });
    console.log("save_desire_baby_response",save_desire_baby_response);
  };
  return (
    <div className={`home_modal ${state?.data?.user_type == 'planner' && 'hidden' }`}>
      <dialog id="baby_qualities">
        <div className="baby_qualities_container">
          <h1 className="modal_heading">
            what qualities do you want in your child? Tap on the box
          </h1>
          <div className="qualities_wrapper !overflow-x-scroll">
            <div className="qualities_selection">
              {qualitiesList?.data
                ?.map((quality) => {
                  return (
                    <button
                      onClick={() => handleQuaityClick(quality)}
                      className={`quality ${
                        selectedQualities.map((x) => x.id).includes(quality.id)
                          ? "bg-[#e44672] text-white transition-colors"
                          : ""
                      }`}
                      key={quality.id}
                    >
                      {quality.name}
                    </button>
                  );
                })
                .slice(0, qualitiesList?.data?.length / 2)}
            </div>
          </div>
          <div className="selection_ratio_bg">
            <div className="selection_ratio" style={{backgroundImage: `linear-gradient(to top, #ffffff 0%, #e44672 ${selectedQualities.length == 0 ? '150%' : `${100 - selectedQualities.length*25}%`})`}}>
              <Lottie
                animationData={selectedQualities.length ? BabySmile : BabySad}
                className="w-24"
                />
            </div>
          </div>
          
         {showConfetti && <Lottie
            animationData={Confetti}
            className="w-96 absolute top-0 -z-10 bottom-0"
            loop={false}
          />    }   
             <div className="qualities_wrapper !overflow-x-scroll">
            <div className="qualities_selection">
              {qualitiesList?.data
                ?.map((quality) => {
                  return (
                    <button
                      onClick={() => handleQuaityClick(quality)}
                      className={`quality ${
                        selectedQualities.map((x) => x.id).includes(quality.id)
                          ? "bg-[#e44672] text-white transition-colors"
                          : ""
                      }`}
                      key={quality.id}
                    >
                      {quality.name}
                    </button>
                  );
                })
                .slice(qualitiesList?.data?.length / 2 + 1)}
            </div>
          </div>
          <form method="dialog">
            <Button buttonLabel="done" onClick={handleSubmit} />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default HomeModal;
