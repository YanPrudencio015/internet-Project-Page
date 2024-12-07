import React from "react";
import './clientinfosubpage.css'

// menu 
import { ClientPageMenu, ClientePageMenuMobile } from "../../sidebarComponent/ClientSideBar";


// array de elementos do input

const inputsArrayInfo = [
    {labelName: "Cod", inputType:"text", inputInfo:"1.3272"},
    {labelName: "Nome", inputType:"text", inputInfo:"(CORTESIA) MARCELO MARTINS DE OLIVEIRA"},
    {labelName: "CPF/CNPJ", inputType:"text", inputInfo:"155.911.347-26"},
    {labelName: "RG/I.E.", inputType:"text", inputInfo:"295906192"},
    {labelName: "Endereço", inputType:"text", inputInfo:"MANHUAÇU"},
    {labelName: "Logradouro", inputType:"text", inputInfo:"RUA"},
    {labelName: "Complemento", inputType:"text", inputInfo:"VIA 6, CS 9 1º ANDAR. PORTÃO DE MADEIRA"},
    {labelName: "Cidade", inputType:"text", inputInfo:"RIO DE JANEIRO"},
    {labelName: "Bairro", inputType:"text", inputInfo:"VARGEM GRANDE"},
    {labelName: "Cep", inputType:"text", inputInfo:"22785-600"},
    {labelName: "E-mail", inputType:"email", inputInfo:"alavalski2@gmail.com"},
    {labelName: "Telefone", inputType:"text", inputInfo:"(21)1111-1111"},
    {labelName: "Celular", inputType:"text", inputInfo:"(21)9969-18203"},
] 

function ClientInfoSubpage(props){
    return(
        <section className="clientInfoSubPage">
          <ClientPageMenu/>
          <ClientePageMenuMobile/>
            <div className="infoSquadSectionCP">
                <div className="infoSquadCP-Header">
                    <h1 className="infoSquadCP-HeaderTitle">Dados Cadastrais</h1>
                    <h4 className="infoSquadCP-HeaderSubTitle">Verifique ou atualize seus dados cadastrais abaixo</h4>
                </div>
                <form className="infoSquadForm">
                    {inputsArrayInfo.map((input,index) =>(
                    <button key={index} type="button" className="clientInputBtn-CP">
                        <span className="clientInputInfoSpan-CP">{input.labelName}</span>
                        <input className="clientInputInfo-CP" type={input.inputType} value={input.inputInfo}/>
                    </button>
                    ))}
                    <div className="infoSquadForm-controlers">
                        <button className="infoSquadFormBtn" type="button">cancelar</button>
                        <button className="infoSquadFormBtn" type="submit">Editar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default ClientInfoSubpage