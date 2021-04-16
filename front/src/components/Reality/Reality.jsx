import React from "react";
import "./index.css";

const Reality = () => {
  return (
    <>
      <div className="container-fluid reality-center">
      {/* <h2 className="reality-title">LA URGENCIA NO ESPERA</h2> */}
        <div className="row">
          <div className="card-bg bolitas-left img-reality col-lg-6 col-sm-6 col-xs-12">
            <div className="card-body">
              <h5 className="card-title2">72%</h5>

              <p className="card-text reality-text">
                Sin acceso formal al servicio de energía eléctrica
              </p>

            </div>
          </div>
          <div className="card-bg img-reality  col-lg-6 col-sm-6 col-xs-12">
            <div className="card-body ">
              <h5 className="card-title2 bolitas-right">94%</h5>
              <p className="card-text reality-text">
                Sin acceso formal a la red de agua potable
              </p>
            </div>
          </div>
          <div className="card-bg bolitas-left img-reality col-lg-6 col-sm-6 col-xs-12">
            <div className="card-body">
              <h5 className="card-title2">98%</h5>
              <p className="card-text reality-text">Sin acceso formal a la red cloacal</p>
            </div>
          </div>
          <div className="card-bg img-reality  col-lg-6 col-sm-6 col-xs-12">
            <div className="card-body">
              <h5 className="card-title2 bolitas-right">60%</h5>
              <p className="card-text reality-text">Se inunda cada vez que llueve</p>
            </div>
          </div>
        </div>
      {  <h2 className="reality-title reality-footer">EN ARGENTINA HAY 4400 BARRIOS POPULARES QUE VIVEN ESTA REALIDAD CADA DÍA</h2>}
      </div>
    </>
  );
};

export default Reality;
