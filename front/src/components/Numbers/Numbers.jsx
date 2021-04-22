import React from "react";
import "./index.css";
import CountUp from "react-countup";

export default function Numbers() {
  return (
    <>
      <div className="numbers ">
        <div className="numbers__info pt-5">
          <div className="numbers__textCenter">
            
            <h2>TECHO </h2>
            <h3> SUMATE!</h3>
            <p>
              personas como vos nos permiten ponernos en accion ante la urgencia <br/>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </span>
            </p>
          </div>

          <div className="numbers__infoLeft">
            <div className="numbers__items">
              <CountUp
                start={0}
                end={165.0}
                delay={0}
                duration={4}
                decimal="."
                decimals={3}
                prefix="+"
                className=""
              >
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <span ref={countUpRef} />
                    <h5 ref={countUpRef} className="numbers__num">
                      {" "}
                    </h5>
                  </div>
                )}
              </CountUp>
              <p>
                {" "}
                voluntarios/as que se movilizaron en Argentina en construcciones
                y eventos masivos.
              </p>
            </div>

            <div className="numbers__items">
              <CountUp
                start={0}
                end={15.6}
                delay={0}
                duration={4}
                decimal="."
                decimals={3}
                prefix="+"
                className=""
              >
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <span ref={countUpRef} />
                    <h5 ref={countUpRef} className="numbers__num">
                      {" "}
                    </h5>
                  </div>
                )}
              </CountUp>
              <p>
                {" "}
                viviendas de emergencia
                construidas en los asentamientos
              </p>
            </div>
          </div>

          <div className="numbers__infoCenter">
            <div className="numbers__items">
              <CountUp
                start={0}
                end={25.0}
                delay={0}
                duration={4}
                decimal="."
                decimals={3}
                prefix="+"
              >
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <h5 ref={countUpRef} className="numbers__num">
                      {""}
                    </h5>
                  </div>
                )}
              </CountUp>
              <p>socios/as que comparten nuestra visión</p>
            </div>

            <div className="numbers__items">
              <CountUp start={0} end={690} delay={0} duration={4} prefix="+">
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <h5 ref={countUpRef} className="numbers__num">
                    {""}
                    </h5>
                  </div>
                )}
              </CountUp>
              <p>
                voluntarios/as realizan un trabajo permanente en los barrios
              </p>
            </div>
          </div>

          <div className="numbers__infoRight">
            <div>
              <div className="numbers__items">
                <CountUp start={0} end={80} delay={0} duration={6} prefix="+">
                  {({ countUpRef }) => (
                    <div>
                      <span />
                      <h5 ref={countUpRef} className="numbers__num">
                      {""}
                      </h5>
                    </div>
                  )}
                </CountUp>
                <p>
                  asentamientos en donde estamos trabajando, 58 de ellos con
                  mesas de trabajo activas
                </p>
              </div>
            </div>

            <div className="">
              <div className="numbers__items">
                <CountUp start={0} end={150} delay={0} duration={5} prefix="+">
                  {({ countUpRef }) => (
                    <div>
                      <span />
                      <h5 ref={countUpRef} className="numbers__num">
                      {""}
                      </h5>
                    </div>
                  )}
                </CountUp>
                <p>proyectos de infraestructura y mejoramiento de hábitat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
