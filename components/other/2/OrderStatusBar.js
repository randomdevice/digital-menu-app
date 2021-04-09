//A whole bunch of imports because this is painful
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import Constants from 'expo-constants';
import {MaterialIcons, Octicons, AntDesign} from '@expo/vector-icons'

//The following imports I don't know the purpose of, these were generated by expo.io
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  return (
    <View>
      <Header
        placement='left'
        leftComponent={{ text: '', style: { color: '#fff', fontSize:24 } }} 
        centerComponent={{ text: 'Dashboard', style: { color: '#fff', fontSize:24 } }}
        rightComponent={<Octicons name="search" size={24} color="#fff" />}
        backgroundColor = "#000"
      />
    </View>
  );
}
export default OrderStatusBar;
