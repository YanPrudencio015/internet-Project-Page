import React from "react";
import './main.css'
import Pricing from "./pricing/Pricing";
import AboutUs from "./AboutUs";


function Main(props){
    return(
        <section className="main">
            <Pricing/>
            <AboutUs/>
        </section>
    )
}



export default Main;