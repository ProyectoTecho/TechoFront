import React from 'react'
import logoTecho from "../../assets/logotecho.png";
import './index.css'

const ModalDespedida = ({ name }) => {
    return (
        <div>
            <div
                className="modal fade "
                id="modalDespedida"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered "
                    role="document"
                >
                    <div className="modal-content ">
                        <div className="container modalThanks img-fluid">
                            <div className="modalHeader">
                            <h5
                            className="modal-title nombre-socio"
                            id="exampleModalLongTitle"
                            >
                                {name} :
                            </h5>
                            </div>
                            <div className=" descriptivo">
                                {" "}
                            GRACIAS POR ASOCIARTE A
                            {" "}
                            </div>
                            <img src={logoTecho} className="img-fluid" alt="Responsive" />
                            <div className="modalFooter">
                                <a
                                href="/"
                                type="button"
                                className="btn btn-volver btn-primary "
                                >
                                    Volver a inicio{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDespedida
