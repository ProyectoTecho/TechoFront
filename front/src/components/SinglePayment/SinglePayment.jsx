import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

import "./index.css";

export default function SinglePayment() {
  const [botonMP, setBotonMP] = useState("");
  const [transfer, setTransfer] = useState("");
  const [abroad, setAbroad] = useState("");
  const [intermediary, setIntermediary] = useState("");

  useEffect(() => {
    getBotonMP();
    getTransfer();
    getAbroad();
    getIntermediary();
  }, []);

  const getBotonMP = async () => {
    db.collection("donacionesMP").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setBotonMP(docs);
    });
  };

  const getTransfer = async () => {
    db.collection("transfer").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTransfer(docs);
    });
  };

  const getAbroad = async () => {
    db.collection("abroad").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAbroad(docs);
    });
  };

  const getIntermediary = async () => {
    db.collection("intermediary").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setIntermediary(docs);
    });
  };

  return (
    <>
      <div className="container ">
        <div className="container mb-2 singlePayment">
          <h4>Quiero realizar una donación por única vez</h4>

          <div className="singlePayment__mercadoPago">
            <h3 className="singlePayment__titles">Mercado Pago</h3>

            <img
              className="logoMP"
              src="https://static.wixstatic.com/media/8c9b2b_d1e0cee8b3ba42c5a8962f104c1e0c9e~mv2.png/v1/fill/w_40,h_38,al_c,q_85,usm_0.66_1.00_0.01/logo%20mp.webp"
              alt="logo-Techo"
            ></img>
          </div>

          <div className="singlePayment__button">
            <a
              href={
                botonMP
                  ? botonMP[0].firstLink
                  : "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/5c5bc789-3602-4f39-af34-bfe6bb1c3f93/express/?source=link&preference-id=156146314-8405f297-06b6-47ac-b07b-bf21319e2ac8&p=626a5366dc3a8e506444719203a19dbf"
              }
              target="blank"
            >
              <button>${botonMP ? botonMP[0].firstButton : 500}</button>
            </a>

            <a
              href={
                botonMP
                  ? botonMP[0].secondLink
                  : "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/9eefc613-100d-49b1-b5d4-547e41a240bb/express/?source=link&preference-id=156146314-2b57bed7-8d15-4cef-8fb7-dfce810ee052&p=626a5366dc3a8e506444719203a19dbf"
              }
              target="blank"
            >
              <button>${botonMP ? botonMP[0].secondButton : 700}</button>
            </a>

            <a
              href={
                botonMP
                  ? botonMP[0].thirdLink
                  : "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/29283afa-2f93-46a4-b3b5-c1e911bb7d37/express/?source=link&preference-id=156146314-9a847fa6-5190-4a77-ad14-aef5a98cab28&p=626a5366dc3a8e506444719203a19dbf"
              }
              target="blank"
            >
              <button>${botonMP ? botonMP[0].thirdButton : 1000}</button>
            </a>

            <a
              href={
                botonMP
                  ? botonMP[0].fourthLink
                  : "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/338bc11d-e77e-49e0-bba3-9e51e3825d95/express/?source=link&preference-id=156146314-1315ff81-cbd4-471f-ba1b-f43a1e53b28f&p=626a5366dc3a8e506444719203a19dbf"
              }
              target="blank"
            >
              <button>${botonMP ? botonMP[0].fourthButton : 2000}</button>
            </a>

            <a
              href={
                botonMP
                  ? botonMP[0].fifthLink
                  : "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/25647eb5-000a-4245-bd7c-4f9f88a37422/express/?preference-id=156146314-021f4baa-32f1-4d69-903a-cff016743f6b&source=link&p=626a5366dc3a8e506444719203a19dbf"
              }
              target="blank"
            >
              <button>${botonMP ? botonMP[0].fifthButton : 3000}</button>
            </a>

            <a
              href={
                botonMP
                  ? botonMP[0].sixthLink
                  : "https://www.mercadopago.com.ar/checkout/v1/payment/redirect/ce12a293-d496-4ea7-a0a7-7dda63e69bc2/express/?source=link&preference-id=156146314-26ee9eba-d4b0-480d-be4c-e74228ca8c87&p=4eeafd42bd088cc925225bedf818be1b"
              }
              target="blank"
            >
              <button>${botonMP ? botonMP[0].sixthButton : 5000}</button>
            </a>
          </div>

          <div>
            <h3 className="singlePayment__titles"> Transferencia bancaria </h3>

            <p className="singlePayment__parrafo">
              <b>{transfer ? transfer[0].firstData : "HIPOTECARIO"} </b> <br />
              Tipo y Nº de cuenta:{" "}
              <b>{transfer ? transfer[0].secondData : "Cta Cte Esp"}</b> <br />
              <b>
                {transfer ? transfer[0].thirdData : "$ 400000013297761"}{" "}
              </b>{" "}
              <br />
              Nº de CBU:{" "}
              <b>
                {" "}
                {transfer ? transfer[0].fourthData : "0440000440000132977618"}
              </b>
              <br />
              CBU ALIAS:{" "}
              <b> {transfer ? transfer[0].fifthData : "TECHO.DONACIONES.S"}</b>
              <br />
              Titular de la cuenta:{" "}
              <b>
                {" "}
                {transfer
                  ? transfer[0].sixthData
                  : "Un Techo Para Argentina AC"}
              </b>
              <br />
              CUIT del titular:{" "}
              <b>{transfer ? transfer[0].seventhData : "30708357363"}</b> <br />
            </p>
            <h3 className="singlePayment__titles">Bank transfer from abroad</h3>
            <p className="singlePayment__parrafo">
              <b> Beneficiary Bank </b> <br />
              <b>
                {" "}
                Bank name: {abroad
                  ? abroad[0].firstData
                  : "BANCO HIPOTECARIO"}{" "}
              </b>
              <br />
              Swift code: <b>
                {abroad ? abroad[0].secondData : "BHIPARBAXXX"}
              </b>{" "}
              <br />
              Beneficiary’s name:{" "}
              <b>
                {" "}
                {abroad
                  ? abroad[0].thirdData
                  : "UN TECHO PARA ARGENTINA A.C."}{" "}
              </b>
              <br />
              {/* <b> PARA ARGENTINA A.C. </b> <br /> */}
              Beneficiary’s account number:{" "}
              <b> {abroad ? abroad[0].fourthData : "200000028125066"} </b>
              <br />
            </p>
          </div>
          <div>
            <p className="singlePayment__parrafo">

              <b> Intermediary Bank </b> <br />
              <b>{intermediary ? intermediary[0].firstData : "Citibank NA – NEW YORK – USA 111 Wall Street"} </b>
              <br />
              <b>{intermediary ? intermediary[0].secondData : "New York, NY 10043, USA "}</b> <br />
              Swift Code <b> {intermediary ? intermediary[0].thirdData : "CITIUS33XXX - ABA 021000089"} </b>
              <br />
              Account Numer: <b> {intermediary ? intermediary[0].fourthData : "10954887 DE BANCO HIPOTECARIO S.A."}</b>
              <br />
              <b> (SWIFT:{intermediary ? intermediary[0].fifthData : "BHIPARBAXXX"}) </b> <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
