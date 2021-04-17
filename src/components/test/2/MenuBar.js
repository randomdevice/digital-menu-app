//A whole bunch of imports because this is painful
import * as React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements'
// import Constants from 'expo-constants';
import { Octicons } from '@expo/vector-icons'


export default function MenuBar() {
  return (
    <View>
      <Header
        placement='left'
        leftComponent={{text:'',style:{color:'#fff',fontSize:24}}} 
        centerComponent={{ text: 'Menu', style: { color: '#fff', fontSize:24 } }}
        rightComponent={<Octicons name="search" size={24} color="#fff" />}
        backgroundColor = "#000"
      />
    </View>
  );
}
