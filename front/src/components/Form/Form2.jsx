import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { postData } from "../../state/reducers/user";
import fotoForm from "../../assets/foto-form.jpg";
import ModalDespedida from "./ModalDespedida";
import { provinciasArgentinas, arrayTarjetas } from "./config";

let baseUrl = "http://localhost:8080/";
if (process.env.NODE_ENV === "production") {
  baseUrl = "/";
}

const Form2 = ({ handleVolver, handleData, data }) => {
  const dispatch = useDispatch();
  const [mapProvincias, setMapProvincias] = useState([]);
  const [mapTarjetas, setMapTarjetas] = useState([]);

  useEffect(() => {
    setMapProvincias(provinciasArgentinas);
    setMapTarjetas(arrayTarjetas);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      postData({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        amount: data.amount,
        time: data.time,
        dni: data.dni,
        province: data.province,
        creditCard: data.creditCard,
        typeCard: data.typeCard,
      })
    );
    axios.post(`${baseUrl}api/send-mail-donation`, {
      nombre: data.name,
      email: data.email,
    });
  };

  return (
    <section>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={fotoForm} className="img-fluid" alt="Responsive" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Mi DNI
                    </label>
                    <input
                      name="dni"
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Ingresa tu DNI"
                      onChange={handleData}
                      value={data.dni}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Mi provincia
                    </label>

                    <select
                      name="province"
                      onChange={handleData}
                      value={data.province}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      {mapProvincias?.map((item, index) => {
                        return (
                          <option key={index} value={item.nombre}>
                            {item.nombre}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Número de tarjeta
                    </label>
                    <input
                      name="creditCard"
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Ingresa el numero de tu tarjeta"
                      onChange={handleData}
                      value={data.creditCard}
                      maxlength="16"
                      oninput={
                        data.creditCard.length > 16
                          ? (data.creditCard = data.creditCard.slice(0, 16))
                          : null
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Tipo de tarjeta
                    </label>

                    <select
                      name="typeCard"
                      onChange={handleData}
                      value={data.typeCard}
                      className="form-select"
                      aria-label="Default select example"
                    >
                      {mapTarjetas?.map((item, index) => {
                        return (
                          <option value={item.nombre} className="_1uxfS">
                            {item.nombre}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="row mt-4">
                    <div className="col-6">
                      <button
                        className="btn btn-warning mr-3"
                        type="button"
                        onClick={() => handleVolver()}
                      >
                        Volver
                      </button>
                      <button
                        className="btn btn-primary mr-3 boton disabledButton"
                        id="submitBtn "
                        variant="primary"
                        type="submit"
                        data-toggle="modal"
                        data-target="#modalDespedida"
                        required
                        disabled={
                          data.dni === "" ||
                          data.province === "" ||
                          data.creditCard === "" ||
                          data.typeCard === ""
                            ? true
                            : false
                        }
                      >
                        Quiero ser socio/a
                      </button>
                    </div>
                    <div className="col-6 mt-2">
                      <p>
                        <strong>Paso 2/2</strong>
                      </p>
                    </div>
                  </div>
                  <ModalDespedida name={data.name} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form2;
