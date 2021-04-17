//A whole bunch of imports because this is painful
import * as React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements'
// import Constants from 'expo-constants';
import { Octicons } from '@expo/vector-icons'


function OrderStatusBar() {
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
