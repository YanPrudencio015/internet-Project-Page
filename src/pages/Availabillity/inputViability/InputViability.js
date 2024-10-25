import React, { useEffect, useState } from "react";
import './inputViability.css';

import {FirstInput,SecondInput,ThirdInput,FourthInput,FifthInput,SixthInput} from './inputCamps'
export default function InputViability(props) {
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
                    return null;
            }
        })()
    );
}
