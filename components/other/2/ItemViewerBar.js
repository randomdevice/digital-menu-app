//A whole bunch of imports because this is painful
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import Constants from 'expo-constants';
import {MaterialIcons, Octicons, AntDesign} from '@expo/vector-icons'

export default function App() {
  return (
    <View>
      <Header
        placement = 'left'
        leftComponent = {<AntDesign name="arrowleft" size={24} color="#fff" />}
        backgroundColor = "#000"
      />
    </View>
  );
}
