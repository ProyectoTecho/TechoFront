import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../../state/reducers/user";
import { Link } from "react-scroll";
import "./index.css";
import SinglePayment from "../SinglePayment/SinglePayment";
import fotoForm from "../../assets/foto-form.jpg";
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

const Form1 = ({ handleContinuar, handleData, data }) => {
  const dispatch = useDispatch();

  const [amountFlag, setAmountFlag] = useState("1000");

  const [montos, setMontos] = useState("")

  useEffect(() => {
    /* cada vez que refresco la página o se actualiza un estado */
    getMontos()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleContinuar();
    dispatch(
      postData({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        amount: data.amount,
        time: data.time,
      })
    );
  };

  const removeActive = () => {
    const buttons = document.querySelectorAll("button[name='amount']");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = "";
      buttons[i].className = "btn btn-outline-primary";
    }
  };

  const toggleClass = (e) => {
    removeActive();
    const name = "active";
    e.target.className += " " + name;
    const input = document.querySelector("input[name='amount']");
    input.required = false;
    data.amount = e.target.value;
    setAmountFlag(e.target.value);
  };

  const displayInput = (e) => {
    setAmountFlag(0);
    removeActive();
    e.target.required = true;
  };

  const getMontos = async () => {
    db
      .collection('montos')
      .onSnapshot((querySnapshot) => {
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id })
        });
        setMontos(docs)
      })
  }

  const { width } = useWindowDimensions();

  return (
    
    <section className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={fotoForm} className="img-fluid" alt="Responsive" />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <div className="mt-1">
                <p className="card-text">Quiero donar mensualmente ...</p>
              </div>
              <form onSubmit={handleSubmit} >
                <div className="btn-toolbar mt-3" role="toolbar">
                  <div className="btn-group me-2 mr-3" role="group">
                  <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={(handleData, toggleClass)}
                      value={montos ? montos[0].firstMonto : 700}
                    >
                      {montos ? montos[0].firstMonto : 700} ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary active"
                      onClick={(handleData, toggleClass)}
                      value={montos ? montos[0].secondMonto : 1000}
                    >
                      {montos ? montos[0].secondMonto : 1000} ARS
                    </button>
                    <button
                      name="amount"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={(handleData, toggleClass)}
                      value={montos ? montos[0].thirdMonto : 1300}
                    >
                      {montos ? montos[0].thirdMonto : 1300} ARS
                    </button>
                  </div>
                  <div className="input-group">
                    <button
                      className="btn btn-outline-primary"
                      onClick={displayInput}
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Otro Monto
                    </button>

                    <input
                      name="amount"
                      type="number"
                      min="0"
                      minLength={2}
                      maxLength={5}
                      className="form-control collapse"
                      id="collapseExample"
                      onChange={handleData}
                      value={data.amount}
                      placeholder="Otro monto"
                      aria-label="Input group example"
                      aria-describedby="btnGroupAddon"
                      style={{ width: 150 }}
                    />
                  </div>
                </div>
                {montos && amountFlag === montos[0].firstMonto ? (
                  <div class="card border mt-3 fondo-texto">
                    <div class="card-body">
                      Si vos y 10 personas más donan <b>${montos[0].firstMonto} mensuales,</b> al
                      cabo de un año{" "}
                      <b>
                        podemos construir <b>100 metros de veredas</b> para que
                        las personas con movilidad reducida puedan transitar por
                        su barrio
                      </b>
                      .
                    </div>
                  </div>
                ) : null}
                {montos && amountFlag === montos[0].secondMonto ? (
                  <div class="card mt-3 fondo-texto">
                    <div class="card-body">
                      Si vos y 7 personas más donan <b>${montos[0].secondMonto} mensuales,</b> al
                      cabo de un año podemos construir{" "}
                      <b>una vivienda de emergencia</b> para una familia que lo
                      necesita.
                    </div>
                  </div>
                ) : null}
                {montos && amountFlag ===  montos[0].thirdMonto ? (
                  <div class="card border mt-3 fondo-texto">
                    <div class="card-body">
                      Con tu donación de <b>${montos[0].thirdMonto}</b> por 6 meses, logramos
                      financiar{" "}
                      <b>
                        un curso de formación legal para referentes comunitarios
                      </b>
                      .
                    </div>
                  </div>
                ) : null}
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Mi nombre</label>
                    <input
                      name="name"
                      type="text"
                      onChange={handleData}
                      value={data.name}
                      className="form-control"
                      placeholder="Ingresá tu nombre"
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Mi apellido</label>
                    <input
                      name="lastname"
                      type="text"
                      onChange={handleData}
                      value={data.lastname}
                      className="form-control"
                      placeholder="Ingresá tu apellido"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Mi mail</label>
                    <input
                      name="email"
                      type="email"
                      onChange={handleData}
                      value={data.email}
                      className="form-control"
                      placeholder="Ingresá tu email"
                      required
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label className="form-label">Mi teléfono</label>
                    <input
                      name="phone"
                      type="number"
                      onChange={handleData}
                      value={data.phone}
                      className="form-control"
                      placeholder="Ingresá tu teléfono"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-4">
                    <button
                      disabled={
                        data.name === "" ||
                          data.lastname === "" ||
                          data.amount === "" ||
                          data.phone === "" ||
                          data.email === ""
                          ? true
                          : false
                      }
                      type="submit"
                      className="btn btn-primary"
                    >
                      Continuar
                    </button>
                  </div>
                  <div className="col-8 mt-2">
                    <p>
                      <strong>Paso 1/2</strong>
                    </p>
                  </div>
                </div>
              </form>
              <p className="mt-5"> </p>
              <div
                className="modal fade mt-5"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content mt-5">

                    <div className="modal-body">
                      <SinglePayment />
                    </div>
                    <div className="modal-footer mb-5">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ternario que oculta el botón si hay algún input dentro del formulario */}
      {data.name !== "" ||
        data.lastname !== "" ||
        data.phone !== "" ||
        data.email !== "" ? null : (
        <div className="botonDona">
          <span className=" ">
            {width > 375 ?
              <Link to="dona" offset={-50} smooth duration={1000}>

                <button className="btn btnHover" type="submit">
                  <span className="letraBtn ">Doná</span>
                </button>

              </Link>
              :
              <Link to="dona" offset={500} smooth duration={1000}>

                <button className="btn btnHover" type="submit">
                  <span className="letraBtn ">Doná</span>
                </button>

              </Link>
            }
          </span>
        </div>
      )}
    </section>
  );
};

export default Form1;
