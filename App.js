import 'react-native-gesture-handler';
import React from 'react';
import {MenuScreen} from "./src/screens/MenuScreen";
import {ItemScreen} from './src/screens/ItemScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
