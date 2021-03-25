import React from 'react';
import {Text, StatusBar, StyleSheet, View} from 'react-native';

export default ItemScreen = ({navigation}) => {

return(
  <View style={styles.container}>

      <Text>
          Order checkout Screen
      </Text>

  </View>
);


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      alignItems:'center',
      justifyContent:'center'
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
      
    },
    title: {
      fontSize: 24
    }, 
    fab : { 
      position: 'absolute',
      alignSelf:'center',
      bottom:'3%',
      backgroundColor:"#3fba3f"
    }
  });
