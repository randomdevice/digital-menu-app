import 'react-native-gesture-handler'
import React from 'react' 
import MenuScreen from './src/screens/other/MenuScreen' 
import ItemScreen from './src/screens/other/ItemScreen' 
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const App = () => {


  const Stack = createStackNavigator();
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="MenuScreen">

      <Stack.Screen name="MenuScreen" component={MenuScreen}/>
      <Stack.Screen name="ItemScreen" component={ItemScreen}/>
    </Stack.Navigator>       


  </NavigationContainer>)


}


export default App;