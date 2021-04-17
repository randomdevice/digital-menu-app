import React, { useState } from 'react';
import { TextInput, Text , View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import firebase from 'firebase'

const onSignIn = (state) => {
    const { email, password, setError, setEmessage } = state;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((e) => {
            switch (e.code) {
              case "auth/invalid-email":
                setEmessage('Invalid format for email address.')
                break;
              case "auth/user-not-found":
                setEmessage('User not found.')
                break;
              case "auth/wrong-password":
                setEmessage('Incorrect password.')
                break;
              default:
                setEmessage('Incorrect username or password.')
                break;
            }
            setError(1)
        });
}

// Container
export default function LoginContainer() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(0);
    const [ emessage, setEmessage ] = useState('');

    const state = {
        email,
        password,
        error,
        emessage,
        setError,
        setEmessage,
        setEmail,
        setPassword,
    }

    return(
        <Login state={state} />
    )
}

// Presentation
const Login = ({ state }) => {

    let errorComponent = <Text></Text>
    if(state.error) {
      errorComponent = <Text>{state.emessage}</Text>
    }

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
          {errorComponent}
          <Button
            title={"Log In"}
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