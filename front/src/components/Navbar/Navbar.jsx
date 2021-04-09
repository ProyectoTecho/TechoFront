import React from "react";
import { Link } from "react-scroll";
import "./index.css";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").style.backgroundColor =
      "rgb(0, 146, 221)";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbarProp navbar-dark"
      id="header"
    >
      <a className="navbar-brand" href="http://localhost:3000/">
        <img
          src="https://www.techo.org/UY/assets/images/logo_1.png"
          alt="techo"
        />

        {/* segunda imagen que cambia de color al hacer scroll */}

        <img
          src="assets/images/logo_2.png"
          className="logo logo-scrolled m-top-10"
          alt=""
        />
      </a>
      <button
        className="navbar-toggler text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span className="nav-link text-white whiteHover">
              Inicio <span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link text-white whiteHover">
              <Link to="testimonios" smooth duration={1000}>
                Testimonios
              </Link>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link text-white whiteHover">
              <Link to="contacto" smooth duration={1000}>
                Contacto
              </Link>
            </span>
          </li>
          <li className="nav-item dropdown"></li>
        </ul>
        {/*     <div className="botonDona">
        <span className=" btnHover">
          <Link to="dona" smooth duration ={1000}>
          <button className="btn" type="submit" >
            <span className="letraBtn">Doná</span>
            
          </button>
        
          </Link>
        </span>
        </div> */}
      </div>
    </nav>
  );
}
