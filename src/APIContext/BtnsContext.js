import React, { createContext, useState } from "react";



export const menuMobileContext = createContext();


export function MenuMobileProvider(props){
    const[menuMobileOpen, setMenuMobileOpen] = useState(false)
    
    const menuMobileToggle = () =>{
        setMenuMobileOpen(prevMenuMobile => prevMenuMobile === false ? true: false)        
    }
    return(
        <menuMobileContext.Provider value={[menuMobileOpen, menuMobileToggle]}>
            {props.children}
        </menuMobileContext.Provider>
    )
}


// dark mode toggle
export const darkModeContext = createContext();



export function DarkModeToggleProvider(props){
    const [darkModeActive, setDarkModeActive] = useState(false);

    function darkModeToggle(){
        setDarkModeActive(prevDarkMode => prevDarkMode === false ? true: false)
    }

    return(
        <darkModeContext.Provider value={[darkModeActive, darkModeToggle]}>
                {props.children}
        </darkModeContext.Provider>
    )
}



