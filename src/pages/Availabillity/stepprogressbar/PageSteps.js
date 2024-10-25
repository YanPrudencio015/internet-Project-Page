import React, { useEffect, useState } from "react";

import './pagesteps.css'




export default function StepProgressBar(props){


    const steps =[
        { name: "CEP",number:1 ,title:'Informe o seu CEP' },
        { name: "dados",number:2 ,title:'Infome seus dados' },
        { name: "Passo3",number:3 ,title:'Cadastro 3' },
        { name: "Passo4",number:4 ,title:'Cadastro 4' },
        { name: "Planos",number:5 ,title:'Cadastro 5' },
        { name: "Passo6",number:6 ,title:'Cadastro 6' },
]


return(

        <section className="availabilityPageSteps">
            <div className="progress-container">
               <div className="progress-bar">
                <div className="progress" 
                    style={{transform: `scaleY(${props.progressStep}%)`}}></div>
               </div>
                <ol className="steps">
                     <li className="step">
                        <span 
                            className={ props.updateStep >= 1 ?
                                 "number active": "number"}>
                                    {(props.updateStep > 1 ? <i class="checkStepProgress fa-solid fa-check"></i>: 1)}</span>
                                 {/* <p className="stepText">CEP</p></li> */}
                                 <p className={props.updateStep >= 1? "stepText active": "stepText"}>CEP</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep >= 2 ?
                                 "number active": "number"}>
                                    {props.updateStep > 2 ? <i class="checkStepProgress fa-solid fa-check"></i>: 2 }</span>
                                 {/* <p className="stepText">Dados Pessoais</p></li> */}
                                 <p className={props.updateStep >= 2? "stepText active": "stepText"}>Dados Pessoais</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep >= 3 ?
                                 "number active": "number"}>
                                    {props.updateStep > 3 ? <i class=" checkStepProgress fa-solid fa-check"></i>: 3 }</span>
                                 {/* <p className="stepText">Progress</p></li> */}
                                 <p className={props.updateStep >= 3? "stepText active": "stepText"}>Progress</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep >= 4?
                                 "number active": "number"}>
                                    {props.updateStep > 4 ? <i class=" checkStepProgress fa-solid fa-check"></i>: 4 }</span>
                                 {/* <p className="stepText">Progress</p></li> */}
                                 <p className={props.updateStep >= 4? "stepText active": "stepText"}>Progress</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep >= 5 ?
                                 "number active": "number"}>
                                    {props.updateStep > 5 ? <i class=" checkStepProgress fa-solid fa-check"></i>: 5 }</span>
                                 {/* <p className="stepText">Plano</p></li> */}
                                 <p className={props.updateStep >= 5? "stepText active": "stepText"}>Plano</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep >= 6 ?
                                 "number active": "number"}>
                                    {props.updateStep > 6 ? <i class=" checkStepProgress fa-solid fa-check"></i>: 6 }</span>
                                 {/* <p className="stepText">Progress</p> */}
                                 <p className={props.updateStep >=6 ? "stepText active": "stepText"}>Progress</p>
                    </li> 

                    


                        
                </ol>
            </div>
        </section>
    )
}

