import React from "react";
import "./index.css";

const Reality = () => {
  return (
    <>
    
        <div className="container-fluid reality-center ">
     {/*    <div className=""> hola </div> */}
          <div className="container map-background" >
            <div className="row align-pelotitas">

              <h5 className="card-title2">72%</h5>
              <div className="img-reality col-lg-3 col-sm-6 col-xs-12">
                <div className="">
                  <div className="card-text reality-text left-text-bolitas">
                    Sin acceso formal al servicio de energía eléctrica
                  </div>
                </div>
              </div>

              <div className="img-reality  col-lg-3 col-sm-3 col-xs-12">
                <div className=" ">
                  <div className="card-text reality-text right-text-bolitas">
                    Sin acceso formal a la red de agua potable
                  </div>
                </div>
              </div>
              <h5 className="card-title2 ">94%</h5>

            </div>
            <p className='img-text-map'>¡NECESITAMOS TU APOYO HOY!</p>
            <div >

              <div className="row align-pelotitas">

                <h5 className="card-title2">98%</h5>
                <div className="img-reality col-lg-3 col-sm-3 col-xs-12">
                  <div className="">
                    <div className="card-text reality-text left-text-bolitas">Sin acceso formal a la red cloacal</div>
                  </div>
                </div>

                <div className="img-reality  col-lg-3 col-sm-3 col-xs-12">
                  <div>
                    <div className="card-text reality-text right-text-bolitas">Se inunda cada vez que llueve</div>
                  </div>
                </div>
                <h5 className="card-title2 ">60%</h5>

              </div>
            </div>

          </div>
       
      </div>
    </>
  );
};

export default Reality;
