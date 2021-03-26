import React from 'react';
import {Text,StyleSheet,View,} from 'react-native';
import { ListItem } from 'react-native-elements'
// TODO WHAT THE HUH IS AAAAAA

var orderedItems = [
	{itemPrice: 65, itemName: "Pizza"},
	{itemPrice: 26, itemName: "Burger"},
	{itemPrice: 65, itemName: "Sandwich"},
	{itemPrice: 36, itemName: "Soup"},
	{itemPrice: 26, itemName: "Salad"},
	{itemPrice: 66, itemName: "Ice Cream"}
]


export default function orderComponent(){
	return (
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
					</ListItem>
				))
    	}
		</View>
	)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginHorizontal:16
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