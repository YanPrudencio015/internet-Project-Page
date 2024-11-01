import React from "react";
import { Link } from "react-router-dom";
import './plainpage.css'

import { CardPricing } from "../../components/main/cards/cardDetails";
// redux
import { useDispatch } from "react-redux";

import { setplainInfo } from "../../reducers/plainReducer";


export default function PlainPage(props){

    const dispatch = useDispatch();

    function PlainChoosed(index){
        console.log(index.name)

        dispatch(setplainInfo(index.name, index.mega, index.cdn, index.downloadValue, index.uploadValue, index.price))
    }

    return(
        <section className="plainPage">
            <div className="plainPageHeader">
            <Link to={'/consulta-viabilidade'}>  <button className="backViabiliyPageBtn">Voltar</button></Link>
            </div>
            <div className="cardsSectionSquad">
                {CardPricing.map((card, index)=>(
                <div className="cardsPlainPage" key={index}
                    style={index >3 ? {background:"#000000", border: "transparent"}:{background:"#8f44fd"}}
                >
                    <h1 className="cardPlainName">{card.name}</h1>
                    <h1 className="cardPlainPrice">{card.price}</h1>
                    <h2 className="cardPlainMegas" style={index > 3 ? {color:"#8f44fd"}:{color:"#eee"}}
                        >{card.mega} Megas</h2>
                    <ul className="cardPlainDetail">
                        <li className="cardPlainDown" style={index > 3?{color:"#8f44fd"}:{color:"#eee"}}>
                            <i class=" plainPageIcon fa-solid fa-cloud-arrow-down"></i> {card.downloadValue} Download
                        </li>
                        <li className="cardPlainUp" style={index > 3?{color:"#8f44fd"}:{color:"#eee"}}>
                            <i class=" plainPageIcon fa-solid fa-upload"></i> {card.uploadValue} Upload
                        </li>
                        <li className="cardPlainPay" style={index > 3?{color:"#8f44fd"}:{color:"#eee"}}>
                            <i class=" plainPageIcon fa-solid fa-handshake"></i> Fidelidade no pagamento
                        </li>
                        <li className="cardPlainWifi" style={index > 3?{color:"#8f44fd"}:{color:"#eee"}}>
                            <i class=" plainPageIcon fa-solid fa-wifi"></i> Modem Wi-fi 2.4 
                        </li>
                        <li className="cardPlainCdn" style={index > 3?{color:"#8f44fd"}:{color:"#eee"}}>
                            {card.cdn}
                        </li>
                    </ul>
                   <Link to={'/consulta-viabilidade'}>
                        <button className="cardPlainChoose" onClick={()=>{PlainChoosed(card)}}>Escolher</button>
                    </Link>
                </div>
                ))}
            </div>
        </section>
    )
}