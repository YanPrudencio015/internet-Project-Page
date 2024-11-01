import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
// reducers
import { setString } from "../../../reducers/inputsReducer";




export function FirstInput(props){
    // script for input Cep
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
        <div className="input-wrapper-default"
            style={props.windowSize <= 900 && props.windowSize >= 601 && props.changeInput === 1? 
            {height: "6vh", width:"37vw"}: 
            {height: "6vh", width:"37vw"}}>
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
        <div className="InputSectionInfo" 
            style={props.windowSize <= 600 && props.changeInput === 1? 
            {height: "30vh", gap:"15%"}: 
            {height: "22vh", gap:"5%"}}
            key="input1"
        >
        <div className="input-wrapper-default"
            style={props.windowSize <= 900 && props.windowSize >= 601 && props.changeInput === 2? 
            {height: "7vh", width:"51vw"}: 
            {height: "7vh", width:"51vw"}}>
            <input className="input-default" id="inputCEP2" required />
            <label htmlFor="inputCEP2" className="label-default">input2</label>
        </div>
        <div className="input-wrapper-default"
            style={props.windowSize <= 900 && props.windowSize >= 601 && props.changeInput === 2? 
            {height: "7vh", width:"51vw"}: 
            {height: "7vh", width:"51vw"}}>
            <input className="input-default" id="inputCEP3" required />
            <label htmlFor="inputCEP3" className="label-default">input2</label>
        </div>
    </div>
    )
}
export function ThirdInput(props){
    return(
        <div className="InputSectionInfo" 
            style={
                props.windowSize <= 600 && props.changeInput === 2?
                {height:"40vh", gap:"10%"}:
                props.windowSize <= 900 && props.windowSize >= 601 && props.changeInput === 2?
                {height:"38vh", gap:"5%"}: {height:"22vh", gap:"5%"}} 
                key="input2" 
            >
        <div className="input-wrapper-default"  
            style={props.windowSize <= 900 && props.windowSize >= 601 && props.changeInput === 2?
            {height:"7vh", width:"60vw"}: {height:"7vh", width:"60vw"}} 
            >
            <input className="input-default" id="inputCEP4" required />
            <label htmlFor="inputCEP4" className="label-default">input3</label>
        </div>
        <div className="input-wrapper-default" 
            style={props.windowSize <= 900 && props.windowSize >= 601 && props.changeInput === 2?
            {height:"7vh", width:"60vw"}: {height:"7vh", width:"60vw"}} 
        >
            <input className="input-default" id="inputCEP5" required />
            <label htmlFor="inputCEP5" className="label-default">input3</label>
        </div>
        <div className="input-wrapper-default" 
            style={props.windowSize <= 900 && props.windowSize >= 601 && props.changeInput === 2?
            {height:"7vh", width:"60vw"}: {height:"7vh", width:"60vw"}} 
        >
            <input className="input-default" id="inputCEP6" required />
            <label htmlFor="inputCEP6" className="label-default">input3</label>
        </div>
        <div className="input-wrapper-default" 
            style={props.windowSize <= 900 && props.windowSize >= 601 && props.changeInput === 2?
            {height:"7vh", width:"60vw"}: {height:"7vh", width:"60vw"}} 
        >
            <input className="input-default" id="inputCEP7" required />
            <label htmlFor="inputCEP7" className="label-default">input3</label>
        </div>
    </div>
    )
}
export function FourthInput(props){
    return(
        <div className="InputSectionInfo"
            style={props.windowSize <= 600 && props.changeInput === 3?
            {height:"40vh", gap:"10%"}:
            props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 3?
            {height:"40vh", gap:"5%"}:
            {height:"40vh", gap:"5%"}} 
            key="input3"
        >
        <div className="input-wrapper-default"
            style={  props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 3?
            {height:"8vh", width:"60vw"}:
            {height:"8vh", width:"60vw"}}
        >
            <input className="input-default" id="inputCEP8" required />
            <label htmlFor="inputCEP8" className="label-default">input4</label>
        </div>
        <div className="input-wrapper-default"
            style={  props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 3?
            {height:"8vh", width:"60vw"}:
            {height:"8vh", width:"60vw"}}
        >
            <input className="input-default" id="inputCEP9" required />
            <label htmlFor="inputCEP9" className="label-default">input4</label>
        </div>
        <div className="input-wrapper-default"
            style={  props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 3?
            {height:"8vh", width:"60vw"}:
            {height:"8vh", width:"60vw"}}
        >
            <input className="input-default" id="inputCEP10" required />
            <label htmlFor="inputCEP10" className="label-default">input4</label>
        </div>
        <div className="input-wrapper-default"
            style={  props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 3?
            {height:"8vh", width:"60vw"}:
            {height:"8vh", width:"60vw"}}
        >
            <input className="input-default" id="inputCEP11" required />
            <label htmlFor="inputCEP11" className="label-default">input4</label>
        </div>
    </div>
    )
}
export function FifthInput(props){
    return(
        <div className="InputSectionInfo" style={
            props.windowSize <= 600 && props.changeInput === 4? 
            {height:"30vh", gap:"12%"}:
            props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 4?
            {height:"30vh", gap:"5%"}:
            {height:"22vh", gap:"5%"}} 
            key="input4"
        >
        <div className="input-wrapper-default"
        style={props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 4 ?
            {height:"7vh", width:"60vw"}:{height:"7vh",width:"60vw"} }
        >
            <input className="input-default" id="inputCEP12" required />
            <label htmlFor="inputCEP12" className="label-default">input5</label>
        </div>
        <div className="input-wrapper-default"
        style={props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 4 ?
            {height:"7vh", width:"60vw"}:{height:"7vh",width:"60vw"} }
        >
            <input className="input-default" id="inputCEP13" required />
            <label htmlFor="inputCEP13" className="label-default">input5</label>
        </div>
        <div className="input-wrapper-default"
        style={props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 4 ?
            {height:"7vh", width:"60vw"}:{height:"7vh",width:"60vw"} }
        >
            <input className="input-default" id="inputCEP14" required />
            <label htmlFor="inputCEP14" className="label-default">input5</label>
        </div>
    </div>
    )
}


export function SixthInput(props){
    return(
        <div className="InputSectionInfo"
            style={props.windowSize <= 600 && props.changeInput === 5? 
                {height:"44vh", gap:"7%"}:
            props.windowSize <= 600 && props.changeInput === 5? 
                {height:"50vh", gap:"5%"}:
                {height:"50vh", gap:"5%"}
            } key="input5">
        <div className="input-wrapper-default"
         style={props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 5 ?
            {height:"7vh", width:"60vw"}:{height:"7vh",width:"60vw"} }
        >
            <input className="input-default" id="inputCEP15" required />
            <label htmlFor="inputCEP15" className="label-default">input6</label>
        </div>
        <div className="input-wrapper-default"
         style={props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 5 ?
            {height:"7vh", width:"60vw"}:{height:"7vh",width:"60vw"} }
        >
            <input className="input-default" id="inputCEP16" required />
            <label htmlFor="inputCEP16" className="label-default">input6</label>
        </div>
        <div className="input-wrapper-default"
         style={props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 5 ?
            {height:"7vh", width:"60vw"}:{height:"7vh",width:"60vw"} }
        >
            <input className="input-default" id="inputCEP17" required />
            <label htmlFor="inputCEP17" className="label-default">input6</label>
        </div>
        <div className="input-wrapper-default"
         style={props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 5 ?
            {height:"7vh", width:"60vw"}:{height:"7vh",width:"60vw"} }
        >
            <input className="input-default" id="inputCEP18" required />
            <label htmlFor="inputCEP18" className="label-default">input6</label>
        </div>
        <div className="input-wrapper-default"
         style={props.windowSize <= 900 && props.windowSize <= 601 && props.changeInput === 5 ?
            {height:"7vh", width:"60vw"}:{height:"7vh",width:"60vw"} }
        >
            <input className="input-default" id="inputCEP19" required />
            <label htmlFor="inputCEP19" className="label-default">input6</label>
        </div>
    </div>
    )
}

