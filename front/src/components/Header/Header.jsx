import React from "react";
import "./index.css";
import { Link } from "react-scroll";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo"

export default function Header() {
  return (
    <>
    <BackgroundVideo />
      {/* <img src={imagen} alt="" className="img-fluid" /> */}
      {/* <img
        src="https://www.techo.org/UY/assets/images/background/header.jpg"
        alt=""
        className="img-fluid"
      /> */}
      
      <div className="botonDona">
        <span className=" btnHover">
          <Link to="dona" smooth duration={1000}>
            <button className="btn" type="submit">
              <span className="letraBtn">Doná</span>
            </button>
          </Link>
        </span>
      </div>
    </>
  );
}
