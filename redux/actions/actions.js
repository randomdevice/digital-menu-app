import firebase from 'firebase'
import { USER_STATE_CHANGE, UPDATE_MENU } from '../constants/actionTypes'

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

// Finds items collection and dispatches item names.
function updateMenu() {
    return((dispatch) => {
        firebase.firestore()
            .collection("items")
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    let itemList = []
                    snapshot.forEach((doc) => {
                        itemList = [
                            ...itemList,
                            {
                              id: doc.id,
                              itemName: doc.data().itemName
                            }
                        ]
                    })

                    dispatch({type: UPDATE_MENU, items: itemList })
                } else {
                    console.log('no items are available.')
                }
            })
    })
}

export { fetchUser, updateMenu }