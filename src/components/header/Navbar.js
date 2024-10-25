import React from "react";
import './header.css'

// conponents
import NavbarTop from './NavbarTop/NavbarTop'
import NavbarBackground from './NavbarBackground/NavbarBackground'
import NavbarMobile from './NavbarMobile/NavbarMobile'

import {MenuMobileProvider} from '../../APIContext/BtnsContext'


function Header(props){
    return(
        <MenuMobileProvider>
                <section className="headerMenu">
                    <NavbarTop/>
                    <NavbarBackground/>
                    <NavbarMobile/>
                </section>
         </MenuMobileProvider>
    )
}



export default Header