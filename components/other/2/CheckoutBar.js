//A whole bunch of imports because this is painful
import * as React from 'react';
import { View } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import Constants from 'expo-constants';
import { Octicons, AntDesign } from '@expo/vector-icons'


export default function CheckoutBar() {
  return (
    <View>
      <Header
        placement='left'
        leftComponent={<AntDesign name="arrowleft" size={24} color="#fff" />} 
        centerComponent={{ text: 'Checkout', style: { color: '#fff', fontSize:24 } }}
        rightComponent={<Octicons name="search" size={24} color="#fff" />}
        backgroundColor = "#000"
      />
    </View>
  );
}
