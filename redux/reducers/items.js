const initialState = {
    items: []
}

// Updates items in menu according to Firestore db
export const items = (state = initialState, action) => {
    return {
        ...state,
        items: action.items
    }
}