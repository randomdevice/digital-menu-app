//A whole bunch of imports because this is painful
import * as React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements'
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'

export default function ItemViewer() {
  return (
    <View>
      <Header
        placement='left'
        leftComponent={<AntDesign name="arrowleft" size={24} color="#fff" />}
        backgroundColor = "transparent"
      />
    </View>
  );
}
