//A whole bunch of imports because this is painful
import * as React from 'react';
import { View, StyleSheet, Button, Alert, SafeAreaView } from 'react-native';


export default function RequestWaiterButton() {
  return (
    <SafeAreaView style ={styles.container}>
      <View style = {styles.container}>
        <Button 
          title = "Request Waiter"
          color = "#000000"
          onPress = {()=>Alert.alert('Waiter has been requested')}
        />
      </View>
    </SafeAreaView>
  );
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
