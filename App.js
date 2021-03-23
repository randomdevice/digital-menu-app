import 'dotenv/config';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import * as firebase from 'firebase';
import 'react-native-gesture-handler';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env["API_KEY"],
  authDomain: "robo-ramsay.firebaseapp.com",
  projectId: "robo-ramsay",
  storageBucket: "robo-ramsay.appspot.com",
  messagingSenderId: "10917927337",
  appId: "1:10917927337:web:21011e48b660dce3dc0cb8",
  measurementId: "G-8ZDM888KSB"
};

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

const Stack = createStackNavigator();

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state
    if (!loaded) {
      return(
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text> Loading </Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>User is logged in</Text>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
