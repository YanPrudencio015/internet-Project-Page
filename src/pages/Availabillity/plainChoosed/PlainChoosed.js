import React, { useEffect } from "react";
import "./plainchoosed.css"

import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";


function PlainChoosed(props){
    const selector = useSelector(state => state.PlainDetails.plainObject)
    
    return(
        <div className="avtPagePlainSection">
            {selector.name === ''?
            <Link to='/Escolher-Plano'>
             <i class="addAPlain fa-solid fa-plus"></i>
            </Link>
             :     
             ( <>
                <button className="plainChosedBtn">
                    <p className="plainDetailsTitle">Plano:</p>
                    <span className="plainChosedSpan">{selector.name}</span>
                </button>
                <button className="plainChosedBtn">
                    <p className="plainDetailsTitle">Preço:</p>
                    <span className="plainChosedSpan">{selector.price}</span>
                </button>
                <button className="plainChosedBtn">
                    <p className="plainDetailsTitle">Megas:</p>
                    <span className="plainChosedSpan">{selector.mega} Megas</span>
                </button>
                <button className="plainChosedBtn">
                    <p className="plainDetailsTitle">Download:</p>
                    <span className="plainChosedSpan">{selector.down} Download</span>
                </button>
                <button className="plainChosedBtn">
                    <p className="plainDetailsTitle">Upload:</p>
                    <span className="plainChosedSpan">{selector.up} Upload</span>
                </button>
            </> 
        )}
    </div>
    )
}


export default PlainChoosed