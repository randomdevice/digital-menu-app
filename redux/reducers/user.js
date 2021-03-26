import { USER_STATE_CHANGE, USER_ORDERS_STATE_CHANGE } from "../constants/actionTypes"

const initialState = {
    currentUser: null,
    orders: []
}

// Changes current user to the one logged in or fetches a users orders.
export const user = (state = initialState, action) => {
    switch(action.type) {
        case USER_STATE_CHANGE:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case USER_ORDERS_STATE_CHANGE:
            return {
                ...state,
                orders: action.orders
            }
        default:
            return state
    }
}