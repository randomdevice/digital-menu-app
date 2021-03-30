import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import firebase from 'firebase'

function guestSignIn() {
    firebase.auth().signInAnonymously()
    .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
            firebase.firestore().collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                    anonimity: user.isAnonymous,
                    user: firebase.auth().currentUser.uid
                })
        })
    })
    .catch((error) => {
        console.log(error)
    });
}

export default function Landing({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'bottom' }}>
            <Button
                title="Register"
                onPress={() => navigation.navigate("Register")} />
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}/>
            <Button
                title="Join in as Guest"
                onPress={() => guestSignIn()}/>
        </View>
    )
}