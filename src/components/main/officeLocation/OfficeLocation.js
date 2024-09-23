import React from "react";

import "./office.css"




export default function OfficeLocation(props){
    return(
        <section className="officeLocation" id="location">
            <div className="titleHeadLocation">
                <h1 className="tittleLocation">Onde nós Estamos</h1>
                <p className="textLocation">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                </p>
            </div>
            <div className="OfficeLocationBtnSection">
                <button className="OfficeLocationBtn">
                    <span className="spanOfficeLocation">Clique e saiba como chegar</span>
                </button>
            </div>

            <div className="locationOfficeFooter">
                <div className="locationInfosFooter">
                    <div className="titlesOfficeFooters">
                        <h2 className="LocationInfosTitle">Endereço</h2>
                        <i class="fa-solid fa-location-pin"></i>
                    </div>
                    <p className="locationInfoFooterP">
                        Estr. dos Bandeirantes, 24401 - ROOM 205 
                        - Vargem Grande, Rio de Janeiro - 
                        RJ, 22785-091
                    </p>
                </div>
                <div className="locationInfosFooter" id="contact">
                    <div className="titlesOfficeFooters">
                        <h2 className="LocationInfosTitle">Informações de contatos</h2>
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <ul className="LocationInfoList">
                        <li className="LocationInfoListItem">
                            nome:
                            <span className="LocationInfoListSpan">979978119</span>
                        </li>
                        <li className="LocationInfoListItem">
                            nome:
                            <span className="LocationInfoListSpan">08005913041</span>
                        </li>
                        <li className="LocationInfoListItem">
                            nome:
                            <span className="LocationInfoListSpan">30054109</span>
                        </li>
                    </ul>
                </div>
                <div className="locationInfosFooter">
                    <div className="titlesOfficeFooters">
                        <h2 className="LocationInfosTitle">Horário de atendimento</h2>
                        <i class="fa-solid fa-clock"></i>
                    </div>
                    <ul className="LocationInfoList">
                        <li className="LocationInfoListItem">
                            Segunda-Sexta
                            <span className="LocationInfoListSpanTime">08:00H - 16:00H</span>
                        </li>
                        <li className="LocationInfoListItem">
                            Sábado-Domingo
                            <span className="LocationInfoListSpanTime">10:00H - 15:00H</span>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </section>
    )
}