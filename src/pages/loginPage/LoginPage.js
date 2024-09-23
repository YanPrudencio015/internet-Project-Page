import React, { useState } from "react";
// import '../../ViabandSite.css'
import './loginpage.css'
import { Link } from "react-router-dom";

const genericText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standardk`;


const List = [
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
    {icon: <i className="iconLoginInfo fa-regular fa-circle-check"></i>,
    textInfo: "Resolver Problemas"
    },
];



export default function Login(props){


    const [documentInput, setDocumentInput] = useState("")




    const handleDocument = (event) =>{
        const value = event.target.value.replace(/\D/g, ''); // Remove não dígitos
        let documentFormeted = '';


        if(value.length <= 11){
            if (value.length > 0) {
                documentFormeted = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
              }
              if (value.length > 3) {
                documentFormeted = documentFormeted.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o segundo ponto
              }
              if (value.length > 6) {
                documentFormeted = documentFormeted.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // Adiciona o traço
              }
        } else{
            if (value.length > 0) {
                documentFormeted = value.replace(/(\d{2})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
              }
              if (value.length > 2) {
                documentFormeted = documentFormeted.replace(/(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o segundo ponto
              }
              if (value.length > 5) {
                documentFormeted = documentFormeted.replace(/(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4'); // Adiciona a barra
              }
              if (value.length > 8) {
                documentFormeted = documentFormeted.replace(/(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'); // Adiciona o traço
              }
        }
    


        setDocumentInput(documentFormeted)
    }


    return(
        <section className="loginPage">
          <div className="titleSectionLoginPage">
            <h1 className="titleLoginPage">Viaband</h1>
            <p className="subTitleLoginPage">Área do Cliente</p>
          </div>
          <div className="clientInputContainer">
          <i className="iconProfileLoginPage fa-solid fa-user"></i>
            <p className="LoginTextTitle">{genericText}</p>
            <div className="divTextInput" tabIndex={0}>
              <input className="textInputLogin" type="text"  placeholder="Digite seu CPF ou CNPJ" value={documentInput} onChange={handleDocument}></input>
            </div>
            <button className="loginBtn" type="submit">
                <p className="loginBtntext">Entrar na conta</p>
            </button>
          </div>
          <div className="infoContainer">
                <h1 className="infoTitleLoginPage"> Encontre as principais soluções: </h1>
                
                <ul className="infoLoginList">
                    {List.map((item, index)=>{
                        return <li className="infoLoginItem" key={index}>{item.icon}{item.textInfo}</li>
                    })}
                </ul>
          </div>
          <Link to="/">
          <div className="buttonCloseLoginPage">
            <p className="closeTextLoginPage">Voltar</p>
          </div>
          </Link>
        </section>
    )
}



/*


eu tenho um input que recebe números e queria que esse conjunto de numeros ficassem
 em formato de CPF ou CNPJ como eu faço isso com javaScript ? 



como funciona o "lembrar de mim" feito em sites ? 
usa o back end ?

*/