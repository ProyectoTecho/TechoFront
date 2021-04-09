import React from "react";
import "./index.css";

const Reality = () => {
  return (
    <>
      <div className="container-fluid reality-center">
        <div className="row">
          <div className="card img-reality col-lg-3 col-md-4 col-sm-6 col-xs-12">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3ycnesZrlMJPamrG0iwYh20ePQGw8h4SyA&usqp=CAU" className="card-img-top s-img" alt="servicio-eléctrico" /> */}
            <div className="card-body">
              <h5 className="card-title2">72%</h5>

              <p className="card-text">
                Sin acceso formal al servicio de energía
              </p>

            </div>
          </div>

          <div className="card img-reality col-lg-3 col-md-4 col-sm-6 col-xs-12">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBK-W9RPcLwv0pcxZxEfkogkK0QZLnga3sQ&usqp=CAU" className="card-img-top s-img" alt="agua-potable" /> */}
            <div className="card-body">
              <h5 className="card-title2">94%</h5>
              <p className="card-text">
                Sin acceso formal a la red de agua potable
              </p>
            </div>
          </div>

          <div className="card img-reality col-lg-3 col-md-4 col-sm-6 col-xs-12">
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc26Xbff9PKeG7tswBpX1VBVpWgUt7ZuYL6w&usqp=CAU" className="card-img- s-img" alt="Red-cloacal" /> */}
            <div className="card-body">
              <h5 className="card-title2">98%</h5>
              <p className="card-text">Sin acceso formal a la red cloacal</p>
            </div>
          </div>
          <div className="card img-reality col-lg-3 col-md-4 col-sm-6 col-xs-12">
            {/* <img src="data:image/png;base64,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" className="card-img-top s-img" alt="inundación" /> */}
            <div className="card-body">
              <h5 className="card-title2">60%</h5>
              <p className="card-text">Se inunda cada vez que llueve</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reality;
