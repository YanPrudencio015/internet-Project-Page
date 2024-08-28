import React, { useEffect } from "react";

import './viability.css'
import ScrollReveal from 'scrollreveal';
export default function Viability(props){




    useEffect(()=>{
        ScrollReveal().reveal(".viabilitySection",{
            duration: 400,
            opacity: 1,
            distance: '70px',
            origin: 'bottom',
            easing: 'ease', 
            // easing: 'ease-in-out', 
        })
    })
    return(
        <section className="viabilitySection">
            <div className="viabilityCard">
                <h3 className="h3ViabilityTitle">Via Band Fibra</h3>
                <h1 className="h1ViabilityTitle">Verifique se a Viaband está disponível no seu local</h1>
            </div>

            <button className="viabilityBtn">Verificar disponibilidade</button>
        </section>
    )
}