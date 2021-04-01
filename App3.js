import 'react-native-gesture-handler'
import React from 'react' 
import MenuScreen from './src/screens/other/MenuScreen' 
import ItemScreen from './src/screens/other/ItemScreen' 
import OrderViewer from './src/screens/other/OrderViewer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const App3 = () => {


  const Stack = createStackNavigator();
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Menu Screen">
      <Stack.Screen name='Order Viewer' component={OrderViewer}/>

      <Stack.Screen name="Menu Screen" component={MenuScreen}/>
      <Stack.Screen name="Sample Item Screen" component={ItemScreen}/>
    </Stack.Navigator>       


  </NavigationContainer>)


}


export default App3;