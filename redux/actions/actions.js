import firebase from 'firebase'
import { USER_STATE_CHANGE, UPDATE_MENU, USER_ORDERS_STATE_CHANGE } from '../constants/actionTypes'

// Gets current user from firebase then dispatches action (obj) containing user data in snapshot.
function fetchUser() {
    return((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
                } else {
                    console.log('user does not exist.')
                }
            })
    })
}

function fetchUserOrders() {
    return((dispatch) => {
        firebase.firestore()
            .collection("orders")
            .doc(firebase.auth().currentUser.uid)
            .collection("userOrders")
            .orderBy("creation", "asc")
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    let orders = snapshot.docs.map(doc => {
                        const data = doc.data()
                        const id = doc.id
                        return { id, data }
                    })
                    dispatch({type: USER_ORDERS_STATE_CHANGE, orders })
                } else {
                    console.log('user does not exist.')
                }
            })
    })
}

// Finds items collection and dispatches item names.
function updateMenu() {
    return((dispatch) => {
        firebase.firestore()
            .collection("items")
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    let items = snapshot.map(doc => {
                        const data = doc.data()
                        const id = doc.id
                        return { id, data }
                    })
                    dispatch({type: UPDATE_MENU, items })
                } else {
                    console.log('no items are available.')
                }
            })
    })
}

export { fetchUser, fetchUserOrders , updateMenu }