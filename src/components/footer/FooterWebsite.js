import React from "react";
import "./footer.css"




function Footer(props){
    return(
        <section className="footer">
            <div className="footerSection">
                <h1 className="title">Viaband</h1>
                <div className="socialIconFooterSection">
                <i className="footerSocialIcon fa-brands fa-facebook-f"></i>
                <i className="footerSocialIcon fa-brands fa-instagram"></i>
                <i className="footerSocialIcon fa-brands fa-whatsapp"></i>
                </div>
            </div>
            <div className="footerSection">
                <h1 className="linksFooterTitle">Links</h1>
                <ul className="LinkListFooter">
                    <li className="ListItemFooter">Menu</li>
                    <li className="ListItemFooter">Planos</li>
                    <li className="ListItemFooter">Sobre</li>
                    <li className="ListItemFooter">Localização</li>
                </ul>
            </div>
            <div className="footerSection">
                <h1  className="FooterContactTitle">Entre em contato conosco</h1>
                <ul className="footerContactList">
                    <li className="footerContactListItem">979978119</li>
                    <li className="footerContactListItem">08005913041</li>
                    <li className="footerContactListItem">30054109</li>
                </ul>
                <button className="footerClientBtn">
                    <span>Sou cliente</span>
                </button>
            </div>
        </section>
    )
}


export default Footer;