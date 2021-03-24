import firebase from 'firebase'
import { USER_STATE_CHANGE } from '../constants/actionTypes'

// Gets current user from firebase then dispatches action (obj) containing user data in snapshot
export function fetchUser() {
    return((dispatch) => {
        firebase.firestore()
            .collection("user")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if(snapshot.exists) {
                    dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
                } else {
                    console.log('does not exist')
                }
            })
    })
}