"use client";

import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import BookCard from "@/ui/BookCard";
import SearchBar from "@/ui/SearchBar";
import LockIcon from "@/public/icons/ic_lock.svg";
import dynamic from "next/dynamic";
import getSessionCategoryDetial from "@/lib/getSessionCategoryDetail";
const VideoPlayer = dynamic(() => import("@/ui/VideoPlayer"));

const items = [];
const videoLinks = [
  "https://player.vimeo.com/video/824983833?h=969f03a20c",
  "https://youtu.be/LVbUNRwpXzw",
  "https://player.vimeo.com/video/824983833?h=969f03a20c",
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s",
];
const Page = () => {
  const [sessions, setSessions] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const params = useParams();
  console.log('====================================');
  console.log('params',params);
  console.log('====================================');
  const session_category_detail = async () => {
    const data = JSON.parse(localStorage.getItem('user'))
    const response = await getSessionCategoryDetial(data?.token, params?.slug)
    console.log("response", response)
    setSessions(response?.data)
  }
  useEffect(() => {
    session_category_detail()
  }, [])
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //       setSeconds((seconds) => seconds + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  const handleStop = () => {
      clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleClick = () => {
    setSeconds(0);
  };
  const [url, setUrl] = useState("");
  const playerConfig = {
    vimeo: {
      playerOptions: {
        fullscreen: false,
      },
    },
  };
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const query = event.target.value;
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };
  return (
    <section id="sessions_list" style={{height: 'calc(100% - 64px)'}} className="pt-3">
      {url !== "" && (
        <div className="player-wrapper relative w-full aspect-video max-h-52 mb-2">
          <VideoPlayer
            url={url}
            playerConfig={playerConfig}
            handleStop={handleStop}
            handleStart={handleClick}
          />
        </div>
      )}
      <div className="wrapper_container w-full px-3 flex flex-col h-full items-start" >
        <SearchBar onChange={handleSearch} />
        <div className="session_list w-full overflow-y-scroll overflow-x-visible px-3" style={{height: url !== "" && 'calc(100% - 272px)'}}>
        <div className="session_container flex flex-col py-5 gap-3 items-center justify-between w-full mt-3">
          {sessions.map((video, i) => (
            <React.Fragment key={video.key}>
              <div
                className="relative w-full"
                role="button"
                onClick={() => {
                  setUrl(video.url);
                }}
              >
                <LockIcon className="absolute -top-2 -right-2" fill="#e44672" />
                <BookCard thumbnail_image={video.thumbnail_image} header_text={video.title} middle_text={video.sub_title} key={video.key} />
              </div>
            </React.Fragment>
          ))}
          </div>
          </div>
      </div>
    </section>
  );
};

export default Page;
