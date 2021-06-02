import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { postData } from "../../state/reducers/user";
import fotoForm from "../../assets/foto-form.jpg"
import ModalDespedida from "./ModalDespedida"

let baseUrl = "http://localhost:8080/"
if(process.env.NODE_ENV === "production") {
  baseUrl = "/"
}


const Form2 = ({ handleVolver, handleData, data }) => {
  const dispatch = useDispatch();

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
    axios.post(`${baseUrl}/api/send-mail-donation`, {
      nombre: data.name,
      email: data.email,
    });
  };

  return (
    <>
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
                      <option value={null}>...</option>
                      <option value="Buenos Aires">Bs. As.</option>
                      <option value="Catamarca">Catamarca</option>
                      <option value="Chaco">Chaco</option>
                      <option value="Chubut">Chubut</option>
                      <option value="Cordoba">Cordoba</option>
                      <option value="Corrientes">Corrientes</option>
                      <option value="Entre Rios">Entre Rios</option>
                      <option value="Formosa">Formosa</option>
                      <option value="Jujuy">Jujuy</option>
                      <option value="La Pampa">La Pampa</option>
                      <option value="La Rioja">La Rioja</option>
                      <option value="Islas Malvinas">Islas Malvinas</option>
                      <option value="Mendoza">Mendoza</option>
                      <option value="Misiones">Misiones</option>
                      <option value="Neuquen">Neuquen</option>
                      <option value="Rio Negro">Rio Negro</option>
                      <option value="Salta">Salta</option>
                      <option value="San Juan">San Juan</option>
                      <option value="San Luis">San Luis</option>
                      <option value="Santa Cruz">Santa Cruz</option>
                      <option value="Santa Fe">Santa Fe</option>
                      <option value="Sgo. del Estero">Sgo. del Estero</option>
                      <option value="Tierra del Fuego">Tierra del Fuego</option>
                      <option value="Tucuman">Tucuman</option>
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
                      <option
                        value=""
                        disabled=""
                        className="_1uxfS _36dZ-"
                      ></option>
                      <option value="Visa Crédito" className="_1uxfS">
                        Visa Crédito
                      </option>
                      <option value="Visa Débito" className="_1uxfS">
                        Visa Débito
                      </option>
                      <option value="Mastercard" className="_1uxfS">
                        Mastercard
                      </option>
                      <option value="American Express" className="_1uxfS">
                        American Express
                      </option>
                      <option value="Cabal" className="_1uxfS">
                        Cabal
                      </option>
                      <option value="Naranja" className="_1uxfS">
                        Naranja
                      </option>
                      <option value="Nevada" className="_1uxfS">
                        Nevada
                      </option>
                      <option value="Shopping" className="_1uxfS">
                        Shopping
                      </option>
                      <option value="Nativa" className="_1uxfS">
                        Nativa
                      </option>
                      <option value="Cencosud" className="_1uxfS">
                        Cencosud
                      </option>
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
                  <ModalDespedida name={data.name}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form2;
