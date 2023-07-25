"use client";

import { OmChantingContext } from "@/app/context/omChantingContext";
import clsx from "clsx";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";

const OmChanting = () => {
    const {state, dispatch} = useContext(OmChantingContext)
  const audioTuneRef = useRef(null);
  const audioTune = audioTuneRef.current;
  const [playInLoop, setPlayInLoop] = useState(false);
    const [countdown, setCountdown] = useState(0);
    
  const startChanting = useCallback(() => {
      dispatch({
          type: 'TOGGLE_CHANT_STATE',
      })
      setPlayInLoop(true);
  }, [dispatch]);

  //   const pauseSound = useCallback(() => {
  //     if (audioTune) {
  //       audioTune.pause();
  //     }
  //   }, [audioTune]);
  const stopSound = useCallback(() => {
    if (audioTune) {
      audioTune.pause();
      audioTune.currentTime = 0;
    }
  }, [audioTune]);

    const AutoStopChanting = useCallback(() => {
        setTimeout(() => {
            stopSound();
            dispatch({
                type: 'TOGGLE_CHANT_STATE',
                payload: false
            })
        },state.chantDuration)
   },[stopSound, dispatch,state.chantDuration])

 
  const playSound = useCallback(() => {
    if (audioTune) {
      audioTune.play();
    }
  }, [audioTune]);

  useEffect(() => {
    let timer = null;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);
  useEffect(() => {
    if (state.chantingState) {
        playSound();
        AutoStopChanting(state.chantDuration);
    } else {
      stopSound();
    }
  }, [state.chantingState, playSound, stopSound,AutoStopChanting,state.chantDuration]);

  useEffect(() => {
    audioTuneRef.current = new Audio("/audios/long_om_chant.mp3");
    audioTuneRef.current.load();
  }, []);

  useEffect(() => {
    if (audioTune) {
      audioTune.loop = playInLoop;
    }
  }, [playInLoop]);

  return (
    <div className="om_chanting relative z-0 w-full h-[350px] flex justify-center items-center ">
      <div
        className={clsx({
          "hidden transition-all": state.chantingState,
          "chanting_static_background bg-slate-200/30 w-[70%] aspect-square max-h-full rounded-2xl shadow-base absolute z-10 flex items-center justify-center transition-all":
            !state.chantingState,
        })}
      >
        <div className="chanting_static_background absolute grid place-content-center bg-[#DF80E0]/70 w-5/6 aspect-square max-h-full rounded-full m-auto"></div>
        <div className="chanting_static_background absolute grid place-content-center bg-white w-[60%] aspect-square max-h-full rounded-full m-auto"></div>
      </div>

      <div className="chanting_animation_wrapper absolute grid place-content-center z-30 w-full h-full">
        <div
          role="button"
          onClick={startChanting}
          className={clsx("", {
            chanting_animation_active: state.chantingState,
            chanting_animation: !state.chantingState,
          })}
        >
          <p>{state.chantingState ? "stop" : "start"}</p>
          {state.chantingState && (
            <>
              <div
                className={clsx(
                  "bg-red-500 absolute z-10 w-full aspect-square rounded-full grid place-content-center",
                  {
                    "animate-ripple1": state.chantingState,
                  }
                )}
              ></div>
              <div
                className={clsx(
                  "bg-blue-500 absolute z-20 w-full aspect-square rounded-full grid place-content-center",
                  {
                    "animate-ripple2": state.chantingState,
                  }
                )}
              ></div>
              <div
                className={clsx(
                  "bg-green-500 absolute z-30 w-full aspect-square rounded-full grid place-content-center",
                  {
                    "animate-ripple3": state.chantingState,
                  }
                )}
              ></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OmChanting;
