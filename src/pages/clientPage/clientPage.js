import React, { useState } from "react";
import './clientpage.css';
import { Link } from "react-router-dom";
import {ClientPageMenu, ClientePageMenuMobile} from "./sidebarComponent/ClientSideBar";
import { ClienteCardSection } from "./clientCardSection/ClientCardSection";
import CPServices from "./Services/CPServices";
import CPPayment from "./Payment/CPPayment";

const clientName = 'Marcelo'
const clientFullName = 'Marcelo Martins de Oliveira'
const clientPlain = [
    {name: "Cabo", mega: 40}
]



function ClientPage(props){
    return(
        <section className="clientPage">
        <div className="header-clientPage">
        <h1 className="clientPageTitle">Bem-Vindo {clientName}</h1>
        <div className="clientpageDropdown">
            <h1 className="clientpageDropdown-Title">{clientFullName}</h1>
            <Link to={"/login"}>
                <button className=" clientDropdowBtn-Out">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </Link>
        </div>
            <ClientPageMenu/>
        </div>
            <ClientePageMenuMobile/>
            <ClienteCardSection/>
            <CPServices/>
            <CPPayment/>
        </section>
    )
}


export default ClientPage;