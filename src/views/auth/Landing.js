import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import Logo from '@images/snack-logo.png'
import firebase from 'firebase';

function guestSignIn() {
  firebase.auth().signInAnonymously()
  .then(() => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
              role: 'guest'
          })
    })
  })
  .catch((error) => {
    console.log(error)
  });
}

// Container
export default function LandingContainer({ navigation }) {


  return (
    <Landing navigation={navigation}/>
  );
}

// Presentation
const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image style={{width: 150, height: 150}} source={Logo}/>
        <Text style={styles.title}>Robo Ramsay</Text>
      </View>
      <View style={styles.bottomView}>
        <Button 
          title={"Login"}
          onPress={() => navigation.navigate("Login")}/>
        <Button 
          title={"Register"}
          onPress={() => navigation.navigate("Register")}/>
        <Button 
          title={"Guest Login"}
          onPress={() => guestSignIn()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  title: {
    margin:10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bottomView: {
    height: '25%',
    width: '100%',
    padding: 10,
    justifyContent: 'space-evenly',
    alignSelf:'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  topView: {
    height: '75%',
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    top: Constants.statusBarHeight
  }
});