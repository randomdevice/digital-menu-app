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

//FOR ALAN OR WHOEVER IS GOING TO EDIT THIS. THIS IS A CONST LIST ATM, BUT CHANGE THIS LIST TO FIT WHATEVER THE INPUT FROM THE PREVIOUS PAGE GIVES. NOTE THAT EACH OBJECT MUST HAVE A TITLE AND VALUE SIMILAR TO THE LIST HERE. DIDNT HAVE ENOUGH TIME TO IMPLEMENT THE FUNCTION FOR THE SUM AND TAXES
const list = [
  {
    title: 'Food1',
    price: <Button
  title="CANCEL"
  buttonStyle={{backgroundColor:'black'}}
/>
  },
  {
    title: 'Food2',
    price: <Button
  title="CANCEL"
  buttonStyle={{backgroundColor:'black'}}
/>
  },
  {
    title: 'Food3',
    price: <Button
  title="CANCEL"
  buttonStyle={{backgroundColor:'black'}}
/>
  },
  {
    title: 'Food4',
    price: <Button
  title="CANCEL"
  buttonStyle={{backgroundColor:'black'}}
/>
  },
  {
    title: 'Food5',
    price: <Button
  title="CANCEL"
  buttonStyle={{backgroundColor:'black'}}
/>
  },
  {
    title: 'Food6',
    price: <Button
  title="CANCEL"
  buttonStyle={{backgroundColor:'black'}}
/>
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
          
        <ListItem.Content>
          <ListItem.Title>{item.price}</ListItem.Title>
        </ListItem.Content> 
      </ListItem>
    ))
  }
</View>

<Button
  title="BACK"
  buttonStyle={{backgroundColor:'black'}}
/>

    </View>
    </SafeAreaProvider>
     );
}