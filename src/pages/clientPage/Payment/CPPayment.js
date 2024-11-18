import React from "react";
import './cppayment.css'

function CPPayment(props){

    const PaymentsMethods = [
        {
            name:"Pix",
            icon:"fa-brands fa-pix"
        },
        {
            name:"Boleto",
            icon:"fa-solid fa-barcode"
        },
        {
            name:"Cartão de Crédito",
            icon:"fa-solid fa-credit-card"
        },
        {
            name:"débito automático",
            icon: "fa-solid fa-credit-card"
        },
    ]
    return(
        <section className="paymentSection-CP">
            <h1 className="paymentTitle-CP">Pagamentos</h1>
            <div className="paymentCard-CP">
                {PaymentsMethods.map((method, index)=>(
                    <button className="paymentCardBtn-CP" key={index }>
                        <label className="paymentCardLabel-CP">{method.name}</label>
                        <div className="paymentCardFooter-CP">
                            <i className={`paymentCardIcon-CP ${method.icon}`}></i>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    )
}

export default CPPayment;