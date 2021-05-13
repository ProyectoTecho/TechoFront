import React from "react";
import "./index.css";
import testimonio1 from "../../assets/Gaby-testimonios.jpg";
import testimonio2 from "../../assets/testimonio.jpg";
import testimonio3 from "../../assets/Ara-testimonio.jpg";
import testimonio4 from "../../assets/Yolanda.jpg";


export default function Testimony() {
  return (
    <div className='container testimonios'>
      <div id="testimonios">
        
        <div
          id="carouselExampleControls"
          className="carousel slide m-5"
          data-ride="carousel"
        >
       
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-sm-12 col-lg-4 d-flex justify-content-center">
                    <img
                      className="testimony-img"
                      src={testimonio1}
                      alt="Testimonio 1"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-8">
                    <div className="card-body testimony__text">
                      <h5 className="card-title text-center font-weight-bold">
                        Voluntaria: Gabriela Arrastúa
                      </h5>
                      <p className="card-text text-justify text-center mt-5">
                        "Acompañar a los vecinos y vecinas de la Mesa de Trabajo
                        es una de las cosas que más disfruto en mi día a día. Ir
                        al barrio, encontrarme con quienes participan del
                        espacio y entre todos y todas pensar soluciones para los
                        problemas que existen, pero también compartir ,
                        conocernos y formar un equipo, tienen un impacto muy
                        positivo en mi vida: no solo logro poner al servicio mis
                        conocimientos y experiencias, sino también aprender de
                        las demás personas que participan. Creo que en esa
                        construcción popular de saber está la verdadera
                        transformación hacia una sociedad más justa".
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="carousel-item">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-sm-12 col-lg-4 d-flex justify-content-center">
                    <img
                      className="testimony-img"
                      src={testimonio2}
                      alt="Testimonio 2"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-8">
                    <div className="card-body testimony__text">
                      <h5 className="card-title text-center font-weight-bold">
                        Socia de TECHO: María Aguirre
                      </h5>
                      <p className="card-text text-justify text-center mt-5">
                        "Dono en TECHO porque me duele en el alma ver la
                        realidad de otras personas. No es mucho lo que doy pero
                        lo doy de corazón. No doy porque me sobra, doy porque
                        quiero ayudar y colaborar con un pequeño granito de
                        arena".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-sm-12 col-lg-4 d-flex justify-content-center">
                    <img
                      className="testimony-img"
                      src={testimonio3}
                      alt="Testimonio 3"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-8">
                    <div className="card-body testimony__text">
                      <h5 className="card-title text-center font-weight-bold">
                        Referenta comunitaria barrio Lagomarsino: Araceli
                        Ledesma
                      </h5>
                      <p className="card-text text-center text-justify mt-5">
                        "Para la mesa de trabajo del barrio, TECHO significa
                        mucho porque se ocupa de la comunidad para un mejor
                        hábitat y de que cada individuo se vea como sujeto de
                        derecho, desarrolle sus capacidades, se empodere y
                        crezca como persona a nivel profesional. Las capacidades
                        comunitarias y el empoderamiento de los vecinos es lo
                        que más resalto de la organización".
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="carousel-item">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-sm-12 col-lg-4 d-flex justify-content-center">
                    <img
                      className="testimony-img"
                      src={testimonio4}
                      alt="Testimonio 4"
                    />
                  </div>
                  <div className="col-sm-12 col-lg-8 ">
                    <div className="card-body testimony__text">
                      <h5 className="card-title text-center font-weight-bold">
                        Vecina en construcción: Yolanda Ortiz
                      </h5>
                      <p className="card-text text-center text-justify mt-5">
                        "Estaba viviendo en una situación inhumana, en silla de
                        ruedas por problemas de salud. Mi casa era de chapa y
                        madera, goteaba y vivía mal. Estaba lleno de humedad y
                        me entraba el agua. Con esta casita estoy muy
                        agradecida. Salí a flote, estoy bien. Teníamos una
                        emoción terrible porque nos sacó todos los problemas que
                        teníamos en la vivienda. Es una alegria tremenda vivir
                        confortable y vivir bien".
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
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
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    
  );
}
