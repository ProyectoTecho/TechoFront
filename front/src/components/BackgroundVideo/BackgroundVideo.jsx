import React from "react";
import videoSource from "../../assets/techo.mp4";
import imgSource from "../../assets/construccion.jpg";
import { Link } from "react-scroll";

import "./index.css";

const BackgroundVideo = () => {
  return (
    <>
      <div className="header__video">
        <img
          src={imgSource}
          alt=""
          className="img-fluid img-header"
          type="video/mp4"
        />
        <video
          id="myVideo"
          label="720p"
          autoPlay="autoplay"
          loop="loop"
          muted
          className="img-fluid header__video"
          width="100%"
          type="video/mp4"
        >
          <source src={videoSource} />
        </video>

        <h1>
          <span className="header__spanLeft"> Poné a </span> TECHO
          <span className="header__spanRight">
            en acción
            </span>{" "}
            <span className="header__spanArrow">
              <Link to="techoInicio" offset={-60} smooth duration={1000}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  color="white"
                  fill="currentColor"
                  className="bi bi-arrow-down-circle "
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                  />
                </svg>
              </Link>
          </span>
     
        </h1>
        <div></div>
      </div>
    </>
  );
};

export default BackgroundVideo;
