import React from "react";
import './main.css'
import Pricing from "./pricing/Pricing";
import AboutUs from "./aboutUs/AboutUs";
import Viability from '../main/viability/Viability';
import Doubts from '../main/doubts/Doubts';
import ClientComment from './clientsComments/ClientsComments'
import OfficeLocation from "./officeLocation/OfficeLocation";


function Main(props){

    return(
            <section className="main">
                <Pricing/>
                <AboutUs/>
                <ClientComment/>
                <Viability/>
                <Doubts/>
                <OfficeLocation/>
            </section>
    )
}



export default Main;