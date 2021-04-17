//A whole bunch of imports because this is painful
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// TODO convert hardcoded to DB connection
var itemDescriptionText = 'A waffle is a cooked food made from a batter that consists of flour, water, baking powder, oil, and eggs. It has a gridlike appearance because it is cooked in between two hot metal plates in an electric kitchen appliance called a waffle iron. Waffles are cooked until they become golden-brown in color, with a crispy outer texture and a soft interior. Waffles are served as a breakfast or as a dessert, and they are usually served with sweet sauces or toppings.\n';
	var itemMetaData = {
		type: ["Vegan", "Halal"],
		contains: ["Peanuts"]
	};


var itemTypeText = ''
var itemContainsText = ''

if ((itemMetaData.type) && (itemMetaData.type.length > 0)){
	// If there is any data about the type
	itemTypeText += "This item is "
	itemMetaData.type.forEach( (value, index) => {
		// Add next type
		itemTypeText += value;

		// Add joiner
		if (index < itemMetaData.type.length-2) {
			itemTypeText += ", "
		} else if (index < itemMetaData.type.length-1) {
			itemTypeText += " and "
		}
	})
	itemTypeText += ".\n"
}

if ((itemMetaData.contains) && (itemMetaData.contains.length > 0)){
	// If there is any data about the ingredients
	itemContainsText += "This item contains "
	itemMetaData.contains.forEach( (value, index) => {
		// Add next type
		itemContainsText += value;

		// Add joiner
		if (index < itemMetaData.contains.length-2) {
			itemContainsText += ", "
		} else if (index < itemMetaData.contains.length-1) {
			itemContainsText += " and "
		}
	})
	itemContainsText += ".\n"
}

export default function ItemViewerDescription() {
  return (
    <View style = {styles.container}>
			<Text style = {styles.heading}>Description</Text>
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
    backgroundColor: '#282C35',
    fontSize: 8
  },
  heading: {
    textAlign: 'left',
		color: '#FFFFF0',
		fontFamily: 'arial',
		display: 'flex',
    fontSize: 12
  },
	descriptionText: {
    textAlign: 'left',
		color: '#FFFFF0',
		fontFamily: 'arial',
		display: 'flex',
    fontSize: 8
  },
	typeText: {
    textAlign: 'left',
		color: '#FFE5B4',
		fontFamily: 'arial',
		display: 'flex',
    fontSize: 8
  },
	containsText: {
    textAlign: 'left',
		color: '#FFE5B4',
		fontFamily: 'arial',
		display: 'flex',
    fontSize: 8
  }
});