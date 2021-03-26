import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Menu from '../views/Menu'
import ItemViewer from '../views/ItemViewer'
import Checkout from '../views/Checkout'

const Stack = createStackNavigator()
export class MenuStack extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Menu">
                <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
                <Stack.Screen name="ItemViewer" component={ItemViewer}/>
                <Stack.Screen name="Checkout" component={Checkout}/>
            </Stack.Navigator>
        )
    }
}

export default MenuStack
