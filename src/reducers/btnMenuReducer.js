// Define action types

// Reducer function

/*reducer to open and close menu mobile*/ 

const OPEN_MENU = "OPEN_MENU";
const CLOSE_MENU = "CLOSE_MENU";

export const REDUCERopenMenu = () => ({
    type: OPEN_MENU
});

export const REDUCERcloseMenu = () => ({
    type: CLOSE_MENU
});

 const initialState = {
    isMenuOpen: false
};

export function menuMobileReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MENU:
            return { ...state, isMenuOpen: true };
        case CLOSE_MENU:
            return { ...state, isMenuOpen: false };
        default:
            return state;
    }
}



