import React, {useState, useEffect} from "react";
import './inputViability.css';

import {FirstInput,SecondInput,ThirdInput,FourthInput,FifthInput,SixthInput} from './inputCamps'
export default function InputViability(props) {

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    
        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
        return windowSize.width;
    }

    const windowSizeUpdate = useWindowSize();

    return (
        (() => {
            switch (props.changeInput) {
                case 0:
                    return <FirstInput windowSize={windowSizeUpdate} changeInput={props.changeInput}/>;
                case 1:
                    return <SecondInput windowSize={windowSizeUpdate} changeInput={props.changeInput}/>;
                case 2:
                    return <ThirdInput windowSize={windowSizeUpdate} changeInput={props.changeInput}/>;
                case 3:
                    return <FourthInput windowSize={windowSizeUpdate} changeInput={props.changeInput}/>;
                case 4:
                    return <FifthInput windowSize={windowSizeUpdate} changeInput={props.changeInput}/>;
                case 5:
                    return <SixthInput windowSize={windowSizeUpdate} changeInput={props.changeInput}/>;
                default:
                    return null;
            }
        })()
    );
}
