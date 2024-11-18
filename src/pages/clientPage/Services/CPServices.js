import React from "react";
import './CPServices.css';





function CPServices(props){
    return(
        <section className="cpServicesSection">
            <h1 className="serviceTitle-CP">Serviços</h1>
            <button className="serviceButton-CP" type="button">
                <label className="serviceLabel-CP"> Click para imprimir a 2º via do boleto 
                    <i className="serviceBtnIcon-CP fa-solid fa-barcode"></i></label>
            </button>
        </section>
    )
}


export default CPServices; 