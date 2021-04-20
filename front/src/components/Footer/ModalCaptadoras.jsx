import React from 'react'
import captadora1 from "../../assets/captadora1.png";
import captadora2 from "../../assets/captadora2.png";
import captadora3 from "../../assets/captadora3.png";
import captadora4 from "../../assets/captadora4.png";
import './index.css'

const ModalCaptadoras = () => {
    
    return (
        <div>
            <div className="modal fade" id="modalCaptadoras" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content container-fluid ">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Nuestras captadoras</h5>
                </div>

                <div className="modal-body ">
                  <div className='row '>
                    <div className="card col-lg-6 col-sm-6 col-xs-12" >
                      <img className="card-photo-captadoras" src={captadora1} alt="Captadora1"/>
                      <div className="card-body">
                        <h5 className="card-title-captadoras">Ana Laura Bertoni</h5>
                      </div>
                    </div>
                    <div className="card col-lg-6 col-sm-6 col-xs-12" >
                      <img className="card-photo-captadoras" src={captadora2} alt="Captadora2"/>
                      <div className="card-body">
                        <h5 className="card-title-captadoras">Casiana Miranda</h5>
                      </div>
                    </div>
                    <div className="card col-lg-6 col-sm-6 col-xs-12" >
                      <img className="card-photo-captadoras" src={captadora3} alt="Captadora3"/>
                      <div className="card-body">
                        <h5 className="card-title-captadoras">Manuela Arrechea</h5>
                      </div>
                    </div>
                    <div className="card col-lg-6 col-sm-6 col-xs-12" >
                      <img className="card-photo-captadoras" src={captadora4} alt="Captadora4"/>
                      <div className="card-body">
                        <h5 className="card-title-captadoras">Naiara Gómez</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary"  data-dismiss='modal'>Salir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ModalCaptadoras
