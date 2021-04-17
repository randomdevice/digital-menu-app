import * as React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

function onPressFunction(){
	Alert.alert('Order has been Placed')
}


export default function CheckoutOrderButton() {
  return (
		<View style = {styles.container}>
			<Button
				title = "Confirm Order"
				color = "#000000"
				onPress={onPressFunction}
			/>
		</View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginHorizontal:16
  }
})