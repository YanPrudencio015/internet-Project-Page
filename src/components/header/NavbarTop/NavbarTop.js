import React, { useContext, useState } from "react";
import { darkModeContext } from "../../../APIContext/BtnsContext";
import { useSelector, useDispatch } from "react-redux";
import {MenuMobileToggle} from '../../../reducers/btnMenuReducer'
import './navbarTop.css'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Login from "../../../pages/loginPage/LoginPage";



// Define the action type
function NavbarTop(props) {
    // Dark mode toggle 
    const [darkMode, setDarkMode] = useContext(darkModeContext);

    // Menu mobile toggle 

    const dispatch = useDispatch()

    const menuMobileToggleStore = useSelector(state => state)

    // console.log(menuMobileToggleStore)



    return (
        // <section className="NavbarTop">
        <section className={menuMobileToggleStore? "NavbarTop active": "NavbarTop"}>
            <HashLink className="viabandTitleLink" smooth to={"#pagetop"}>
                <h1 className="viabandTitle">Viaband</h1>
            </HashLink>
            <nav className="plains">
                <button className="plainsBtnOption">sua casa</button>
                <button className="plainsBtnOption">sua empresa</button>
            </nav>
            <ul className="menu">
                <HashLink className="menuItemLink" smooth to={"#pagetop"}>
                <li tabIndex={0} className="menuItem">Menu</li>
                </HashLink>
                <HashLink className="menuItemLink" smooth to={"#plain"}>
                <li tabIndex={0} className="menuItem">Planos</li>
                </HashLink>
                
                <HashLink className="menuItemLink" smooth to={"#aboutUs"}>
                    <li tabIndex={0} className="menuItem" >Sobre</li>
                </HashLink>

                <HashLink className="menuItemLink" smooth to={"#location"}>
                <li tabIndex={0} className="menuItem">Localização</li>
                </HashLink>
                <HashLink className="menuItemLink" smooth to={"#contact"}>
                <li tabIndex={0} className="menuItem">Contato</li>
                </HashLink>
            </ul>
            <i tabIndex={0} className="socialIcon fa-brands fa-whatsapp"></i>
            
            <i onClick={() => setDarkMode(!darkMode)} className="fa-solid StyleModeIcon fa-circle-half-stroke"></i>
            
            <div className="clientButton">
                <i className="fa-solid fa-user"></i>
                {/* < Link to={<Login/>}> */}
                < Link to="login" element>
                <p className="clientTextBtn">Sou cliente</p>
                </Link>
            </div>
            
            {/* Button to toggle menu mobile */}
            <button
                onClick={() => {
                    menuMobileToggleStore === false ?
                     dispatch({type:"OPEN"}):dispatch({type:"CLOSE"})}}
                className="button"
            >
                {/* Open Menu Toggle button */}
                <span className={menuMobileToggleStore ? "burger-1 is-closed" : "burger-1"}>
                    <span className="bars" id="bar1"></span>
                    <span className="bars" id="bar2"></span>
                    <span className="bars" id="bar3"></span>
                </span>
            </button>


           
        </section>
    );
}

export default NavbarTop;
