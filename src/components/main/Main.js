import React from "react";
import './main.css'
import Pricing from "./pricing/Pricing";
import AboutUs from "./aboutUs/AboutUs";
import Viability from '../main/viability/Viability';
import Doubts from '../main/doubts/Doubts'

function Main(props){
    return(
        <section className="main">
            <Pricing/>
            <AboutUs/>
            <Viability/>
            <Doubts/>
        </section>
    )
}



export default Main;