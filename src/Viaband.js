import React, { useContext, useState } from "react";
import './viaband.css';



// components
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import FooterWebsite from './components/footer/FooterWebsite'




// Context API
import { DarkModeToggleProvider, darkModeContext } from './APIContext/BtnsContext';


function Viaband(props) {
    return (
        <DarkModeToggleProvider>
            <DarkModeWrapper />
        </DarkModeToggleProvider>
    );
}

function DarkModeWrapper() {
    const [darkMode, setDarkMode] = useContext(darkModeContext);

    return (
             <section className={darkMode === false ? "viabandSite light" : "viabandSite dark"}>
            <Navbar />
            <Main />
            <FooterWebsite />
        </section>
    );
}

export default Viaband;
