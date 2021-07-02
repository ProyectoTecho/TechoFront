import React from "react";
import logoTecho from "../../assets/logotecho.png";
import "./index.css";

const ModalContacto = () => {
  return (
    <div>
      <div
        className="modal fade "
        id="modalContacto"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content ">
            <div className="container modalThanks img-fluid">
              <div className="modalHeader">
                <h5
                  className="modal-title nombre-socio text-center"
                  id="exampleModalLongTitle"
                >
                  GRACIAS POR SUMARTE
                </h5>
              </div>
              <div className="text-center h4">
                Nos pondremos en contacto a la brevedad.
              </div>
              <img src={logoTecho} className="img-fluid" alt="Responsive" />
              <div className="modalFooter">
                <a
                  href="/"
                  type="button"
                  className="btn btn-volver btn-primary "
                >
                  Volver a inicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContacto;
