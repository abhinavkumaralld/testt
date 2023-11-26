import React from "react";
import homelogo from "../../images/home_logo.png";
import shorts_logo from "../../images/shorts_logo.png";
import subsc_logo from "../../images/subs.png";
import hist_logo from "../../images/history.png";
import urvid_logo from "../../images/ur_video.png";
import wchltr_logo from "../../images/watchltr.png";
import liked_logo from "../../images/like.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Link
          to="/"
          style={{ display: "flex", margin: "0.75rem 1.25rem", width: "10rem" }}
        >
          <img
            style={{ height: "1.5rem", margin: "0.5rem" }}
            src={homelogo}
            alt=""
          />
          <div style={{ alignSelf: "center", fontWeight: "bold" }}>Home</div>
        </Link>
        <Link
          to="/"
          style={{ display: "flex", margin: "0.75rem 1.25rem", width: "10rem" }}
        >
          <img
            style={{ height: "1.5rem", margin: "0.5rem" }}
            src={shorts_logo}
            alt=""
          />
          <div style={{ alignSelf: "center", fontWeight: "bold" }}>Shorts</div>
        </Link>
        <Link
          to="/"
          style={{ display: "flex", margin: "0.75rem 1.25rem", width: "10rem" }}
        >
          <img
            style={{ height: "1.5rem", margin: "0.5rem" }}
            src={subsc_logo}
            alt=""
          />
          <div style={{ alignSelf: "center", fontWeight: "bold" }}>
            Subscriptions
          </div>
        </Link>
      </div>
      <hr style={{ margin: "0.5rem 1.25rem", width: "10rem" }} />
      <div>
        <div
          style={{ display: "flex", margin: "0.75rem 1.25rem", width: "10rem" }}
        >
          <img
            style={{ height: "1.5rem", margin: "0.5rem" }}
            src={hist_logo}
            alt=""
          />
          <div style={{ alignSelf: "center", fontWeight: "bold" }}>History</div>
        </div>
        <div
          style={{ display: "flex", margin: "0.75rem 1.25rem", width: "10rem" }}
        >
          <img
            style={{ height: "1.5rem", margin: "0.5rem" }}
            src={urvid_logo}
            alt=""
          />
          <div style={{ alignSelf: "center", fontWeight: "bold" }}>
            Your videos
          </div>
        </div>
        <div
          style={{ display: "flex", margin: "0.75rem 1.25rem", width: "10rem" }}
        >
          <img
            style={{ height: "1.5rem", margin: "0.5rem" }}
            src={wchltr_logo}
            alt=""
          />
          <div style={{ alignSelf: "center", fontWeight: "bold" }}>
            Watch later
          </div>
        </div>
        <div
          style={{ display: "flex", margin: "0.75rem 1.25rem", width: "10rem" }}
        >
          <img
            style={{ height: "1.5rem", margin: "0.5rem" }}
            src={liked_logo}
            alt=""
          />
          <div style={{ alignSelf: "center", fontWeight: "bold" }}>
            Liked videos
          </div>
        </div>
        <div
          style={{ display: "flex", margin: "0.75rem 1.25rem", width: "10rem" }}
        >
          <img
            style={{ height: "1.5rem", margin: "0.5rem" }}
            src={shorts_logo}
            alt=""
          />
          <div style={{ alignSelf: "center", fontWeight: "bold" }}>
            Show More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
