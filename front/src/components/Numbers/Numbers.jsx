import React from "react";
import "./index.css";
import CountUp from "react-countup";

export default function Numbers() {


  return (
    <>
      <div className="justify-content-md-center mb-5 background-numbers" >
        <div className="row justify-content-md-center mt-5 ">
          <div className="cardBox col-xl-4">
            <div className="card-body ">
              <CountUp
                start={0}
                end={165.0}
                delay={0}
                duration={4}
                decimal="."
                decimals={3}
                prefix="+"
                className=''
              >
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <span ref={countUpRef} />

                    <h5 ref={countUpRef} className="card-title cardNumber"> {" "}</h5>
                  </div>
                )}
              </CountUp>
              <p className="cardText">
                {" "}
                voluntarios/as que se movilizaron en Argentina en construcciones
                y eventos masivos.
              </p>
            </div>
          </div>
          <div className="cardBox col-xl-4">
            <div className="card-body ">
              <CountUp
                start={0}
                end={15.600}
                delay={0}
                duration={4}
                decimal="."
                decimals={3}
                prefix="+"
                className=''
              >
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <span ref={countUpRef} />

                    <h5 ref={countUpRef} className="card-title cardNumber"> {" "}</h5>
                  </div>
                )}
              </CountUp>
              <p className="cardText">
                {" "}
                voluntarios/as que se movilizaron en Argentina en construcciones
                y eventos masivos
              </p>
            </div>
          </div>
          <div className="cardBox col-xl-4">
            <div className="card-body">
              <CountUp
                start={0}
                end={25.000}
                delay={0}
                duration={4}
                decimal="."
                decimals={3}
                prefix="+"
              >
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <h5 ref={countUpRef} className="card-title cardNumber"> {" "}</h5>
                  </div>
                )}
              </CountUp>
              <p className="cardText">
                socios/as que comparten nuestra visión
              </p>
            </div>
          </div>
          <div className="cardBox col-xl-4 ">
            <div className="card-body">
              <CountUp start={0} end={690} delay={0} duration={4}  prefix="+">
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <h5 ref={countUpRef} className="card-title cardNumber">{" "}</h5>
                  </div>
                )}
              </CountUp>
              <p className="cardText">
                voluntarios/as realizan un trabajo permanente en los barrios
              </p>
            </div>
          </div>
          <div className="cardBox col-xl-4">
            <div className="card-body ">
              <CountUp start={0} end={80} delay={0} duration={6}  prefix="+">
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <h5 ref={countUpRef} className="card-title cardNumber">{" "}</h5>
                  </div>
                )}
              </CountUp>
              <p className="cardText">
                asentamientos en donde estamos trabajando, 58 de ellos con mesas
                de trabajo activas
              </p>
            </div>
          </div>
          <div className="cardBox col-xl-4">
            <div className="card-body">
              <CountUp start={0} end={150} delay={0} duration={5} prefix="+" >
                {({ countUpRef }) => (
                  <div>
                    <span />
                    <h5 ref={countUpRef} className="card-title cardNumber">{" "}</h5>
                  </div>
                )}
              </CountUp>
              <p className="cardText">
                proyectos de infraestructura y mejoramiento de hábitat
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
