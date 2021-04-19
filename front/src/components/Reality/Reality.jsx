import React, { useState, useEffect } from "react";
import "./index.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Reality = () => {
  const { height, width } = useWindowDimensions();


  return (
    <>

      <div className="container-fluid reality-center">
      {/* <h2 className="reality-title">LA URGENCIA NO ESPERA</h2> */}
        <div className="row">
          <div className="card-bg bolitas-left img-reality col-lg-6 col-sm-6 col-xs-12">
            <div className="card-body">
              <h5 className="card-title2">72%</h5>


          <div className="container map-background" >
            <div className="row align-pelotitas">

              <h5 className="card-title2">72%</h5>
              <div className="img-reality col-lg-3  col-xs-12">
                <div className="">
                  <div className="card-text reality-text left-text-bolitas">
                    Sin acceso formal al servicio de energía eléctrica
                  </div>
                </div>
              </div>
             {width > 992 ? 
              <><div className="img-reality  col-lg-3  col-xs-12">
                  <div className=" ">
                    <div className="card-text reality-text right-text-bolitas pelotitas-responsive">
                      Sin acceso formal a la red de agua potable
                    </div>
                  </div>
                </div>
                <h5 className="card-title2 ">94%</h5>
                </>
                : 
                <>
                <h5 className="card-title2 ">94%</h5>
                <div className="img-reality  col-lg-3  col-xs-12">
                  <div className=" ">
                    <div className="card-text reality-text right-text-bolitas pelotitas-responsive">
                      Sin acceso formal a la red de agua potable
                    </div>
                  </div>
                </div>               
              </>
              } 

            </div>

            <p className='img-text-map'>¡NECESITAMOS TU APOYO HOY!</p>
            <div >
              <div className="row align-pelotitas">        
                <h5 className="card-title2">98%</h5>
                <div className="img-reality col-lg-3 col-xs-12">
                  <div className="">
                    <div className="card-text reality-text left-text-bolitas">Sin acceso formal a la red cloacal</div>
                  </div>
                </div>
              {width > 992 ? 
              <>
               <div className="img-reality  col-lg-3 col-xs-12">
                  <div>
                    <div className="card-text reality-text right-text-bolitas pelotitas-responsive">Se inunda cada vez que llueve</div>
                  </div>
                </div>
                <h5 className="card-title2 ">60%</h5>
              </>
              :
              <>
              <h5 className="card-title2 ">60%</h5>
               <div className="img-reality  col-lg-3  col-xs-12">
                  <div>
                    <div className="card-text reality-text right-text-bolitas pelotitas-responsive">Se inunda cada vez que llueve</div>
                  </div>
                </div>              
              </>
              }

              </div>
              

            </div>

          </div>
       
      </div>
    </>
  );
};

export default Reality;
