import React from "react";
import logotecho from "../../assets/logotecho.png";
import "./index.css";

const NotFound = () => {
  return (
    <div className="m-0 vh-100 container-error">
      <div className="col-auto p-5 text-center">
        <img src={logotecho} alt="techo" className="img-error" />
        <p className="error-text">
          No se encontraron resultados. La página solicitada no pudo
          encontrarse. Cliqueá en el botón para ir a TECHO
        </p>
        <a href="/" type="button" className="btn btn-volver btn-primary ">
          Ir a Techo{" "}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
