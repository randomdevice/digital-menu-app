//Used Expo as well as looked at work done in 12 for reference.
import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, SafeAreaView } from 'react-native';
export default function App() {
  return (
    //The lines below for Button is to actually generate the button, the SafeAreaView is to make the
      //standalone button visible when testing the code on expo
    <SafeAreaView style ={styles.container}>
      <View>
        <Button 
          title = "Delete Order"
          color="#700"
          onPress = {()=>Alert.alert('Order has been Deleted')}
        />
        
      </View>
    </SafeAreaView>
  );
}

//This portion is just to make the button itself when coded to be centered on the screen
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
