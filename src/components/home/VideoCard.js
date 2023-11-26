import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const VideoCard = ({ video }) => {
  const [watchinginfo, setwatchinginfo] = useOutletContext();

  const handleWatch = () => {
    setwatchinginfo(video);
  };

  return (
    <div style={{ padding: "0.625rem" }}>
      <Link to={"watch/" + video.id} onClick={handleWatch}>
        <img
          style={{ borderRadius: "0.125rem" }}
          src={video?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
      </Link>
      <div style={{ fontWeight: "bold", maxWidth: "5rem" }}>
        {video?.snippet?.title.slice(0, 40)}
      </div>
      <div style={{ color: "#718096" }}>{video?.snippet?.channelTitle}</div>
      <div style={{ display: "flex" }}>
        <div>{video?.statistics?.viewCount} views .</div>
        <div style={{ paddingLeft: "0.125rem" }}>
          {video?.snippet?.publishedAt}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
