import React from "react";
import "./index.css";
// import testimonio1 from "../../assets/testimonio_1.jpeg";
import testimonio2 from "../../assets/testimonio_2.jpeg";
import testimonio3 from "../../assets/testimonio2-min.jpg";
import testimonio4 from "../../assets/testimonio3-min.jpg";

export default function Testimony() {
  return (
   
    <div className="bg-secondary" id="testimonios">
      <div className="text-testimony">
        <p>¡TE HABLAN A VOS!</p>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide m-5"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-sm-12 col-md-8 d-flex justify-content-center">
                  <img src="https://lh4.googleusercontent.com/EoQpzXxvPn4HnC7MzVtURPyK2mfSzX7Ao9_bbQ_Spe9-q_CofpwWb8F-15hngLCHVw-CyQgpLfTWq3izifavcihUdSRF44aKsKWEWV_ETz9ZCo5aQszP8z4JEonZlADqV_s1Mlv6" alt="Testimonio 1" />
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">Voluntaria: Gabriela Arrastúa</h5>
                    <p className="card-text">
                    Acompañar a los vecinos y vecinas de la Mesa de Trabajo es una de las cosas que más disfruto en mi día a día. Ir al barrio, encontrarme con quienes participan del espacio y entre todos y todas pensar soluciones para los problemas que existen, pero también compartir , conocernos y formar un equipo, tienen un impacto muy positivo en mi vida: no solo logro poner al servicio mis conocimientos y experiencias, sino también aprender de las demás personas que participan. Creo que en esa construcción popular de saber está la verdadera transformación hacia una sociedad más justa.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Referenta comunitaria barrio Lagomarsino: Araceli Ledesma</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="carousel-item">
          <div className="card mb-3">
              <div className="row g-0">
                <div className="col-sm-12 col-md-8 d-flex justify-content-center">
                  <img src={testimonio2} alt="Testimonio 2" />
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                    Para  la mesa de trabajo del barrio, TECHO significa mucho porque se ocupa de la comunidad para un mejor hábitat y de que cada individuo se vea como sujeto de derecho, desarrolle sus  capacidades, se empodere y crezca  como persona a nivel profesional. Las  capacidades comunitarias y el empoderamiento de los vecinos es lo que más resalto de la organización.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="carousel-item">
          <div className="card mb-3">
              <div className="row g-0">
                <div className="col-sm-12 col-md-8 d-flex justify-content-center">
                  <img src={testimonio3} alt="Testimonio 3" />
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="carousel-item">
          <div className="card mb-3">
              <div className="row g-0">
                <div className="col-sm-12 col-lg-8 d-flex justify-content-center">
                  <img src={testimonio4} alt="Testimonio 4" />
                </div>
                <div className="col-sm-12 col-lg-4 ">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <a
          className="carousel-control-prev "
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    
  );
}
