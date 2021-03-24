const initialState = {
    currentUser: null
}

// Changes current user to the one logged in
export const user = (state = initialState, action) => {
    return {
        ...state,
        currentUser: action.currentUser
    }
}