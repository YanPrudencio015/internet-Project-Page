import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
// reducers
import { setString } from "../../../reducers/inputsReducer";




export function FirstInput(props){

    const selector = useSelector(state => state.CEPValueString.myString)
    const dispatch = useDispatch()

    const CEPLink = "https://buscacepinter.correios.com.br/app/endereco/index.php";
    const[cepInput, setCepInput] = useState("");
    // receber as informações do Cep do Cliente.
    function cepInputUpdate(input){
        let value = input.target.value.replace(/\D/g,'');
        let cepForm = "";
        
        if(value.length >= 3){
            cepForm = value.replace(/(\d{5})(\d)/, '$1-$2')
        } else{
            cepForm = value;
        }
        setCepInput(cepForm);
    }

    useEffect(()=>{
        dispatch(setString(cepInput))
    },[cepInput])
    
    return(
        <div className="InputSectionInfo" key="input0">
        <div className="input-wrapper-default">
            <input 
                maxLength={9} 
                className="input-default" 
                id="inputCEP1" 
                required 
                onChange={cepInputUpdate} 
                value={cepInput} />

            <label htmlFor="inputCEP1" className="label-default" >CEP</label>
            <Link className="CEPLink" to={CEPLink} target="_blank">Não sabe seu CEP?</Link>
        </div>
    </div>
    )
}

export function SecondInput(props){
    return(
        <div className="InputSectionInfo" key="input1">
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP2" required />
            <label htmlFor="inputCEP2" className="label-default">input2</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP3" required />
            <label htmlFor="inputCEP3" className="label-default">input2</label>
        </div>
    </div>
    )
}
export function ThirdInput(props){
    return(
        <div className="InputSectionInfo" key="input2">
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP4" required />
            <label htmlFor="inputCEP4" className="label-default">input3</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP5" required />
            <label htmlFor="inputCEP5" className="label-default">input3</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP6" required />
            <label htmlFor="inputCEP6" className="label-default">input3</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP7" required />
            <label htmlFor="inputCEP7" className="label-default">input3</label>
        </div>
    </div>
    )
}
export function FourthInput(props){
    return(
        <div className="InputSectionInfo" key="input3">
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP8" required />
            <label htmlFor="inputCEP8" className="label-default">input4</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP9" required />
            <label htmlFor="inputCEP9" className="label-default">input4</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP10" required />
            <label htmlFor="inputCEP10" className="label-default">input4</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP11" required />
            <label htmlFor="inputCEP11" className="label-default">input4</label>
        </div>
    </div>
    )
}
export function FifthInput(props){
    return(
        <div className="InputSectionInfo" key="input4">
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP12" required />
            <label htmlFor="inputCEP12" className="label-default">input5</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP13" required />
            <label htmlFor="inputCEP13" className="label-default">input5</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP14" required />
            <label htmlFor="inputCEP14" className="label-default">input5</label>
        </div>
    </div>
    )
}


export function SixthInput(props){
    return(
        <div className="InputSectionInfo" key="input5">
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP15" required />
            <label htmlFor="inputCEP15" className="label-default">input6</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP16" required />
            <label htmlFor="inputCEP16" className="label-default">input6</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP17" required />
            <label htmlFor="inputCEP17" className="label-default">input6</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP18" required />
            <label htmlFor="inputCEP18" className="label-default">input6</label>
        </div>
        <div className="input-wrapper-default">
            <input className="input-default" id="inputCEP19" required />
            <label htmlFor="inputCEP19" className="label-default">input6</label>
        </div>
    </div>
    )
}

