import * as React from 'react';
import { View, StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

function onPressFunction(){
	Alert.alert('Order has been Placed')
}

export default ItemViewerOrderButtonContainer = () => {
  //backend

  // return presentation
  return (
    <ItemViewerOrderButton/>
  )
}


const ItemViewerOrderButton= () => {
  return (
<SafeAreaView style={styles.container}>
		<View>
			<Button
				title = "Order Item"
				color = "#000000"
				onPress={onPressFunction}
			/>
		</View>
  </SafeAreaView>
  );
}
export default ItemViewerOrderButton;

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