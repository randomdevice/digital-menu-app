import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, PricingCard, Button, ListItem, Icon, Text} from 'react-native-elements'
import Constants from 'expo-constants';
import { MaterialIcons, Ionicons} from '@expo/vector-icons';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';



//ALL THE VARIABLES ARE JUST LISTED HERE ATM, CONNECT THESE TO BACKEND

var fooditem1 = 9
var fooditem2 = 7
var fooditem3 = 6
var fooditem1c = 1
var fooditem2c = 2
var fooditem3c = 3
var foodtitle1 = 'Food1'
var foodtitle2 = 'Food2'
var foodtitle3 = 'Food3'
var chknum = 5
var timecreate = 'unknown time'
var timeremain = 'unknown time remain'

//CURRENT USING A CONST LIST  TO STORE THE FOODS DATA LOCALLY. ADDING TO THIS LIST WILL ADD TO THE LIST OF ITEMS IN THE ORDER 

const list = [
  {
    title: foodtitle1,
    price: fooditem1,
    count: fooditem1c
  },
  {
    title: foodtitle2,
    price: fooditem2,
    count: fooditem2c
  },
  {
    title: foodtitle3,
    price: fooditem3,
    count: fooditem3c
  },
   /*         
  {  
    title: foodtitle,           
    price: fooditem,
    count: fooditemc
  }
  */
]




var sumsubtotal = fooditem1*fooditem1c + fooditem2*fooditem2c + fooditem3*fooditem3c
var taxtotal = Math.round(sumsubtotal*0.07)
var totaltotal = taxtotal + sumsubtotal

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
});

export default function App() {
  return (
    <SafeAreaProvider>
    <View>

<Header
  placement="left"
  leftComponent={
    <Button
 icon={
    <MaterialIcons name="arrow-back" size={15} color="white" />
  }type="clear"
  />
  }
  centerComponent={{ text: 'VIEW ORDER', style: { color: 'white' } }}
  containerStyle={{backgroundColor:'black'}}
 />

<Text h5>     CHK #: {chknum}</Text>
<Text h5>     TIME CREATED: {timecreate}</Text>
<Text h5>     SUBTOTAL: ${sumsubtotal}</Text>
<Text h5>     TAX: ${taxtotal}</Text>
<Text h5>     TOTAL: ${totaltotal}</Text>
<Text h5>     EST. TIME REMAINING: {timeremain}</Text>
<Text h4>   ORDERED</Text>
<Text h5>     ITEM              COUNT                   PRICE</Text>

<View>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>

        <ListItem.Content>
          <ListItem.Title>{item.count}</ListItem.Title>
        </ListItem.Content>

        <ListItem.Content>
          <ListItem.Title>$ {item.price}</ListItem.Title>
        </ListItem.Content> 
      </ListItem>
    ))
  }
</View>


      <View style={styles.fixToText}>
      
        <Button
        title = "               +               "
          buttonStyle={{backgroundColor:'black'}} 
        />
        <Button
         title = "               -               "
          buttonStyle={{backgroundColor:'red'}}
        />
      </View>


<Button
  title="SAVE CHANGES"
  buttonStyle={{backgroundColor:'black'}}
/>
<Button
  title="DELETE ORDER"
  buttonStyle={{backgroundColor:'red'}}
/>

    </View>
    </SafeAreaProvider>
     );
}