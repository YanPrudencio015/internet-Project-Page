import React from "react";
import MainPage from '../../Viaband'
import Viability from "../Availabillity/AvailabilityPage";
import ClientPage from "../clientPage/clientPage";
import Login from '../loginPage/LoginPage'
import { createBrowserRouter, Route, Link,RouterProvider } from "react-router-dom";


export default function Pages(props){

    const rounter = createBrowserRouter([{
        path:"/",
        element:<MainPage/>,

    },
    {
        path:"consulta-viabilidade",
        element: <Viability/>
    },
    {
        path:"login",
        element: <Login/>
    }

])

    return(
        <RouterProvider router={rounter}>
            <MainPage/>
        </RouterProvider>
    )
}

