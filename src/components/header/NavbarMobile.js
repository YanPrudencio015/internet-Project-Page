import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { darkModeContext, } from "../../APIContext/BtnsContext";


function NavbarMobile(props) {
    const [darkMode, setDarkMode] = useContext(darkModeContext)
    const menuMobileActived = useSelector(state =>state);
    const dispatch = useDispatch();


    return (
        <section className={menuMobileActived ? "navbarMobile active" : "navbarMobile"}>
            <button className="clientBtn">
            <i className="clientIcon fa-solid fa-user"></i>
            <p className="clientText">sou cliente</p>
            </button>
            <div className="plainsOptions">
                <button className="plainsBtnOptions">sua empresa</button>
                <button className="plainsBtnOptions">sua Casa</button>
            </div>
            <ul className="optionsMenuList">
                <li className="optionsMenuItem">Menu</li>
                <li className="optionsMenuItem">Planos</li>
                <li className="optionsMenuItem">Sobre</li>
                <li className="optionsMenuItem">Contato</li>
                <li className="optionsMenuItem">Localização</li>
            </ul>
            <div className={darkMode=== true ? "darkModeOption": "darkModeOption active"}>
                <i className={darkMode=== true ? "iconAparence fa-solid fa-circle-half-stroke": 
                    "iconAparence active fa-solid fa-circle-half-stroke"} 
                    // onClick={()=>{setDarkMode(!darkMode)}}
                    
                    onClick={()=>{setDarkMode(!darkMode);dispatch({type:"OPEN"})}}
                    ></i>
            </div>

            <ul className="socialMidiaListMobile">
                <li className="socialMidiaItemMobile">
                    <i className="socialIconMobile fa-brands fa-whatsapp"></i>
                </li>
                <li className="socialMidiaItemMobile">
                    <i className="socialIconMobile fa-brands fa-instagram"></i>
                </li>
                <li className="socialMidiaItemMobile">
                    <i className="socialIconMobile fa-brands fa-facebook"></i>
                </li>
            </ul>
        </section>
    );
}

export default NavbarMobile;
