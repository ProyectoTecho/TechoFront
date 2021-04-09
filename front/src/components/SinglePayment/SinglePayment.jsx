
import React from "react";

import "./index.css";

export default function SinglePayment() {
  return (
    <>
        
      <div className="container">
        <div className="container mb-2">
          <h4 className="h4">Quiero realizar una donación por única vez</h4>
          <img src="header-sp.jpg" alt="" className="img-fluid" />

          <div>
            <div className="card card-body">
              <div className="">
                <div>
                  <div>
                    <div className="columna2">
                      <div className="mercadoPago">
                        <h3 className="titles">Mercado Pago</h3>
                        <img className="logoMP"
                          src="https://static.wixstatic.com/media/8c9b2b_d1e0cee8b3ba42c5a8962f104c1e0c9e~mv2.png/v1/fill/w_40,h_38,al_c,q_85,usm_0.66_1.00_0.01/logo%20mp.webp"
                          alt="logo-Techo"
                         
                        ></img>
                      </div>
                      <div className="mb-4">
                        <div>
                          <a
                            href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/5c5bc789-3602-4f39-af34-bfe6bb1c3f93/express/?source=link&preference-id=156146314-8405f297-06b6-47ac-b07b-bf21319e2ac8&p=626a5366dc3a8e506444719203a19dbf"
                            target="blank"
                          >
                            <button className="singleButton">$500</button>
                          </a>
                          <a
                            href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/9eefc613-100d-49b1-b5d4-547e41a240bb/express/?source=link&preference-id=156146314-2b57bed7-8d15-4cef-8fb7-dfce810ee052&p=626a5366dc3a8e506444719203a19dbf"
                            target="blank"
                          >
                            <button className="singleButton">$700</button>
                          </a>
                          <a
                            href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/29283afa-2f93-46a4-b3b5-c1e911bb7d37/express/?source=link&preference-id=156146314-9a847fa6-5190-4a77-ad14-aef5a98cab28&p=626a5366dc3a8e506444719203a19dbf"
                            target="blank"
                          >
                            <button className="singleButton">$1000</button>
                          </a>

                          <a
                            href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/338bc11d-e77e-49e0-bba3-9e51e3825d95/express/?source=link&preference-id=156146314-1315ff81-cbd4-471f-ba1b-f43a1e53b28f&p=626a5366dc3a8e506444719203a19dbf"
                            target="blank"
                          >
                            <button className="singleButton">$2000</button>
                          </a>
                          <a
                            href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/25647eb5-000a-4245-bd7c-4f9f88a37422/express/?preference-id=156146314-021f4baa-32f1-4d69-903a-cff016743f6b&source=link&p=626a5366dc3a8e506444719203a19dbf"
                            target="blank"
                          >
                            <button className="singleButton">$3000</button>
                          </a>
                          <a
                            href="https://www.mercadopago.com.ar/checkout/v1/payment/redirect/ce12a293-d496-4ea7-a0a7-7dda63e69bc2/express/?source=link&preference-id=156146314-26ee9eba-d4b0-480d-be4c-e74228ca8c87&p=4eeafd42bd088cc925225bedf818be1b"
                            target="blank"
                          >
                            <button className="singleButton">$5000</button>
                          </a>
                        </div>
                      </div>
                      <div>
                        <h3 className="titles"> Transferencia bancaria </h3>

                        <p className="parrafo">
                          <b>Banco Hipotecario </b> <br />
                          Tipo y Nº de cuenta: <b>Cta Cte Esp </b> <br />
                          <b>$ 400000013297761 </b> <br />
                          Nº de CBU: <b> 0440000440000132977618 </b>
                          <br />
                          CBU ALIAS: <b> TECHO.DONACIONES.S </b>
                          <br />
                          Titular de la cuenta:{" "}
                          <b> Un Techo Para Argentina AC </b>
                          <br />
                          CUIT del titular: <b>30708357363 </b> <br />
                        </p>
                        <h3 className="titles">Bank transfer from abroad</h3>
                        <p className="parrafo">
                          <b> Beneficiary Bank </b> <br />
                          <b> Bank name: BANCO HIPOTECARIO </b>
                          <br />
                          Swift code: <b>BHIPARBAXXX </b> <br />
                          Beneficiary’s name: <b> UN TECHO </b>
                          <br />
                          <b> PARA ARGENTINA A.C. </b> <br />
                          Beneficiary’s account number: <b> 200000028125066 </b>
                          <br />
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="parrafo">
                        <b> Intermediary Bank </b> <br />
                        Citibank NA – <b>NEW YORK – USA 111 Wall Street </b>
                        <br />
                        <b>New York, NY 10043, USA </b> <br />
                        Swift Code <b> CITIUS33XXX - ABA 021000089 </b>
                        <br />
                        Account Numer: <b> 10954887 DE BANCO </b>
                        <br />
                        <b>HIPOTECARIO S.A. (SWIFT: BHIPARBAXXX) </b> <br />
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
}
