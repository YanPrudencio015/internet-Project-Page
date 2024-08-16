import React, { useContext, useState } from "react";
import { darkModeContext } from "../../APIContext/BtnsContext";
import { useSelector, useDispatch } from "react-redux";
import {MenuMobileToggle} from '../../reducers/btnMenuReducer'
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
            <h1 className="viabandTitle">Viaband</h1>
            <nav className="plains">
                <button className="plainsBtnOption">sua casa</button>
                <button className="plainsBtnOption">sua empresa</button>
            </nav>
            <ul className="menu">
                <li tabIndex={0} className="menuItem">Menu</li>
                <li tabIndex={0} className="menuItem">Planos</li>
                <li tabIndex={0} className="menuItem">Sobre</li>
                <li tabIndex={0} className="menuItem">Contato</li>
                <li tabIndex={0} className="menuItem">Localização</li>
            </ul>
            <i tabIndex={0} className="socialIcon fa-brands fa-whatsapp"></i>
            {/* <i className="socialIcon fa-brands fa-instagram"></i>
            <i className="socialIcon fa-brands fa-facebook"></i> */}
            
            <i onClick={() => setDarkMode(!darkMode)} className="fa-solid StyleModeIcon fa-circle-half-stroke"></i>
            
            <div className="clientButton">
                <i className="fa-solid fa-user"></i>
                <p className="clientTextBtn">Sou cliente</p>
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
