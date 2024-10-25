import React, { useEffect, useState } from "react";


// redux
import { setCepObject } from "../../../reducers/inputsReducer";
import { useSelector, useDispatch } from "react-redux";


export default function InputBtnProgress(props){
    const [userCEPInfo, setUserCEPInfo] = useState({logradouro:"", bairro:"", estado:"", uf:"", cep:""});

    // redux

    const selector = useSelector(state => state.CEPValueString.myString)
    const CEpInfo = useSelector( state => state.CEPObjectInfo.myObject)
    const dispatch = useDispatch();
    function UpdateClientInfo(){
        let value = selector.replace(/\D/g, "")
        let cepForm  = ""
        cepForm = value.replace(/(\d{8})(\d)/, '$1$2');
        
        const CEPAPI = async()=>{
            try{
                const response = await fetch(`https://viacep.com.br/ws/${cepForm}/json`)
                if(!response.ok){
                    throw new Error("Erro ao buscar o CEP");
                }
                const data = await response.json();

                setUserCEPInfo(() => (
                    { 
                    logradouro:data.logradouro,
                    bairro:data.bairro,
                    estado:data.estado, 
                    uf:data.uf, 
                    cep:data.cep}))
                } catch(error){console.log(error.message)}
            }
            CEPAPI();
        }
        
        useEffect(()=>{
            dispatch(setCepObject(userCEPInfo.logradouro,userCEPInfo.bairro,userCEPInfo.estado,
                                                        userCEPInfo.uf,userCEPInfo.cep))
        },[userCEPInfo])


    return(
        <div className="InputSectionFooter">
            <button className={"StepOptinsBtn"} 
                onClick={props.decrementing} disabled={props.value === 1}>Voltar</button>
            <button className={"StepOptinsBtn"} 
                onClick={()=>{props.incrementing();UpdateClientInfo()}} disabled={props.value === 7}>Avançar</button>
              
        </div>
    )
}