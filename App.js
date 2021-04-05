// Firebase
import * as firebase from 'firebase';

// Components
import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

// Redux imports
import { Provider } from 'react-redux'
import store from '@redux/store/store'

// View/Navigation imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from '@auth/Landing'
import Login from '@auth/Login'
import Register from '@auth/Register'
import RoboRamsay from '@src/RoboRamsay'
import Settings from '@src/test/Settings'
import MenuScreen from '@screens/other/MenuScreen' 
import ItemScreen from '@screens/other/ItemScreen' 
import OrderViewer from '@screens/other/OrderViewer'


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

const Stack = createStackNavigator();

export default function App() {
  const [ state, setState ] = useState({ loaded: false, loggedIn: false });

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          setState({
            loggedIn: false,
            loaded: true
          })
        } else {
          setState({
            loggedIn: true,
            loaded: true
          })
        }
      })
    }, []
  )
    
  if(!state.loaded) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Loading... </Text>
      </View>
    )
  }

  if(!state.loggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return(
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="RoboRamsay">
              <Stack.Screen name="RoboRamsay" component={RoboRamsay} options={{ headerShown: false }}/>
              <Stack.Screen name="Settings" component={Settings}/>
              <Stack.Screen name='Order Viewer' component={OrderViewer}/>
              <Stack.Screen name="Menu Screen" component={MenuScreen}/>
              <Stack.Screen name="Sample Item Screen" component={ItemScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}