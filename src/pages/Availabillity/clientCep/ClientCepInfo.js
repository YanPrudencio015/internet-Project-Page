import React, { useEffect } from "react";
import './clientcepinfo.css'
import { useSelector } from "react-redux";
import { json } from "react-router";





function ClientCEPInfo(props){

    const cepInfo = useSelector(state => state.CEPObjectInfo.myObject)
useEffect(()=>{
    console.log(cepInfo)
})
    return(
        <div className="avtPageClientCEP">
        <p className="ClientCEPTitle">Endereço da Instalação:</p>
        <p className="ClientCEPRes">
            <p>{cepInfo.logradouro}</p>,
            <p>{cepInfo.bairro}</p>,
            <p>{cepInfo.estado}</p>,  
            <p>{cepInfo.uf}</p>  
            <p>{cepInfo.cep}</p>
        </p>
    </div>
    )
}


export default ClientCEPInfo;