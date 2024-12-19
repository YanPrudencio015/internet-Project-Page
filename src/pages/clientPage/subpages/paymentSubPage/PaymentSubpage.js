import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClientPageMenu, ClientePageMenuMobile } from "../../sidebarComponent/ClientSideBar";
import './paymentSubpage.css'


const paymenthistoryitem = [
    {id:1,position:1, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
    {id:2,position:2, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
    {id:3,position:3, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
    {id:4,position:4, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
    {id:5,position:5, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
    {id:6,position:6, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
    {id:7,position:7, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
    {id:8,position:8, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
    {id:9,position:9, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
    {id:10, position:10, paymentDeadline:"15/01/00", document:"123.456.789-12", paymaentData: "14/01/00",value:"R$150,00",amountPaid:"R$200,00",status: "Pago" },
]


function PaymentSubpage(props){
    return(
        <section className="paymentSubpage">
            <ClientPageMenu/>
            <ClientePageMenuMobile/>
            <div className="paymentSection">
                <h1 className="paymentSectionTitle">Histórico de pagamento</h1>        
            <div className="square-PSub">
                <div className="square-Header-PSub">
                    <p className="square-Header-title-PSub">Posição</p>
                    <p className="square-Header-title-PSub">Vencimento</p>
                    <p className="square-Header-title-PSub">Pagamento</p>
                    <p className="square-Header-title-PSub">Valor</p>
                    <p className="square-Header-title-PSub">Valor Pago</p>
                    <p className="square-Header-title-PSub">Status</p>
                </div>   
                    <div className="square-Body-PSub">
                        {paymenthistoryitem.map((item) => (
                            <div className="square-Body-Item-PSub">
                                <ul className="square-Body-Item-List-PSub">
                                    <li className="square-Body-Item-Value-PSub">{item.position}º</li>
                                    <li className="square-Body-Item-Value-PSub">{item.paymentDeadline}</li>
                                    <li className="square-Body-Item-Value-PSub">{item.paymaentData}</li>
                                    <li className="square-Body-Item-Value-PSub">{item.value}</li>
                                    <li className="square-Body-Item-Value-PSub">{item.amountPaid}</li>
                                    <li className="square-Body-Item-Value-PSub">{item.status}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
            </div>
            </div>
        </section>
    )
}


export default PaymentSubpage