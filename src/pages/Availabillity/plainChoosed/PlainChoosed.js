import React from "react";
import "./plainchoosed.css"


function PlainChoosed(props){

    return(
        <div className="avtPagePlainSection">
        <button className="plainChosedBtn">Plano: <span className="plainChosedSpan">Standard</span></button>
        <button className="plainChosedBtn">Preço: <span className="plainChosedSpan">R$79,90</span></button>
        <button className="plainChosedBtn">Megas: <span className="plainChosedSpan">90 Megas</span></button>
        <button className="plainChosedBtn">Download: <span className="plainChosedSpan">90 Download</span></button>
        <button className="plainChosedBtn">Upload: <span className="plainChosedSpan">50 Upload</span></button>
    </div>
    )
}


export default PlainChoosed