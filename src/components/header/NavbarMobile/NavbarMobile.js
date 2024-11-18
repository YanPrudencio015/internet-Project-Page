import React, { useContext, useState } from "react";
import { darkModeContext, } from "../../../APIContext/BtnsContext";

import './navbarmobile.css'
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";


// Redux
import { useSelector,useDispatch } from "react-redux";
import { REDUCERcloseMenu } from "../../../reducers/btnMenuReducer";

function NavbarMobile(props) {
    const [darkMode, setDarkMode] = useContext(darkModeContext)
    const dispatch = useDispatch()
    // redux

    function CloseMenu(){
        dispatch(REDUCERcloseMenu())
    }

    const selector = useSelector(state => state.menuMobile.isMenuOpen)
    return (
        <section className={selector ? "navbarMobile active" : "navbarMobile"}>
            <Link to={'/login'} className="clientBtnLink">
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
                <HashLink smooth to={"#pagetop"} onClick={()=>{CloseMenu()}}>
                    <li className="optionsMenuItem">Menu</li>                    
                </HashLink>
                <HashLink smooth to={"#plain"} onClick={()=>{CloseMenu()}}>
                    <li className="optionsMenuItem">Planos</li> 
                </HashLink>
                <HashLink smooth to={"#aboutUs"} onClick={()=>{CloseMenu()}}>
                    <li className="optionsMenuItem">Sobre</li>
                </HashLink>
                <HashLink smooth to={"#contact"} onClick={()=>{CloseMenu()}}>
                    <li className="optionsMenuItem">Contato</li>   
                </HashLink>
                <HashLink smooth to={"#location"} onClick={()=>{CloseMenu()}}>
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

