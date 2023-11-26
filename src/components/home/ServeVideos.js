import React, { useState, useEffect } from "react";
// import MY_UT_API from "../../utils/Constants";
import data from "../tempdata/Temp";
import VideoCard from "./VideoCard";
import BodyBar from "./BodyBar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Store from "../../redux/Store";
import Slice from "../../redux/Slice";

const ServeVideos = () => {
  const [videos, setVideos] = useState([]);
  const isSideBar = useSelector((Store) => Store.Slice.isSideBar);

  const addvideos = async () => {
    //UNCOMMENT BELOW PART FOR THE REAL TIME UT_API VIDEOS
    const key = "AIzaSyC-jdpDKuZDMmnat8RyHQj499wUCTCdM4o";
    const fetchedvideos = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=40&key=" +
        key
    );
    const parsed = await fetchedvideos.json();
    setVideos(parsed.items);
    // setVideos(data.items);
  };

  useEffect(() => {
    addvideos();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div>{isSideBar && <Sidebar />}</div>
      <div>
        <BodyBar />
        <div style={{ display: "flex", margin: "16px", flexWrap: "wrap" }}>
          {videos.map((val, ind) => (
            <VideoCard key={val.id} video={val}></VideoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServeVideos;
