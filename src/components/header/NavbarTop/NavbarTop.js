import React, { useContext} from "react";
import { darkModeContext } from "../../../APIContext/BtnsContext";
import './navbarTop.css'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// redux
import { useDispatch, useSelector } from "react-redux";
import { REDUCERopenMenu, REDUCERcloseMenu } from "../../../reducers/btnMenuReducer";
function NavbarTop(props) {
// Dark mode toggle 
    const [darkMode, setDarkMode] = useContext(darkModeContext);

// redux
    const selector = useSelector(state => state.menuMobile.isMenuOpen)
    const dispath = useDispatch();

    function changeMenu(){
        selector === false ? dispath(REDUCERopenMenu()): dispath(REDUCERcloseMenu())
    }

    

    return (
        <section className={selector? "NavbarTop active": "NavbarTop"}>
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
                < Link to="login" element>
                <p className="clientTextBtn">Sou cliente</p>
                </Link>
            </div>
            
            <button className="button" onClick={()=>{changeMenu()}}>
                <span className={selector ? "burger-1 is-closed" : "burger-1"}>
                    <span className="bars" id="bar1"></span>
                    <span className="bars" id="bar2"></span>
                    <span className="bars" id="bar3"></span>
                </span>
            </button>


           
        </section>
    );
}

export default NavbarTop;
