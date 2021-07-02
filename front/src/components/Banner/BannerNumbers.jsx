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

export const BannerNumbers = () => {
  const { width } = useWindowDimensions();

  return (

    <div id="techoInicio">
      {width > 1000 ?
        <div className="container-fluid ">
          <div className="row banner">
            <h2 className="texto-aporte col-lg-9 col-md-9 col-sm-9 col-xs-9">
              ¡TRANSFORMEMOS LA REALIDAD EN LOS ASENTAMIENTOS INFORMALES DE ARGENTINA!
            </h2>
          </div>
        </div>
        :
        null}
    </div>
  );
};
