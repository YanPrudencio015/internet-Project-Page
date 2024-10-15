import React, { useEffect, useState } from "react";
import './inputViability.css';

import {FirstInput,SecondInput,ThirdInput,FourthInput,FifthInput,SixthInput} from './inputCamps'
export default function InputViability(props) {
    // const [inputCamp, setInputCamp] = useState(0);


    return (
        (() => {
            switch (props.changeInput) {
                case 0:
                    return <FirstInput />;
                case 1:
                    return <SecondInput />;
                case 2:
                    return <ThirdInput />;
                case 3:
                    return <FourthInput />;
                case 4:
                    return <FifthInput />;
                case 5:
                    return <SixthInput />;
                default:
                    return null; // ou algum componente padrão, se necessário
            }
        })()
    );
    


    // return (


    //     props.changeInput === 0 ? <FirstInput/> : 
    //     props.changeInput === 1 ? <SecondInput/> : 
    //     props.changeInput === 2 ? <ThirdInput/>  : 
    //     props.changeInput === 3 ? <FourthInput/> : 
    //     props.changeInput === 4 ? <FifthInput/> :
    //     props.changeInput === 5 ? <SixthInput/> :);}

}
