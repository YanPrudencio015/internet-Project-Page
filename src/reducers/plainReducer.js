

const SET_PLAININFO = "SET_PLAININFO";

export const setplainInfo = ((name,mega,cdn,down,up,price)=>({
    type: SET_PLAININFO,
    payload:{name,mega,cdn,down,up,price}
}))



const initialState ={
    plainObject:{
        name:"",
        mega:"",
        cdn:"",
        down:"",
        up:"",
        price:"",
    }
}


export function PlainDetailsReducer(state = initialState, action){

    switch (action.type) {
        case SET_PLAININFO:
            return{
                ...state,
                plainObject: {
                    name:action.payload.name,
                    mega:action.payload.mega,
                    cdn:action.payload.cdn,
                    down:action.payload.down,
                    up:action.payload.up,
                    price:action.payload.price,
                }
            };    
        default:
            return state ;
    }
}
