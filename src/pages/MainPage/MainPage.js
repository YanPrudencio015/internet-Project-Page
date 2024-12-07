import React from "react";
import MainPage from '../../Viaband'
import Viability from "../Availabillity/AvailabilityPage";
import ClientPage from "../clientPage/clientPage";
import Login from '../loginPage/LoginPage'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import PlainPage from "../pricePage/PlainPage";



// Client SubPages

import ClientInfoSubpage from "../clientPage/subpages/clientinfosubpage/ClientInfoSubpage";
import PaymentSubpage from "../clientPage/subpages/paymentSubPage/PaymentSubpage";
import ContactSubPage from "../clientPage/subpages/contactSubpage/ContactSubPage"


// redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// reducer
import { menuMobileReducer } from "../../reducers/btnMenuReducer";
import { CepValue,CepObject } from "../../reducers/inputsReducer";
import { PlainDetailsReducer } from "../../reducers/plainReducer";
export default function Pages(props){

    const rounter = createBrowserRouter([{
        path:"/",
        element:<MainPage/>,

    },
    {
        path:"/consulta-viabilidade",
        element: <Viability/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:'/Escolher-Plano',
         element: <PlainPage/>
    },
    {
        path:'/Pagina-do-cliente',
        element: <ClientPage/>
    },
    {
        path: '/Informacoes-do-Cliente',
        element: <ClientInfoSubpage/>
    },
    {
        path: '/Informacoes-de-Pagamento',
        element: <PaymentSubpage/>
    },
    {
        path: '/Pagina-do-cliente-Contatos',
        element: <ContactSubPage/>
    },

])
// redux
const reducers = combineReducers({
    menuMobile:menuMobileReducer,
    CEPValueString:CepValue,
    CEPObjectInfo:CepObject,
    PlainDetails:PlainDetailsReducer,
})

const store = createStore(reducers)

    return(
        <Provider store={store}>
            <RouterProvider router={rounter}>
                <MainPage/>
                <Viability/>
                <Login/>
            </RouterProvider>
         </Provider>
    )
}
