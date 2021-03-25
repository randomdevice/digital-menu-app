// Component imports
import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from 'firebase'

// Redux imports
import { Provider } from 'react-redux'
import store from './redux/store/store'

// View/Navigation imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from './src/auth/Landing'
import RegisterScreen from './src/auth/Register'
import LoginScreen from './src/auth/Login'
import RoboRamsay from './src/RoboRamsay'
import Settings from './src/screens/test/Settings'

// configures and links firebase to app
const firebaseConfig = {
  apiKey: "AIzaSyBtqt8P4N1FoA6h_esTIE0yMlH36mzziAE",
  authDomain: "robo-ramsay.firebaseapp.com",
  projectId: "robo-ramsay",
  storageBucket: "robo-ramsay.appspot.com",
  messagingSenderId: "10917927337",
  appId: "1:10917927337:web:21011e48b660dce3dc0cb8",
  measurementId: "G-8ZDM888KSB"
}

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

// generate stack for page storage
const Stack = createStackNavigator()

export class App extends Component {
  constructor(props) {
    super(props)
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
          loggedIn: true,
          loaded: true
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state

    // Page loaded when app is loading
    if (!loaded) {
      return(
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text> Loading </Text>
        </View>
      )
    }

    // Shows pages for Landing, Registering, and Logging in when a user is not logged in.
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    // return app stored in RoboRamsay
    return(
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="RoboRamsay">
                <Stack.Screen name="RoboRamsay" component={RoboRamsay} options={{ headerShown: false }}/>
                <Stack.Screen name="Settings" component={Settings}/>
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
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
})
