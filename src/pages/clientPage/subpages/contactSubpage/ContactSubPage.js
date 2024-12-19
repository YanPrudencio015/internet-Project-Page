import React, { useEffect, useState } from "react";

import './contactsubpage.css'
import { ClientPageMenu, ClientePageMenuMobile } from "../../sidebarComponent/ClientSideBar";
function ContactSubPage(props){


    // client generic information
    const [formData, setFormData] = useState({
        nome: "(CORTESIA) MARCELO MARTINS DE OLIVEIRA",
        email: "alavalski2@gmail.com",
        telefone: "",
        setor:"",
        assunto:"",
        mensagem:"",
    })

    //  to create the inputs elements  *create a logic to receive only numbers in the third item
    const FormDataInputText =[
        {labelName: "Nome", value: formData.nome, typeOfInputs:"text"},
        {labelName: "Email", value: formData.email, typeOfInputs:"email"},
        {labelName: "Telefone", value: formData.telefone, typeOfInputs:"text"},
    ]

    // first list of client's options 
    const FormDataDrowDownOne = [
        {
            labelName: "Setor", 
            options:[
                {optionName:"selecione", },
                {optionName:"administração", },
                {optionName:"cobrança", },
                {optionName:"Financeiro", },
                {optionName:"Ouvidoria", },
                {optionName:"Recepção", },
                {optionName:"Supervisão", },
                {optionName:"suporte", },
                {optionName:"Técnico",},
                {optionName:"vendas", },
                
            ] 
        }
        ]
        // second list of client's options 
        
    const FormDataDrowDownTwo=[
                 [{item1:"selecione"}],
                [
                    {item:"selecione"},
                    {item:"contrato"},
                    {item:"informação"}, 
                    {item:"nota Fiscal"}, 
                    {item:"permuta"}, 
                    {item:"ponto elétrico"},
                    {item:"reclamação"},
                
                ],

                [
                    {item:"selecione"},
                    {item:"renegociação/acordo"},
                ],
                 [  
                    {item:"selecione"},
                    {item:"2º via Boleto"},
                    {item:"bloqueio"},
                    {item:"Desbloqueio"},
                    {item:"informação"},
                    {item:"Informar Pagamento"},
                    {item:"mudança de vencimento"},
                    {item:"mudança de endereço de cobrança"},
                    {item:"pagamento"},
                    {item:"semibloqueio"}, 
                    {item:"solicitação de desconto"},
                
                ],
                
             [      {item:"selecione"},
                    {item:"atendimento"},
                    {item:"reclamação"},]
                ,
                [
                    {item:"selecione"},
                    {item:"2º via boleto"},
                    {item:"atendimento"}, 
                    {item:"cancelamento"},
                    {item:"mudança de titularidade"},
                    {item:"reclamação"},
                    {item:"suspensão"}]
                ,
                [
                    {item:"selecione"}
                ]
                ,
                [
                    {item:"selecione"},
                    {item:"cabo desconectado"},
                    {item:"informação"}, 
                    {item:"informação: Login/senha"},
                    {item:"intermitência"},
                    {item:"lentidão"},
                    {item:"problema no email"},
                    {item:"configuração PPPOE"},
                    {item:"reparo na rede"},
                    {item:"sem conexão"},
                    {item:"sem internet"},
                    {item:"troca de equipamento"},
                    {item:"troca Login"},
                    {item:"troca mec"},
                    {item: "troca senha"}
                ],

                
                 [  {item1:"selecione"},
                    {item:"atendimento"}, 
                    {item:"reconfiguração/ troca de conector"},
                    {item:"retirada de material"}
                ],
                [ 
                    {item:"selecione"},
                    {item:"extensão de cabo"},
                    {item:"informação sobre planos ou instalação"},
                    {item:"mudança de endereço"},
                    {item:"mudança de plano"},
                    {item:"pedido de instalação"},
                    {item:"pedido de viabilidade"},
                    {item:"ponto adicional"},
                    {item:"reativação"}
                ]
    ]



   /*
    Logic to get the number of client's option 
    chosed and after to take it to choose which
    list of itens from the second List and 
    finally show it.
   */   

    // use State to get currencly Lit of item 
    const [currentList, setCurrentList] = useState(0)

    function itemChosed(number){
        if(number === 0){
            setOpendropTwo(false)
        }
        setCurrentList(number);
        setOpendropOne(false);
        setOpendropTwo(true);
    }
    
    function secondItemchosed(){
        setOpendropTwo(false);
    }

    /*
        Logic to check which dropdown will be opened.
        If there is an dropdown open already, that logic will
        close the other dropdown to open the chosed
    */ 

    // to verific the both drodown's button.
    const [OpendropOne, setOpendropOne] = useState(false)
    const [OpendropTwo, setOpendropTwo] = useState(false)


    // function to close one if there was other opened

    function dropdownToggle(index){
        if(index === 0){
           if(OpendropOne === false && OpendropTwo === true){
                setOpendropTwo(false)
           } 
           setOpendropOne(prev => !prev)
        }
        
        if(index === 1){
            if(OpendropOne === true && OpendropTwo === false){
                setOpendropOne(false)
            }          
            setOpendropTwo(prev => !prev)
    }}


        // logic to change the text from dropdown Itens

        const[firstDrop, setFirstDrop] = useState("Selecione");
        const[secondDrop, setSecondDrop] = useState("Selecione")



    return(
        <section className="contactSubPage">
            {/* these are Client page menus */}
            <ClientPageMenu/>
            <ClientePageMenuMobile/>

            <div className="contactSP-Section">
                <h3 className="contactSP-Section-Header">solicitar atendimento</h3>
                <form className="contactSP-Section-Form">
                {/* map used on FormDataInputText to create the iputs  */}
                    {FormDataInputText.map(input =>(
                        <label className="contactSP-Form-Label">
                            {input.labelName}
                            <input className="contactSP-Form-Input"
                                type={input.typeOfInputs} value={input.value}
                                onChange={(e)=> setFormData(e.target.value)}>
                            </input>  
                        </label> 
                    ))}

                    {/* Dropdown */}

                <label className={OpendropOne === !false ? "dropdownSection active": " dropdownSection"}>
                    <div className="dropdownHeader" onClick={()=> dropdownToggle(0)}>
                        <h1 className="dropdownHeaderTitle">Setor</h1>
                        <div className="dropdownHeaderDrop">
                            <p className="dropdownHeaderOptionItem">{firstDrop}</p>
                            <i className={
                                OpendropOne === !false ? 
                                "dropdownIcon active fa-solid fa-angle-down":
                                "dropdownIcon fa-solid fa-angle-down"
                            }></i>
                        </div>
                    </div>
                    <div className={OpendropOne === !false ?"dropdownList active":"dropdownList"}>
                            {FormDataDrowDownOne[0].options.map((item, i)=>(
                            <p key={i} className="dropdownListItem"
                            onClick={()=>{itemChosed(i);setFirstDrop(item.optionName)}}>
                                {item.optionName}
                            </p> 
                            ))}
                    </div>
                </label>

                {/* second dropdown */}
                <label className={OpendropTwo === !false ? 
                    "dropdownSection active": " dropdownSection"}>
                    <div className="dropdownHeader" onClick={()=> dropdownToggle(1)}>
                        <h1 className="dropdownHeaderTitle">Assunto</h1>
                        <div className="dropdownHeaderDrop">
                            <p className="dropdownHeaderOptionItem">{secondDrop}</p>
                            <i className={
                                OpendropTwo === !false ? 
                                "dropdownIcon active fa-solid fa-angle-down":
                                "dropdownIcon fa-solid fa-angle-down"
                            }></i>
                        </div>
                    </div>
                    <div className={OpendropTwo === !false ?"dropdownList active":"dropdownList"}>
                            {FormDataDrowDownTwo[currentList] .map((item, i)=>(
                            <p key={i} 
                            className="dropdownListItem"
                            onClick={()=>{setSecondDrop(item.item); secondItemchosed()}}
                            >{item.item}</p> 
                            ))}
                    </div>
                </label>




                   <label className="contactSP-Form-Label-TextArea">
                            <textarea 
                                className="contactSP-Form-Textarea"
                                placeholder="descreva sua situação aqui"
                                rows={2}
                                cols={100}
                            >
                        </textarea>
                    </label> 

                    <button className="contactSP-Form-Btn">Enviar</button>
                </form>
            </div>
        </section>
    )
}


export default ContactSubPage