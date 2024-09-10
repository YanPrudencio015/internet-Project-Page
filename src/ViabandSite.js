import React, { useContext, useState } from "react";
import './viabandSite.css';

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


/*

a fazer:

 analizar o menu top e corrigir prossíveis erros (feito)

 adicionar um toggle darck com a opção de ser um dropdown que recebe as opções dark e light com um 
 btn escrito "Aparencia" e dolado um icon de lua ou sol, dependendo da opção (feito - de outra forma)

 alterar o botão de client (feito)

tornar o menu mobile para outros dispositivos que precisam de um menu mobile

adicionar as opções no menu mobile

tornar as informações do card responsivo para outros dispositivos

adicionar mais informações no price mais vendido e no mais barato e com cores diferentes

adicionar um icon de atenção para falar sobre o pagamento

começar a desenvolver a sessão de contatos
*/
