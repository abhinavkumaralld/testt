import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const SuggestionCard = ({ videoCard }) => {
  const [watchinginfo, setwatchinginfo] = useOutletContext();

  const handleWatch = () => {
    setwatchinginfo(videoCard);
    // console.log(videoCard.id);
  };

  return (
    <div
      style={{ display: "flex", paddingLeft: "0.5rem", marginTop: "0.5rem" }}
    >
      <Link to={"../watch/" + videoCard.id} onClick={handleWatch}>
        <img
          style={{ borderRadius: "0.25rem", width: "11rem" }}
          src={videoCard?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "0.5rem",
          overflow: "hidden",
          width: "14.375rem",
        }}
      >
        <div
          style={{ fontWeight: "bold", maxWidth: "5rem", fontSize: "0.875rem" }}
        >
          {videoCard?.snippet?.title.slice(0, 30) + "..."}
        </div>
        <div style={{ color: "#718096", fontSize: "0.875rem" }}>
          {videoCard?.snippet?.channelTitle}
        </div>
        <div style={{ display: "flex", fontSize: "0.875rem" }}>
          <div>{videoCard?.statistics?.viewCount} views .</div>
          <div style={{ paddingLeft: "0.125rem" }}>
            {videoCard?.snippet?.publishedAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
