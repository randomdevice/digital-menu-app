// written by: Parth Vora, Akira Brown
// tested by: Parth Vora, Akira Brown
// debugged by: Alan Chacko, Esteban Salazar

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'
import Constants from 'expo-constants';
import firebase from 'firebase';

const logOut = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      firebase.auth().signOut().then(() => {
        console.log(user.displayName)
      }).catch((error) => {
        console.log(error)
      })
    } else {
      console.log("No users signed in")
    }
  })
}

// Container
const SettingsContainer = () => {
  return (
    <Settings/>
  )
}

// Presentation
const Settings = () => {

  /*
    <ListItem key={1} bottomDivider>
      <ListItem.Content>
        <ListItem.Title>Setting 1</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron/>
    </ListItem>
    <ListItem key={2} bottomDivider>
      <ListItem.Content>
        <ListItem.Title>Setting 1</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron/>
    </ListItem>
  */

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      </View>
      <View style={styles.bottomView}>
        <Button onPress={() => logOut()} color="red" title={'Logout'}/>
      </View>
    </View>
  )
}

export default SettingsContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white'
  },
  bottomView: {
    flex: 1,
    width: '100%',
    justifyContent: "space-evenly",
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    padding: 10
  },
  topView: {
    flex: 9,
    width: '100%',
    justifyContent: "space-evenly",
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    marginTop: Constants.statusBarHeight,
  }
});
