// Define action types

// Reducer function

/*reducer to open and close menu mobile*/ 
export function MenuMobileToggle(state = false, action) {
    switch (action.type) {
        case "OPEN":
            return state = true;
        case "CLOSE":
            return state = false;
        default:
            return state;

    }
}




