import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './viability.css'
export default function Viability(props){



    return(
        <section className="viabilitySection">
            <div className="viabilityCard">
                <h3 className="h3ViabilityTitle">Via Band Fibra</h3>
                <h1 className="h1ViabilityTitle">Verifique se a Viaband está disponível no seu local</h1>
            </div>

            <Link  className="viabilityBtn" to={"consulta-viabilidade"}>
            <button className="viabilityButton">Verificar disponibilidade</button>
            </Link>
        </section>
    )
}