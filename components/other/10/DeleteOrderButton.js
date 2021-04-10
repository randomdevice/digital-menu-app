//Used Expo as well as looked at work done in 12 for reference.
import * as React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

function onPressFunction(){
	Alert.alert('Order has been Placed')
}


function DeleteOrderButton() {
  return (
		<View style = {styles.container}>
			<Button 
				title = "Delete Order"
				color="#E74020"
				onPress={onPressFunction}
			/>
		</View>
  );
}

export default DeleteOrderButton;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginHorizontal:16
  }
})