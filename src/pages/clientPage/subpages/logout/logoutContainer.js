import React from "react";
import './logoutcontainer.css'




export default function LogoutContainer(props){

    return(
        <section className="logOutSection">
        <div className="logOutCard">
            <h1 className="logOutSection-Title">Deseja sair da conta ?</h1>
            <div className="logOutSection-Options">
                <button className="logOutSection-Btn">Continuar na conta</button>
                <button className="logOutSection-Btn">Sair</button>
            </div>
        </div>
    </section>
    )
}