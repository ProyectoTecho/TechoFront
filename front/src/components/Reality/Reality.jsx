import React, { useState, useEffect } from "react";
import "./index.css";
import { db } from '../../firebase/firebase'

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
  const { width } = useWindowDimensions();

  const [percent, setPercent] = useState("")

  useEffect(() => {
    getPercent()
  }, [])

  const getPercent = async () => {
    db
      .collection('percent')
      .onSnapshot((querySnapshot) => {
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
        });
        setPercent(docs)
      })
  }

  return (
    <>

      <div className="container-fluid reality-center">
          <div className="container map-background" >
            <div className="row align-pelotitas">

              {/* <h5 className="card-title2">72%</h5> */}
              <h5 className="card-title2">
              {percent ? percent[0].firstPercent : 72}%</h5>
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
                <h5 className="card-title2 ">{percent ? percent[0].secondPercent : 94}%</h5>
                </>
                : 
                <>
                <h5 className="card-title2 ">{percent ? percent[0].secondPercent : 94}%</h5>
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
                <h5 className="card-title2">{percent ? percent[0].thirdPercent : 98}%</h5>
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
                <h5 className="card-title2 ">{percent ? percent[0].fourthPercent : 60}%</h5>
              </>
              :
              <>
                <h5 className="card-title2 ">{percent ? percent[0].fourthPercent : 60}%</h5>
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