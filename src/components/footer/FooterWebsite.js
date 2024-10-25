import React from "react";
import "./footer.css"

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";




function Footer(props){
    return(
        <section className="footer">
            <div className="footerSection">
                <h1 className="title">Viaband</h1>
                <div className="socialIconFooterSection">
                <HashLink className="footerSocialIcon" smooth to={"https://www.facebook.com/Viabandtelecom/"}>
                <i className="fa-brands fa-facebook-f"></i>
                </HashLink>
                <HashLink className="footerSocialIcon" smooth to={"https://www.instagram.com/viabandbrasil/"}>
                <i className="fa-brands fa-instagram"></i>
                </HashLink>
                <HashLink className="footerSocialIcon" smooth to={""}>
                <i className="fa-brands fa-whatsapp"></i>
                </HashLink>
                </div>
            </div>
            <div className="footerSection">
                <h1 className="linksFooterTitle">Links</h1>
                <ul className="LinkListFooter">
                    <HashLink smooth to={"#pagetop"}>
                    <li className="ListItemFooter">Menu</li>
                    </HashLink>
                    <HashLink smooth to={"#plain"}>
                    <li className="ListItemFooter">Planos</li>
                    </HashLink>
                    <HashLink smooth to={"#aboutUs"}>
                    <li className="ListItemFooter">Sobre</li>
                    </HashLink>
                    <HashLink smooth to={"#location"}>
                    <li className="ListItemFooter">Localização</li>
                    </HashLink>
                </ul>
            </div>
            <div className="footerSection">
                <h1  className="FooterContactTitle">Entre em contato conosco</h1>
                <ul className="footerContactList">
                    <li className="footerContactListItem">979978119</li>
                    <li className="footerContactListItem">08005913041</li>
                    <li className="footerContactListItem">30054109</li>
                </ul>
                <Link className="footerClientBtnLink" to={"login"}>
                    <button className="footerClientBtn">
                        <span>Sou cliente</span>
                    </button>
                </Link>
            </div>
        </section>
    )
}


export default Footer;