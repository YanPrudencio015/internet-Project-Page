import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { darkModeContext, } from "../../../APIContext/BtnsContext";

import './navbarmobile.css'
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function NavbarMobile(props) {
    const [darkMode, setDarkMode] = useContext(darkModeContext)
    const menuMobileActived = useSelector(state =>state);
    const dispatch = useDispatch();


    return (
        <section className={menuMobileActived ? "navbarMobile active" : "navbarMobile"}>
            <Link to={'/login'}>
                <button className="clientBtn">
                <i className="clientIcon fa-solid fa-user"></i>
                <p className="clientText">sou cliente</p>
                </button>
            </Link>
            <div className="plainsOptions">
                <button className="plainsBtnOptions">sua empresa</button>
                <button className="plainsBtnOptions">sua Casa</button>
            </div>
            <ul className="optionsMenuList">
                <HashLink smooth to={"#pagetop"} onClick={()=>{dispatch({type:"CLOSE"})}}>
                <li className="optionsMenuItem">Menu</li>                    
                </HashLink>
                <HashLink smooth to={"#plain"} onClick={()=>{dispatch({type:"CLOSE"})}}>
                <li className="optionsMenuItem">Planos</li> 
                </HashLink>
                <HashLink smooth to={"#aboutUs"} onClick={()=>{dispatch({type:"CLOSE"})}}>
                <li className="optionsMenuItem">Sobre</li>
                </HashLink>
                <HashLink smooth to={"#contact"} onClick={()=>{dispatch({type:"CLOSE"})}}>
                <li className="optionsMenuItem">Contato</li>   
                </HashLink>
                <HashLink smooth to={"#location"} onClick={()=>{dispatch({type:"CLOSE"})}}>
                <li className="optionsMenuItem">Localização</li>   
                </HashLink>
               
               
                
                
            </ul>
            <div className={darkMode=== true ? "darkModeOption": "darkModeOption active"}>
                <i className={darkMode=== true ? "iconAparence fa-solid fa-circle-half-stroke": 
                    "iconAparence active fa-solid fa-circle-half-stroke"} 
                    // onClick={()=>{setDarkMode(!darkMode)}}
                    
                    onClick={()=>{setDarkMode(!darkMode)}}
                    ></i>
            </div>

        </section>
    );
}

export default NavbarMobile;

