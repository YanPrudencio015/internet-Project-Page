import React, { useEffect, useState } from "react";

import './pagesteps.css'


const steps = [
    {number:1, title:"CEP"},
    {number:2, title:"Endereço"},
    {number:3, title:"Forma de Pagamento"},
    {number:4, title:"progresso"},
    {number:5, title:"progresso"},
    {number:6, title:"progresso"},
]



export default function StepProgressBar(props){

    const[currentlyStep, setCurrentlyStep] =useState(0)
    const[progressStep,setProgresStep] = useState(20)




// useEffect(()=>{
//     let count = 0
//     setInterval(()=>{
//         count ++
//         setCurrentlyStep(count)
//         updateProgress(count)

//         if(count === 6){
//             count = 0
//         }
//     },1000)
// },[])




// function updateProgress(count){
//     const multiply = 100 /(6 - 1)
//     const width = count * multiply;
//     setProgresStep(width)
// }



return(


        <section className="availabilityPageSteps">
            <div className="progress-container">
               <div className="progress-bar">
                {/* <div className="progress" style={{transform: `scaleY(${progressStep * props.updateStep}%)`}}></div> */}
                <div className="progress" 
                    style={{transform: `scaleY(${props.progressStep}%)`}}></div>
               </div>
                <ol className="steps">
                    {console.log(props.updateStep)}
                    <li className="step">
                        <span 
                            className={ props.updateStep === 1 ?
                                 "number active": "number"}>{props.updateStep > 1 ? <i class="checkStepProgress fa-solid fa-check"></i>: 1 }</span>
                                 <p className="stepText">CEP</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep === 2 ?
                                 "number active": "number"}>{props.updateStep > 2 ? <i class="checkStepProgress fa-solid fa-check"></i>: 2 }</span>
                                 <p className="stepText">Dados Pessoais</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep === 3 ?
                                 "number active": "number"}>{props.updateStep > 3 ? <i class="checkStepProgress fa-solid fa-check"></i>: 3 }</span>
                                 <p className="stepText">Progress</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep === 4 ?
                                 "number active": "number"}>{props.updateStep > 4 ? <i class=" checkStepProgress fa-solid fa-check"></i>: 4 }</span>
                                 <p className="stepText">Progress</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep === 5 ?
                                 "number active": "number"}>{props.updateStep > 5 ? <i class=" checkStepProgress fa-solid fa-check"></i>: 5 }</span>
                                 <p className="stepText">Progress</p></li>
                    <li className="step">
                        <span 
                            className={ props.updateStep === 6 ?
                                 "number active": "number"}>{props.updateStep > 6 ? <i class=" checkStepProgress fa-solid fa-check"></i>: 6 }</span>
                                 <p className="stepText">Progress</p></li>
                </ol>
            </div>
        </section>
    )
}