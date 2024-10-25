import React, { useState } from "react";
import { Link } from "react-router-dom";
import './availabilityPage.css';
import StepsProgressBar from './stepprogressbar/PageSteps';

// components
import InputViability from "./inputViability/InputViability";
import PlainChoosed from "./plainChoosed/PlainChoosed";
import ClientCEPInfo from "./clientCep/ClientCepInfo";
import BtnProgress from "./InputsBtns/InputBtn";


function AvailabilityPage(props){
    const[CircleColor, setCircleColor] = useState(1) 
    const[progressStep, SetLineprogress] = useState(0) 
    const[inputChange, setInputchange] = useState(0)

    function IncrementToProgressStep(){
        setCircleColor((prev)=> prev + 1)
        SetLineprogress((prev)=> prev + 20)
        setInputchange(prev => prev +1)
        
        if(progressStep === 100){
            SetLineprogress((prev)=> prev = 100)
        }
        checkXtrems()
    }

    function DecrementToProgressStep(){
        setCircleColor((prev)=> prev - 1)
        SetLineprogress((prev)=> prev - 20)
        setInputchange(prev => prev -1)
       
        if(progressStep === 0){
            SetLineprogress((prev)=> prev = 0)
        }
        if(inputChange === 0){
            setInputchange(prev => prev = 0)   
        }

        checkXtrems()
    }


    function checkXtrems(){
        if(CircleColor > 6){
            setCircleColor(6)
        }
        
        if(CircleColor < 1){
            setCircleColor(1)
        }

    }


    return(
            <section className="availabilityPage">
                    <div className="availabilityPageHeader">
                    <Link className="availabilityPageHeaderLink" to={"/"}>
                    <button className="availabilityPageHeaderBtn">Voltar ao menu</button>
                    </Link>

                        <h1 className="availabilityPageHeaderTitle">Verifique a Disponibilidade da Viaband na sua área: </h1>
                    </div>
                    <StepsProgressBar updateStep={CircleColor} progressStep={progressStep}/>
                    <div className="availabilityPageClientInfo">
                        <div className="avtPageInputSection">
                            <div className="InputSectionText">
                                <p className="text-Input">
                                    Informe o seu CEP
                                </p>
                            </div>

                            <InputViability changeInput={inputChange}/>
                            <BtnProgress    incrementing={IncrementToProgressStep}
                                            decrementing={DecrementToProgressStep}
                                            value={CircleColor}/>
                        </div>
                        <PlainChoosed/>
                        <ClientCEPInfo/>
                    </div>
            </section>
    )
}


/*



 <div className="inputWrapper">
                        <input type="text" className="inputAvtPage" required id="input"></input>
                        <label className="avtPagelabel" for="input">CEP</label>
                        <Link className="discoverCepLink" to={"https://buscacepinter.correios.com.br/app/endereco/"}>
                            <p className="discoverCepText">Não sabe seu CEP?</p>
                        </Link>
                    </div>


 <button className="nextStateBtn">Avançar 
                        <i className="nextIcon fa-solid fa-angles-right"></i>
                    </button>
*/

export default AvailabilityPage;