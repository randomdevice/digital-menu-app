import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import firebase from 'firebase'

const onSignIn = (state) => {
    const { email, password } = state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        });
}

// Container
export default function LoginContainer() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const state = {
        email,
        password,
        setEmail,
        setPassword,
    }

    return(
        <Login state={state} />
    )
}

// Presentation
const Login = ({ state }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TextInput
            style={styles.inputFields}
            onChangeText={(text) => state.setEmail(text)}
            placeholder={"email"}/>
        <TextInput
            style={styles.inputFields}
            onChangeText={(text) => state.setPassword(text)}
            placeholder={"password"}
            secureTextEntry={true}/>
        <Button
          title={"Sign Up"}
          onPress={() => onSignIn(state)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white'
  },
  inputFields: {
    padding:2,
    margin: 2
  },
  topView: {
    width: '100%',
    justifyContent: "space-evenly",
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    paddingTop: Constants.statusBarHeight,
    padding: 10
  },
});