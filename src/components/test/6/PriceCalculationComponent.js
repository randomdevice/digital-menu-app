import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import Constants from 'expo-constants';

// Temp items def
var orderedItems = [
	{itemPrice: 65, itemName: "Pizza"},
	{itemPrice: 26, itemName: "Burger"},
	{itemPrice: 65, itemName: "Sandwich"},
	{itemPrice: 36, itemName: "Soup"},
	{itemPrice: 26, itemName: "Salad"},
	{itemPrice: 66, itemName: "Ice Cream"}
]

var subTotalAmount = 0;
orderedItems.forEach((value, index) => {
	subTotalAmount += value.itemPrice
})

var taxAmount = Math.round(subTotalAmount*0.07)
var totalAmount = taxAmount + subTotalAmount


export default function PriceCalculationComponent() {
  return (
		<View style = {styles.container}>
			<Text style = {styles.subTotal}>Subtotal:      ${subTotalAmount}</Text>
			<Text style = {styles.tax}>Tax:                    ${taxAmount}</Text>
			<Text style = {styles.total}>Total:        ${totalAmount}</Text>
		</View>
	);
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight+4,
    padding: 8,
		fontFamily: 'arial',
    backgroundColor: '#ECECEC',
    fontSize: 8
  },
  subTotal: {
    textAlign: 'left',
		color: '#000000',
		fontFamily: 'arial',
		display: 'flex',
    fontSize: 18
  },
  tax: {
    textAlign: 'left',
		color: '#000000',
		fontFamily: 'arial',
		display: 'flex',
    fontSize: 14
  },
  total: {
    textAlign: 'left',
		color: '#000000',
		fontFamily: 'arial',
		display: 'flex',
    fontSize: 22
  }
});