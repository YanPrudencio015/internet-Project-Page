import React from "react";
import './clientpage.css';
import { Link } from "react-router-dom";
import {ClientPageMenu, ClientePageMenuMobile} from "./sidebarComponent/ClientSideBar";
import { ClienteCardSection } from "./clientCardSection/ClientCardSection";
import CPServices from "./Services/CPServices";
import CPPayment from "./Payment/CPPayment";
import LogoutContainer from "./subpages/logout/logoutContainer";

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

            {/* create a logic to click in get out btn and show the component.
                if the client to click out the card, to click at baclground, 
                the option to get out will be closed
                 vvvvvvvvvv */}
            {/* <LogoutContainer/> */}
        </section>
    )
}


export default ClientPage;