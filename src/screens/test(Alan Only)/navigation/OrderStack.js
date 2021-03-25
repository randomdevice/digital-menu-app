import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OrderDashboard from '../views/OrderDashboard'
import EditOrder from '../views/EditOrder'

const Stack = createStackNavigator()
export class OrderStack extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="OrderDashboard">
                <Stack.Screen name="OrderDashboard" component={OrderDashboard} options={{ headerShown: false }}/>
                <Stack.Screen name="EditOrder" component={EditOrder}/>
            </Stack.Navigator>
        )
    }
}

export default OrderStack
