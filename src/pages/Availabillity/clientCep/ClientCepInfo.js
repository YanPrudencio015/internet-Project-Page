import React from "react";
import './clientcepinfo.css'


// redux
import { useSelector } from "react-redux";


function ClientCEPInfo(props){

    // redux
    const selector = useSelector(state => state.CEPObjectInfo.myObject);
    return(
        <div className="avtPageClientCEP">
                    {selector.logradouro === ''?
                    <p className="ClientCEPTitle">Insira suas informações para prosseguir</p>:  
    
                    <div className="ClientCEPRes">
                    <p className="ClientCEPTitle-2">Endereço da Instalação:</p>
                    <p className="AdressInfo">{selector.logradouro},</p>
                    <p className="AdressInfo">{selector.bairro},</p>
                    <p className="AdressInfo">{selector.estado},</p>  
                    <p className="AdressInfo">{selector.uf} </p>  
                    <p className="AdressInfo">{selector.cep} </p>
                </div>
                }
    </div>
    )
}


export default ClientCEPInfo;