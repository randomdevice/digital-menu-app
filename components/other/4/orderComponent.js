import React from 'react';
import {Text,StyleSheet, SafeAreaView, View,} from 'react-native';
import { ListItem } from 'react-native-elements'
// TODO WHAT THE HUH IS AAAAAA

var orderedItems = [
	{itemPrice: 6.55, itemName: "Pizza", itemQty: 1},
	{itemPrice: 2.69, itemName: "Burger", itemQty: 1},
	{itemPrice: 6.55, itemName: "Sandwich", itemQty: 1},
	{itemPrice: 3.69, itemName: "Soup", itemQty: 1},
	{itemPrice: 2.69, itemName: "Salad", itemQty: 1},
	{itemPrice: 6.69, itemName: "Ice Cream", itemQty: 1}
]

const OrderComponentContainer = () => {
	//backend

	// return presentation
	return (
		<OrderComponent/>
	)
}

export default OrderComponentContainer
  
const OrderComponent= () => {
	return (
    <SafeAreaView style={styles.container}>
		<View style = {styles.container}>
			<View></View>
			{
				orderedItems.map((orderedItem, i) => (
					<ListItem containerStyle = {{marginVertical: 4, marginHorizontal:16,marginBottom:'2%', paddingLeft: '3%',borderRadius:6,height:40,backgroundColor:'#c9e9ff'}}
					key={i} bottomDivider>
						
						<ListItem.Content>
							<ListItem.Title style = {styles.descriptionText}>{orderedItem.itemName}</ListItem.Title>
						</ListItem.Content>
							<Text>Price: $</Text>
						<ListItem.Content>
							<ListItem.Title style = {styles.descriptionText}>{orderedItem.itemPrice}</ListItem.Title>
						</ListItem.Content> 
            <Text>Qty:</Text>
						<ListItem.Content>
						<ListItem.Title style = {styles.descriptionText}>{orderedItem.itemQty}</ListItem.Title>
            </ListItem.Content>
					</ListItem>
				))
    	}
		</View>
    </SafeAreaView>
	)
  
}

const styles = StyleSheet.create({
  container:{
    flex:0,
    justifyContent:'center',
    marginHorizontal:1,
	marginVertical:0,
  },
	descriptionText: {
		textAlign: 'left',
			color: '#000000',
			fontFamily: 'oswald',
		fontSize: 12,
		padding: 1,
  },
})