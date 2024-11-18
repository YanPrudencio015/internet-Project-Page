import React from "react";
import MainPage from '../../Viaband'
import Viability from "../Availabillity/AvailabilityPage";
import ClientPage from "../clientPage/clientPage";
import Login from '../loginPage/LoginPage'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import PlainPage from "../pricePage/PlainPage";
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
    }

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
