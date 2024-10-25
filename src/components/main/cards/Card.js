import React, {useState,useEffect} from "react";
import './card.css'
// redux
import { useSelector, useDispatch } from "react-redux";


// reducer
import { setplainInfo } from "../../../reducers/plainReducer";
import { Link } from "react-router-dom";

function Card(props){
    const selector = useSelector(state => state.PlainDetails.plainObject);
    const dispatch = useDispatch();

    const[plainDetails, setPlainDetails] = useState({name:"",mega:"",cdn:[],download:"",upload:"",price:""})
    
    function CardPlain(){

        const plainChoosed= {
            name: props.name,
            mega: props.mega,
            cdn: props.cdn,
            download: props.down,
            upload: props.up,
            price: props.price
        }



        dispatch(setplainInfo(plainChoosed.name,plainChoosed.mega,plainChoosed.cdn,plainChoosed.download,plainChoosed.upload,plainChoosed.price))
    }


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
                    <p className="cardPlainItemsValue">{props.down}</p>    
                    <p className="cardPlainItemstext"> Download</p>
                </li>
                <li className="cardPlainItems">
                <i className="fa-solid pricingIcon fa-cloud-arrow-up"></i>
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
                 <Link className="princingBtnLink" to={'consulta-viabilidade'}>
                    <button className="princingBtn" onClick={()=> CardPlain()}>Assinar agora</button>
                 </Link>
                <button className="princingBtnWhatsApp">
                    <p className="princingBtnWhatsAppText">Assinar pelo WhatsApp</p>
                </button>
        </div>
    </section>)
}


export default Card