import React, { useEffect, useState } from "react";
import './ClientSideBar.css'
import { Link, useNavigate } from "react-router-dom";
import { Route } from "react-router";





export function ClientPageMenu(props){
    
    const cssClasses = [
        { close:'ClientPageMenu', open:'ClientPageMenu open'},
        {close: 'clientTitle close', open:'clientTitle'},
        {close: 'sidebarNavMenuClientPage.', open:'sidebarNavMenuClientPage open'}
    ]
    
    
    // to change menu aparence
    const [menutoggle, setMenutoggle] = useState(false)
    
    // button Active
    const [activeButton, setActiveButton] = useState(0);


    const handleButtonClick = (index) => {
        document.documentElement.style.setProperty('--active-index', index);
        setActiveButton(index);

    };




    const menuItems = [
        { title: "Menu", icon: "fa-house" },
        { title: "Dados Cadastrais", icon: "fa-circle-user" },
        { title: "Contas", icon: "fa-file-invoice-dollar" },
        { title: "Entrar em contato", icon: "fa-comments" },
        { title: "Sair", icon: "fa-arrow-right-from-bracket" }
    ];


    // to check the subpage chosed 

    const navigation = useNavigate()
    function adressChosed(index){
        let route =''
        switch (index) {
            case 0:
                route= "/Pagina-do-cliente"
                break;
            case 1:
                route = '/Informacoes-do-Cliente'
                break;
            case 2:
                route = '/Informacoes-de-Pagamento'
                break;
            case 3:
                route = '/Pagina-do-cliente-Contatos'
                break;
            case 4:
                route = '/Pagina-do-cliente'
                break;
            default:
                route = '/Pagina-do-cliente'
                break;
        }
        navigation(route)
    }

    return(
        <section 
                className={menutoggle === false ? cssClasses[0].close:cssClasses[0].open}
            >
                    <button className={menutoggle === true? "menuToggleBtn open":"menuToggleBtn"}>
                    <i onClick={()=> setMenutoggle(prev => !prev)} class={menutoggle === true ? "arrowIconMenu active fa-solid fa-angle-right": 'arrowIconMenu fa-solid fa-angle-right'}></i>
                    </button>
           <div className="ClientPageMenuHeader">
                    <h3 className={menutoggle === true? cssClasses[1].open: cssClasses[1].close}>
                        {menutoggle === true? "Área do Cliente": ""}
                    </h3>
           </div>

           <nav className={menutoggle === true ? "sidebarNavMenuClientPage open": "sidebarNavMenuClientPage"}>
           <div 
                    className={menutoggle === true ? "navbarsBntBackground active": 'navbarsBntBackground'}
                    style={{
                        top: `${activeButton * 10}vh`,
                        opacity: menutoggle ? 1 : 0
                    }}
                />

                {menuItems.map((item, index) => (

                    // <Link to={pageChosed} onClick={()=>adressChosed(index)}>
                        <button 
                            key={index}
                            className={`navbarBtns ${activeButton === index && menutoggle === false ? 'active' : ''}`}
                            onClick={() => {handleButtonClick(index); adressChosed(index)}}
                            >
                            <label className="bavbarsBntTitle">
                                {menutoggle ? item.title : ""}
                            </label>
                            <i className={`IconBtnsClientPage fa-solid ${item.icon}`}></i>
                        </button>
                    //  </Link>
                ))}
           </nav>
        </section>
    )
}
    

export function ClientePageMenuMobile(props){

    const menuIconsMobile = [
        {icon:"fa-solid fa-house", button: "clientPage-MenuMobile-Btn"},
        {icon:"fa-solid fa-user", button: "clientPage-MenuMobile-Btn"},
        {icon:"fa-solid fa-file-invoice-dollar", button: "clientPage-MenuMobile-Btn"},
        {icon:"fa-solid fa-comment", button: "clientPage-MenuMobile-Btn"},
        {icon:"fa-solid fa-right-from-bracket", button: "clientPage-MenuMobile-Btn"},
    ]

    const [buttonIndex, setButtonIndex] = useState(0);
    const [iconChoosed, setIconChoosed] = useState("fa-solid fa-house");
    function handleButtonClicked(button){
        setButtonIndex(button)
        setIconChoosed(menuIconsMobile[button].icon)
    }

    const navigation = useNavigate()
    function adressChosed(index){
        let route =''
        switch (index) {
            case 0:
                route= "/Pagina-do-cliente"
                break;
            case 1:
                route = '/Informacoes-do-Cliente'
                break;
            case 2:
                route = '/Informacoes-de-Pagamento'
                break;
            case 3:
                route = '/Pagina-do-cliente-Contatos'
                break;
            case 4:
                route = '/Pagina-do-cliente'
                break;
            default:
                route = '/Pagina-do-cliente'
                break;
        }
        navigation(route)
    }

    function OutfromClientpage(index){
        // if(index == 4 ){
        // }
        // console.log("cliquei para sair")
        console.log(index)
    }

    return(
        <section className="ClientePageMenuMobile">
            {menuIconsMobile.map((item,index)=>(
            <button key={index} 
                className={ index === buttonIndex ?item.button + " active" : item.button} 
                onClick={()=>{handleButtonClicked(index);adressChosed(index); OutfromClientpage(index)}}>
                <i className={ iconChoosed === item.icon ? 
                            `clientPage-MenuMobile-icon active ${item.icon}`:
                            ` clientPage-MenuMobile-icon ${item.icon}`}>
                </i>
            </button>
            ))}

        </section>
    )
}

