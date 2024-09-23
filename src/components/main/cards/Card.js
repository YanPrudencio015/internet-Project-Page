import React, {useEffect, useState} from "react";
import './card.css'

import { CardPricing } from "./cardDetails";






function Card(props){

    useEffect(()=>{

        if(props.name == "Sublime"){
            console.log("está aqui")
        }
    
    
    },[props.name])

    return(
    <section className={ props.name ==="Sublime" ?  "card Sublime": "card"}>
        <div className={ props.name ==="Sublime" ?  "glassBackground sublime": "glassBackground"}>
            <h2 className={ props.name ==="Sublime" ?  "cardTitle sublime": "cardTitle"}>{props.name}</h2>
            <h1 className="cardMega">{props.mega} Mega</h1>
            <h1 className="cardCdn">{props.cdn}</h1>
            <hr className="pricingHr"/>
            <ul className="cardPlainDescriptionList">
                <li className="cardPlainItems">
                    <i className="fa-solid pricingIcon fa-cloud-arrow-down"></i>
                    {/* {CardPricing[0].downloadValue} */}
                    <p className="cardPlainItemsValue">{props.down}</p>    
                    <p className="cardPlainItemstext"> Download</p>
                </li>
                <li className="cardPlainItems">
                <i className="fa-solid pricingIcon fa-cloud-arrow-up"></i>
                    {/* {CardPricing[0].uploadValue} */}
                    <p className="cardPlainItemsValue">{props.up}</p>
                    <p className="cardPlainItemstext"> Upload</p>
                </li>
                <li className="cardPlainItems">
                    <i className="fa-solid pricingIcon fa-hand-holding-dollar"></i>
                    <p className="cardPlainItemstext">Facilidade no pagamento</p>
                </li>
                <li className="cardPlainItems">
                    <i className="fa-solid pricingIcon fa-wifi"></i>
                    <p className="cardPlainItemstext">Modem wi-fi 2.4</p>
                </li>
            </ul>
                 <h1 className="cardPrice">{props.price}</h1>
                <button className="princingBtn">Assinar agora</button>
        </div>
    </section>)
}


/*

nome do Plano: standard
preço: 79,90 105 110 115

colocar "menor valor" no primeiro card

colocar os valores de Download e Upload

modem wi-fi 2.4

aviso: Todos os planos são pré-pagos, será enviado um boleto do valor do plano no dia da ativação



colocar no 115, que é o mais vendido: "Top fibra"
colocar no 79,90 que é o menor valor: "Top fibra"
*/

export default Card