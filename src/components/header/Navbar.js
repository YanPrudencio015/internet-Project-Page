import React from "react";
import './header.css'

// conponents
import NavbarTop from './NavbarTop/NavbarTop'
import NavbarBackground from './NavbarBackground/NavbarBackground'
import NavbarMobile from './NavbarMobile/NavbarMobile'

import {MenuMobileProvider} from '../../APIContext/BtnsContext'



// redux
import {createStore} from 'redux'
import { MenuMobileToggle } from "../../reducers/btnMenuReducer";
import {Provider} from 'react-redux'


function Header(props){
    
    const menuMobileBtnStore = createStore(MenuMobileToggle)

    return(
        <MenuMobileProvider>
                <section className="headerMenu">
            <Provider store={menuMobileBtnStore}>
                    <NavbarTop/>
                    <NavbarBackground/>
                    <NavbarMobile/>
            </Provider>
                </section>
         </MenuMobileProvider>
    )
}



export default Header