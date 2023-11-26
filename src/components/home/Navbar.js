import React from "react";
import { Link } from "react-router-dom";
import threeline from "../../images/threelines.png";
import utlogo from "../../images/yt_logo.png";
import createlogo from "../../images/utube_create_icon.png";
import bell from "../../images/ut_ball_icon.png";
import logo_search from "../../images/logo_search.png";
import Store from "../../redux/Store";
import { toggleSideBar } from "../../redux/Slice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handletoggle = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
      <div style={{ gridColumn: "span 2", margin: "4px" }}>
        <img
          style={{ alignSelf: "center", height: "24px", cursor: "pointer" }}
          src={threeline}
          alt="ImgNotFound"
          onClick={handletoggle}
        />
        <Link to="/">
          <img
            style={{
              alignSelf: "center",
              height: "56px",
              paddingLeft: "16px",
              cursor: "pointer",
            }}
            src={utlogo}
            alt="ImgNotFound"
          />
        </Link>
      </div>
      <div
        style={{ gridColumn: "span 8", display: "flex", paddingLeft: "32px" }}
      >
        <input
          style={{
            height: "40px",
            width: "66.66%",
            borderRadius: "0.5rem 0 0 0.5rem",
            alignSelf: "center",
            boxShadow: "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            border: "1px solid #000",
            paddingLeft: "1rem",
          }}
          type="text"
          placeholder="For more videos, edit ServeVideos file and use YouTube API"
        />
        <button
          style={{
            height: "40px",
            width: "56px",
            borderRadius: "0 0.5rem 0.5rem 0",
            alignSelf: "center",
            border: "1px solid #000",
            backgroundColor: "#f0f4f8",
          }}
        >
          <img
            style={{ height: "24px", margin: "auto" }}
            src={logo_search}
            alt=""
          />
        </button>
      </div>
      <div
        style={{
          gridColumn: "span 2",
          justifyContent: "end",
          paddingRight: "32px",
          display: "flex",
        }}
      >
        <img
          style={{ alignSelf: "center", height: "40px", paddingLeft: "20px" }}
          src={createlogo}
          alt="ImgNotFound"
        />
        <img
          style={{ alignSelf: "center", height: "24px", paddingLeft: "20px" }}
          src={bell}
          alt="ImgNotFound"
        />
        <span
          style={{
            alignSelf: "center",
            height: "32px",
            width: "32px",
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }}
        >
          A
        </span>
      </div>
    </div>
  );
};

export default Navbar;
