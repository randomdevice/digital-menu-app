import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Menu from '@views/customer/Menu'
import Orders from '@views/customer/Orders'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const Empty = () => {
    return null
}

export default function RoboRamsay() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator         
            screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Menu') {
                    iconName = 'book';
                } else if (route.name === 'Orders') {
                    iconName = 'restaurant';
                } else {
                    iconName = 'settings';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
        >
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