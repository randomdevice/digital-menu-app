import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// TODO convert hardcoded to DB connection
var itemDescriptionText = 'Hamburgers\n Pizza \n Ice Cream';

var itemTypeText = ''
var itemContainsText = ''

export default function ItemViewerDescriptionComponent() {
  return (
    <View style = {styles.container}>
            <Text style = {styles.heading}>Suggestions:</Text>
      <Text style = {styles.descriptionText}>{itemDescriptionText}</Text>
      <Text style = {styles.typeText}>{itemTypeText}</Text>
      <Text style = {styles.containsText}>{itemContainsText}</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight+4,
    padding: 8,
        fontFamily: 'arial',
        color: '#FFFFFF',
    backgroundColor: '#000000',
    fontSize: 8
  },
  heading: {
    textAlign: 'left',
        color: '#FFFFFF',
        fontFamily: 'arial',
        display: 'flex',
    fontSize: 24
  },
    descriptionText: {
    textAlign: 'left',
        color: '#FFFFFF',
        fontFamily: 'arial',
        display: 'flex',
    fontSize: 14
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