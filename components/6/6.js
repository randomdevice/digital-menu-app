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

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

//couldnt get functions to work, plz fix this alan lmao
var fooditem1 = 9
var fooditem2 = 7
var fooditem3 = 6
var fooditem4 = 22
var fooditem5 = 1
var fooditem6 = 4
var sumsubtotal = fooditem1 + fooditem2 + fooditem3 + fooditem4 + fooditem5 + fooditem6
var taxtotal = Math.round(sumsubtotal*0.07)
var totaltotal = taxtotal + sumsubtotal

//FOR ALAN OR WHOEVER IS GOING TO EDIT THIS. THIS IS A CONST LIST ATM, BUT CHANGE THIS LIST TO FIT WHATEVER THE INPUT FROM THE PREVIOUS PAGE GIVES. NOTE THAT EACH OBJECT MUST HAVE A TITLE AND VALUE SIMILAR TO THE LIST HERE. DIDNT HAVE ENOUGH TIME TO IMPLEMENT THE FUNCTION

const list = [
  {
    title: 'Food1',
    price: fooditem1
  },
  {
    title: 'Food2',
    price: fooditem2
  },
  {
    title: 'Food3',
    price: fooditem3
  },
  {
    title: 'Food4',
    price: fooditem4
  },
  {
    title: 'Food5',
    price: fooditem5
  },
  {
    title: 'Food6',
    price: fooditem6
  }
]

export default function App() {
  return (
    <SafeAreaProvider>
    <View>

<Header
  leftComponent={<MaterialIcons name="arrow-left" size={24} color="white" />}
  centerComponent={{ text: 'PAYMENT', style: { color: 'white' } }}
  rightComponent={<MaterialIcons name="attach-money" size={24} color="white" />}
  containerStyle={{backgroundColor:'black'}}
 />

<Ionicons name="ios-shield-checkmark" size={50} color="green"/>


<View>
  {
    list.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Text>Item:</Text>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
           <Text>Price:</Text>
        <ListItem.Content>
          <ListItem.Title>{item.price}</ListItem.Title>
        </ListItem.Content> 
      </ListItem>
    ))
  }
</View>

<Text h3>Subtotal: ${sumsubtotal}</Text>
<Text h4>Tax: ${taxtotal}</Text>
<Text h3>Total: ${totaltotal}</Text>

<Button
  title="CONFIRM ORDER"
  buttonStyle={{backgroundColor:'black'}}
/>
<Button
  title="EDIT ORDER"
  buttonStyle={{backgroundColor:'black'}}
/>

    </View>
    </SafeAreaProvider>
     );
}