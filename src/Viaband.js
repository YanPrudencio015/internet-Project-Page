import React, { useContext } from "react";
import './viaband.css';


// components
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import FooterWebsite from './components/footer/FooterWebsite'




// Context API
import { DarkModeToggleProvider, darkModeContext } from './APIContext/BtnsContext';


// reducers



function Viaband(props) {
    return (
        <DarkModeToggleProvider>
            <DarkModeWrapper />
        </DarkModeToggleProvider>
    );
}

function DarkModeWrapper() {
    const [darkMode, setDarkMode] = useContext(darkModeContext);



    return (
            <section className={darkMode === false ? "viabandSite light" : "viabandSite dark"}>
                <Navbar />
                <Main />
                <FooterWebsite />
            </section>
    );
}

export default Viaband;












// alternativa certa


// import React, { useContext } from "react";
// import './viaband.css';
// import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";

// // components
// import Navbar from './components/header/Navbar';
// import Main from './components/main/Main';
// import FooterWebsite from './components/footer/FooterWebsite'

// // Context API
// import { DarkModeToggleProvider, darkModeContext } from './APIContext/BtnsContext';

// // reducers
// import { CepValue } from './reducers/inputsRedux/reducer/inputsReducer';

// // Renomeie a constante para evitar conflitos
// const rootReducer = combineReducers({
//     CEP: CepValue
// });

// const store = createStore(rootReducer);

// function Viaband(props) {
//     return (
//         <DarkModeToggleProvider>
//             <DarkModeWrapper />
//         </DarkModeToggleProvider>
//     );
// }

// function DarkModeWrapper() {
//     const [darkMode, setDarkMode] = useContext(darkModeContext);

//     return (
//         <Provider store={store}>
//             <section className={darkMode === false ? "viabandSite light" : "viabandSite dark"}>
//                 <Navbar />
//                 <Main />
//                 <FooterWebsite />
//             </section>
//         </Provider>
//     );
// }

// export default Viaband;
