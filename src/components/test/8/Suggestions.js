import * as React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import Constants from 'expo-constants';

// TODO convert hardcoded to DB connection
var itemDescriptionText = 'Hamburgers\nPizza \nIce Cream';

var itemTypeText = ''
var itemContainsText = ''

function Suggestions() {
  return (
    <View style = {styles.container}>
            <Text style = {styles.heading}>Suggestions:</Text>
      <Text style = {styles.descriptionText}>{itemDescriptionText}</Text>
      <Text style = {styles.typeText}>{itemTypeText}</Text>
      <Text style = {styles.containsText}>{itemContainsText}</Text>
    </View>
  );
}

export default Suggestions;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight+4,
    padding: 8,
        fontFamily: 'arial',
        color: '#000000',
    backgroundColor: '#FFFFFF',
    fontSize: 8
  },
  heading: {
    textAlign: 'left',
        color: '#000000',
        fontFamily: 'arial',
        display: 'flex',
    fontSize: 24
  },
    descriptionText: {
    textAlign: 'left',
        color: '#000000',
        fontFamily: 'arial',
        display: 'flex',
    fontSize: 14,
    paddingLeft: 10
  },
    typeText: {
    textAlign: 'left',
        color: '#BFDFDF',
        fontFamily: 'arial',
        display: 'flex',
    fontSize: 8
  },
    containsText: {
    textAlign: 'left',
        color: '#BFDFDF',
        fontFamily: 'arial',
        display: 'flex',
    fontSize: 8
  }
});