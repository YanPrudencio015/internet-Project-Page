import React, { useState,useEffect } from "react";

import "./doubts.css"
import ScrollReveal from 'scrollreveal';

const anwser = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem Ipsum.`

const questions = [
    {question:"Lorem Ipsum is simply", anwser:anwser},
    {question:"Lorem Ipsum is simply", anwser:anwser},
    {question:"Lorem Ipsum is simply", anwser:anwser},
    {question:"Lorem Ipsum is simply", anwser:anwser},
    {question:"Lorem Ipsum is simply", anwser:anwser},
    {question:"Lorem Ipsum is simply", anwser:anwser},
    {question:"Lorem Ipsum is simply", anwser:anwser},
    {question:"Lorem Ipsum is simply", anwser:anwser},
    {question:"Lorem Ipsum is simply", anwser:anwser},
    {question:"Lorem Ipsum is simply", anwser:anwser},
]


// function handleAccordion(e){
//     const btns = questions.map(question => {return question} )
//         btns.forEach(btn =>{
//             btn.className("accordion")
//         })
//         e.target.toggle.className(".accordion.active")
//     console.log(btn)
// }




export default function Doubts(props){
    const[toggleAccordion,setToggleAccordion] = useState(null)

        function handleAccordionActive(index){
            setToggleAccordion(prevIndex => prevIndex ===index ? null: index)
        }




        useEffect(()=>{
            ScrollReveal().reveal(".FAQ-Title",{
                duration: 400,
                opacity: 1,
                distance: '70px',
                origin: 'left',
                easing: 'ease', 
                // easing: 'ease-in-out', 
            })
            ScrollReveal().reveal(".accordion",{
                duration: 400,
                opacity: 1,
                distance: '70px',
                origin: 'right',
                easing: 'ease', 
                // easing: 'ease-in-out', 
            })
            ScrollReveal().reveal(".FAQ-MoreQuestion",{
                duration: 400,
                opacity: 1,
                distance: '70px',
                origin: 'left',
                easing: 'ease', 
                // easing: 'ease-in-out', 
            })
            ScrollReveal().reveal(".FAQ-Span",{
                duration: 400,
                opacity: 1,
                distance: '70px',
                origin: 'bottom',
                easing: 'ease', 
                // easing: 'ease-in-out', 
            })
        })

    return(
        <section className="doubtsSection">

            <h1 className="FAQ-Title">Perguntas <br/> Frequentes</h1>

            {questions.map((question, index) =>{
                return(
                    <div key={index}
                    className={`accordion ${toggleAccordion === index ? "active": ""}`}
                    onClick={() => handleAccordionActive(index)}>
                <button className="accordionBtn">
                    <span className={`accordionSpan ${toggleAccordion === index ? "active": ""}`}>{question.question}</span>
                    {/* <i className=" iconArrow fa-solid fa-chevron-down"></i> */}
                    <i className={`iconArrow fa-solid fa-chevron-down ${toggleAccordion === index ? "active": ""}`}></i>
                </button>
                <p className={`textAnswer ${toggleAccordion === index ? "active": ""}`}>{question.anwser}</p>
            </div>
                )
            })}

            <div className="FAQ-Footer">
                <h2 className="FAQ-MoreQuestion">Tem alguma dúvida ? Entre em contato direto pelo WhatsApp</h2>
            <button className="FAQ-Btn">
                <i className="iconMessage fa-solid fa-message"></i>
                <span className="FAQ-Span">WhatsApp</span>
                {/* <i className="iconWhatsAppFAQ fa-brands fa-whatsapp"></i> */}
            </button>
            </div>
        </section>
    )
}