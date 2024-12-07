import React from "react";
import { Link } from "react-router-dom";

import { ClientPageMenu, ClientePageMenuMobile } from "../../sidebarComponent/ClientSideBar";
function ContactSubPage(props){

    return(
        <section className="contactSubPage">
            contatos  
            <ClientPageMenu/>
            <ClientePageMenuMobile/>
            <Link to={'/Pagina-do-cliente'}>
                <button> Voltar </button>
            </Link>   
        </section>
    )
}


export default ContactSubPage