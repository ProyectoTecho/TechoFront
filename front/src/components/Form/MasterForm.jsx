import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";

const MasterForm = () => {
  const [item, setItem] = useState(0);
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    amount: "1000",
    time: "socio",
    dni: "",
    province: "",
    creditCard: "",
    typeCard: "",
  });

  const handleContinuar = () => {
    setItem(item + 1);
  };

  const handleVolver = () => {
    setItem(item - 1);
  };

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="masterForm">
      {item === 0 && (
        <Form1
          handleContinuar={handleContinuar}
          handleData={handleData}
          data={data}
        />
      )}
      {item === 1 && (
        <Form2
          handleVolver={handleVolver}
          handleData={handleData}
          data={data}
        />
      )}
      {
        <p className="container">
          {" "}
          Todas las donaciones a TECHO son deducibles del Impuesto a las
          Ganancias según el Art. 81 de la Ley N° 20.628. Política de
          privacidad.
        </p>
      }

      <p className="text-center">
        <Link
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          href="donar por única vez"
          className="span-text"
        >
          Si querés donar por única vez, completá los datos y hacé click
          <span>
            {" "}
            <u> aquí </u>{" "}
          </span>
        </Link>
      </p>
    </div>
  );
};

export default MasterForm;
