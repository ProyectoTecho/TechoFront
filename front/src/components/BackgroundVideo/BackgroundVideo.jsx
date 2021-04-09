import React from "react";
import videoSource from "../../assets/techo.mp4";
import imgSource from "../../assets/construccion.jpg";

import "./index.css";

const BackgroundVideo = () => {
  return (
    <div>
      <img src={imgSource} alt="" className="img-fluid img-header" />
      <video
        label="720p"
        autoPlay="autoplay"
        loop="loop"
        muted
        className="img-fluid"
        width="100%"
        type="video/mp4"
      >
        <source src={videoSource} />
      </video>
    </div>
  );
};

export default BackgroundVideo;
