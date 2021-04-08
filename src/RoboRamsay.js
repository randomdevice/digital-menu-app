import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Menu from '@views/Menu'
import Orders from '@views/Orders'
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Empty = () => {
    return null
}

export default function RoboRamsay() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Menu" component={Menu}/>
            <Tab.Screen name="Orders" component={Orders}/>
            <Tab.Screen name="Settings" 
                component={Empty}
                listeners={() => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Settings")
                    }
                })} 
                />
        </Tab.Navigator>
    )
}