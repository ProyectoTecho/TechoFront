import React from "react";
import "./index.css";

const CarrouselTestimony = () => {
  return (
    <>
      <div className="carrousel">
        <h2>Testimonios</h2>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <ul className="slides">
              <div className="carousel-item active">
                <li className="slide">
                  <p>
                    <q>It was a pleasure to work with him</q>
                    <span className="author">
                      <img src="https://th.thgim.com/news/international/m1m01s/article26984481.ece/alternates/FREE_300/30TH-TOLKIEN" />
                      JR Tolkien
                    </span>
                  </p>
                </li>{" "}
              </div>
              <div className="carousel-item">
                <li className="slide">
                  <p>
                    <q>He is a good friend of mine</q>
                    <span className="author">
                      <img src="https://i.pinimg.com/736x/3f/c5/87/3fc587af121759209c53132a71c03c97--record-player-swing.jpg" />
                      Sinatra
                    </span>
                  </p>
                </li>{" "}
              </div>
              <div className="carousel-item">
                <li className="slide">
                  <p>
                    <q>This is pretty cool</q>
                    <span className="author">
                      <img src="https://pbs.twimg.com/profile_images/1832861297/GordonShumway12.jpg" />
                      Alf
                    </span>
                  </p>
                </li>{" "}
              </div>
              <div className="carousel-item">
                <li className="slide">
                  <p>
                    <q>This is awesome. Only Css you say?</q>
                    <span className="author">
                      <img src="http://www.claudiobernasconi.ch/wp-content/uploads/2014/03/github_octocat-300x300.jpg" />
                      The octocat
                    </span>
                  </p>
                </li>{" "}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrouselTestimony;
