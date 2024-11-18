import React from "react";
import './clientCardsec.css'




let clientInfoTitle = {
    day: 11 + "dias",
    plano: '40 Mega Cabo',
    Ativacao: '26/12/18',
    concumo: '469.69 GB'

}



const userInfo = [
    {
        title:"Vencimento da Fatura",
        icon: "fa-solid fa-calendar",
        info: clientInfoTitle.day,
    },
    {
        title:"Seu Plano",
        icon: "fa-solid fa-globe",
        info: clientInfoTitle.plano,
    },
    {
        title:"Data de Ativação",
        icon: "fa-solid fa-star",
        info: clientInfoTitle.Ativacao,
    },
    {
        title:"Consumo",
        icon: "fa-solid fa-bolt",
        info: clientInfoTitle.concumo,
    },
]

export function ClienteCardSection(props){
    return(
        <section className="ClienteCardSection">
            {userInfo.map((info, index)=>(
                <div className="ClientInfoCard-CP" key={index}>
                <h1 className="title-CP">{info.title}</h1>
                <i className={`icon-CP ${info.icon}`}></i>
                <p className="clientInf-CP">{info.info}</p>
                <i className="iconArrow-CP fa-solid fa-arrow-right"></i>
            </div>
            ))}
        </section>
    )
}