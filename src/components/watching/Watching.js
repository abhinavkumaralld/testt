import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import ServeSuggestion from "../suggestions/ServeSuggestion";
import Sidebar from "../home/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Slice, { toggleSideBar } from "../../redux/Slice";
import ServeComments from "./ServeComments";

const Watching = () => {
  const [watchinginfo, setwatchinginfo] = useOutletContext();
  const isSideBar = useSelector((Store) => Store.Slice.isSideBar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSideBar) dispatch(toggleSideBar());
  }, []);

  const [isfull, setisfull] = useState(false);
  const [isFullDescrp, setisFullDescrp] = useState("");

  const handleisfull = () => setisfull(!isfull);

  useEffect(() => {
    if (isfull) setisFullDescrp({});
    else {
      setisFullDescrp({
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      });
      window.scrollTo(620, 620);
    }
  }, [isfull]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (watchinginfo !== undefined)
    localStorage.setItem("watchinginfo", JSON.stringify(watchinginfo));

  let video = watchinginfo;

  if (video === undefined) {
    video = JSON.parse(localStorage.getItem("watchinginfo"));
  }

  let Text = video.snippet.description.split("\n");

  let newText = Text.map((val, ind) => {
    const pattern1 = new RegExp("HTTPS:");
    const pattern2 = new RegExp("https:");
    const pattern3 = new RegExp("#");

    if (val === "") return <br key={ind}></br>;
    else if (pattern1.test(val) || pattern2.test(val) || pattern3.test(val))
      return (
        <a key={ind} href="#" style={{ color: "#3182ce" }}>
          {val}
        </a>
      );
    else return <p key={ind}>{val}</p>;
  });

  return (
    <div style={{ display: "flex" }}>
      <div>{isSideBar && <Sidebar />}</div>
      <div
        style={{
          marginTop: "1.5rem",
          marginLeft: "4rem",
          marginRight: "0.5rem",
        }}
      >
        <iframe
          width="910"
          height="540"
          src={
            "https://www.youtube.com/embed/" + useParams().id + "?autoplay=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div style={{ paddingLeft: "0.625rem", marginTop: "0.75rem" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.125rem" }}>
            {video?.snippet?.title.slice(0, 80)}
          </div>
          <div style={{ color: "#718096" }}>{video?.snippet?.channelTitle}</div>
          <div style={{ display: "flex" }}>
            <div>{video?.statistics?.viewCount} views .</div>
            <div style={{ paddingLeft: "0.125rem" }}>
              {video?.snippet?.publishedAt}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "910px",
            border: "1px solid #000",
            borderRadius: "0.375rem",
            background: "#cbd5e0",
          }}
        >
          <div
            style={{ marginLeft: "0.625rem", width: "910px", ...isFullDescrp }}
          >
            {newText}
          </div>
          <button
            style={{ marginLeft: "0.625rem", fontWeight: "bold" }}
            onClick={handleisfull}
          >
            {isfull ? "Show Less" : "Show More"}
          </button>
        </div>
        <ServeComments />
      </div>
      <div>
        <ServeSuggestion />
      </div>
    </div>
  );
};

export default Watching;
