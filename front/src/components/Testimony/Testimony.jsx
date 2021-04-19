import React from "react";
import "./index.css";
import testimonio from "../../assets/testimonio-min.jpg";
import testimonio1 from "../../assets/testimonio1-min.jpg";
import testimonio2 from "../../assets/testimonio2-min.jpg";
import testimonio3 from "../../assets/testimonio3-min.jpg";

export default function Testimony() {
  return (
    <>
      <div className="text-testimony">
        <p>¡TE HABLAN A VOS!</p>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner p-5">
          <div className="container">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <p>
                    "Sigamos trabajando con más fuerza que nunca para construir
                    una nueva normalidad donde todas las personas tengan un
                    lugar seguro y se cumplan todos sus derechos."
                  </p>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <p>viviendas de emergencia construidas en asentamientos.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
                  <img className="w-50" src={testimonio} alt="First slide" />
                </div>
                <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
                  <img className="w-50" src={testimonio1} alt="Second slide" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <p>
                    "Sigamos trabajando con más fuerza que nunca para construir
                    una nueva normalidad donde todas las personas tengan un
                    lugar seguro y se cumplan todos sus derechos."
                  </p>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <p>viviendas de emergencia construidas en asentamientos.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
                  <img className="w-50" src={testimonio2} alt="First slide" />
                </div>
                <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
                  <img className="w-50" src={testimonio3} alt="Second slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
