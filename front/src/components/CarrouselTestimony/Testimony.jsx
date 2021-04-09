import React from "react";
import "./index.css";
import testimonio from "../../assets/testimonio.JPG";
import testimonio1 from "../../assets/testimonio1.JPG";
import testimonio2 from "../../assets/testimonio2.JPG";
import testimonio3 from "../../assets/testimonio3.JPG";

export default function Testimony() {
  return (
    <>
    <div className="container" id="testimonios">

    
      <div className="container-fluid justify-content-md-center mb-5">
        <h2 className="title">Testimonios</h2>
        <div className="row  justify-content-md-center mt-5">
          <div className="cardBox col-md-3  cardBackground">
            <img src={testimonio} class="card-img-top mt-2 " alt="..." />
            <div className="card-body">
              <p className="cardText">
                "Sigamos trabajando con más fuerza que nunca para construir una nueva normalidad donde todas las personas tengan un lugar seguro y se cumplan todos sus derechos."
              </p>
            </div>
          </div>
          <div className="cardBox col-md-3">
            <img src={testimonio1} class="card-img-top mt-2" alt="..." />
            <div className="card-body">
              <p className="cardText">
                viviendas de emergencia construidas en asentamientos.
              </p>
            </div>
          </div>
          <div className="cardBox col-md-3 cardBackground">
            <img src={testimonio2} class="card-img-top mt-2" alt="..." />
            <div className="card-body">
              <p className="cardText">
                ¿Qué te impulsó a ser voluntario? <br/>
                "...los ojos vidriosos de lagrimas de los niños
                cuando reciben una sorpresa. La felicidad de los ancianos al
                sentirse no olvidado.. cosas que llenan el alma.»
              </p>
            </div>
          </div>
          <div className="cardBox col-md-3">
            <img src={testimonio3} class="card-img-top mt-2" alt="..." />
            <div className="card-body">
              <p className="cardText">
              “No alcanza con soñar una Argentina más justa, hay que levantarse y construirla”.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
