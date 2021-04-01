import React from 'react';
import { StyleSheet,StatusBar, Image,Text, View,} from 'react-native';
import {FAB} from 'react-native-paper';
import itempic from '../../../assets/hamburger_item_pic.jpg';


const ItemScreen = ({navigation}) => {

  //replace hardcodeded value with database query
  const itemDesc = 'Cheeseburger with mozarella cheese, dill pickle, on sesame bun. Comes with fries or chips.'
  return(

    <View style = {styles.container}>
     
      <Image source={itempic} style={{width: "100%", height: '40%'}} /> 

      <View style={{margin:'5%'}}>
        <Text style={{fontSize:15}}>{itemDesc}</Text>
      </View> 

      <FAB
        icon= "plus"
        style={styles.fab}
        label="Add to Order"
        color= "white"
        
        onPress={() => console.log("pressed")}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      
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

export default ItemScreen;

