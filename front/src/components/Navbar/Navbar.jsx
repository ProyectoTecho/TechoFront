import React from "react";
import { Link } from "react-scroll";
import logotecho from "../../assets/logotecho.png";
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
      <a className="navbar-brand logo-techo-margin" href="https://www.techo.org/" target="_blank" rel="noopener noreferrer"
>
        <img
          src={logotecho}
          alt="techo"
          className='img-logo-size'
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
          <li className="nav-item active ">
            <span className="nav-link text-white whiteHover">
            <Link to="inicio"  offset={50} smooth duration={1000}>
              Inicio <span className="sr-only">(current)</span>
              </Link>
            </span>
          </li>
          <li className="nav-item ">
            <span className="nav-link text-white whiteHover">
              <Link to="testimonios" offset={-200} smooth duration={1000}>
                Nosotros/as
              </Link>
            </span>
          </li>
          <li className="nav-item ">
            <span className="nav-link text-white whiteHover">
              <Link to="contacto" offset={50} smooth duration={1000}>
                Contacto
              </Link>
            </span>
          </li>
          <li className="nav-item dropdown"></li>
        </ul>
      </div>
    </nav>
  );
}
