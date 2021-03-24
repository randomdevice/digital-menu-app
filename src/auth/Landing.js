import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import firebase from 'firebase'

function guestSignIn() {
    firebase.auth().signInAnonymously()
    .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(`Signed in.. is anonymous? ${user.isAnonymous}`)
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