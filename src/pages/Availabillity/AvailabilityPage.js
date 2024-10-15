import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './availabilityPage.css';
import StepsProgressBar from './stepprogressbar/PageSteps';

// Reducers and Actions

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { CepValue, CepObject } from "../../reducers/inputsRedux/reducer/inputsReducer";
// components
import InputViability from "./inputViability/InputViability";
import PlainChoosed from "./plainChoosed/PlainChoosed";
import ClientCEPInfo from "./clientCep/ClientCepInfo";
import BtnProgress from "./InputsBtns/InputBtn";


function AvailabilityPage(props){
    const[stepPosition, setStepPosition] = useState(1) 
    const[progressStep, SetprogressStep] = useState(0) 
    const[inputChange, setInputchange] = useState(0)
    

    const rootReducer = combineReducers({
        CEPReduce: CepValue,
        CEPObjectInfo: CepObject,
    })


    const store= createStore(rootReducer)

    function IncrementToProgressStep(){
        setStepPosition((prev)=> prev + 1)
        SetprogressStep((prev)=> prev + 20)
        setInputchange(prev => prev +1)
        if(progressStep === 100){
            SetprogressStep((prev)=> prev = 100)
        }
        if(inputChange === 5){
            setInputchange(prev => prev = 5)   
        }
    }

    function DecrementToProgressStep(){
        setStepPosition((prev)=> prev - 1)
        SetprogressStep((prev)=> prev - 20)
        setInputchange(prev => prev -1)
        
        if(stepPosition === 1){
            setStepPosition((prev)=> prev = 1)
        }
        if(progressStep === 0){
            SetprogressStep((prev)=> prev = 0)
        }
        if(inputChange === 0){
            setInputchange(prev => prev = 0)   
        }
    }



    return(
        <Provider store={store}>

            <section className="availabilityPage">
                    <div className="availabilityPageHeader">
                    <Link className="availabilityPageHeaderLink" to={"/"}>
                    <button className="availabilityPageHeaderBtn">Voltar ao menu</button>
                    </Link>

                        <h1 className="availabilityPageHeaderTitle">Verifique a Disponibilidade da Viaband na sua área: </h1>
                    </div>
                    <StepsProgressBar updateStep={stepPosition} progressStep={progressStep}/>
                    <div className="availabilityPageClientInfo">
                        <div className="avtPageInputSection">
                            <div className="InputSectionText">
                                <p className="text-Input">
                                    Informe o seu CEP
                                </p>
                            </div>

                            <InputViability changeInput={inputChange}/>
                            <BtnProgress    incrementing={IncrementToProgressStep}
                                            decrementing={DecrementToProgressStep}/>
                        </div>

                        <PlainChoosed/>
                        <ClientCEPInfo/>
                    
                    </div>
            </section>
        </Provider>
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