// reducer to send input values 



// action 
const SET_STRING = "SET_STRING";


export const setString = (sttr =>({
    type:SET_STRING,
    payload: sttr,
}))


const InitialState ={
    myString: ""
}


export function CepValue(state= InitialState, action){
    
    switch (action.type) {
        case SET_STRING:
            return {
                    ...state,
                    myString: action.payload,
                };
                default:
                    return state;
                }
            }






// reducer to send input values 



// action 
const SET_CEPOBJECT = "SET_CEPOBJECT";


export const setCepObject = ((logradouro,bairro,estado,uf,cep) =>({
    type:SET_CEPOBJECT,
    payload: {logradouro,bairro,estado,uf,cep},
}))


const initialState = {
    myObject: {
        logradouro: "",
        bairro: "",
        estado: "",
        uf: "",
        cep: ""
    }
};

export function CepObject(state = initialState, action) {
    switch (action.type) {
        case SET_CEPOBJECT:
            return {
                ...state,
                myObject: {
                    logradouro: action.payload.logradouro,
                    bairro: action.payload.bairro,
                    estado: action.payload.estado,
                    uf: action.payload.uf,
                    cep: action.payload.cep,
                }
            };
        default:
            return state;
    }
}
