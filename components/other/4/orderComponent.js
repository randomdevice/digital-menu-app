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

export default orderComponentContainer = () => {
	//backend
  
	// return presentation
	return (
	  <orderComponent/>
	)
  }
  
const orderComponent= () => {
	return (
    <SafeAreaView style={styles.container}>
		<View style = {styles.container}>
			<View></View>
			{
				orderedItems.map((orderedItem, i) => (
					<ListItem key={i} bottomDivider>
						<Text>Item:</Text>
						<ListItem.Content>
							<ListItem.Title>{orderedItem.itemName}</ListItem.Title>
						</ListItem.Content>
							<Text>Price:</Text>
						<ListItem.Content>
							<ListItem.Title>{orderedItem.itemPrice}</ListItem.Title>
						</ListItem.Content> 
            <Text>Qty:</Text>
						<ListItem.Content>
						<ListItem.Title>{orderedItem.itemQty}</ListItem.Title>
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
    flex:1,
    justifyContent:'center',
    marginHorizontal:1
  },
  title:{
    textAlign:'center',
    marginVertical:8
  },
  fitToText:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  separator:{
    marginVertical:8,
  },
})