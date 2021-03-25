import React, { Component } from 'react'

// Redux store config imports
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/actions'

// Tab Navigator import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import MenuStack from './screens/test/navigation/MenuStack'
import OrderStack from './screens/test/navigation/OrderStack'

const Tab = createBottomTabNavigator()
const EmptyScreen = () => {
    return null
} 

export class RoboRamsay extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <Tab.Navigator initialRouteName="MenuTab">
                <Tab.Screen 
                    name="MenuTab" 
                    component={MenuStack} 
                    options={{
                        tabBarIcon: () => (
                            <Icon name="menu-book"/>
                        )
                    }}/>
                <Tab.Screen 
                    name="OrdersTab" 
                    component={OrderStack} 
                    options={{
                        tabBarIcon: () => (
                            <Icon name="local-dining"/>
                        )
                    }}/>
                <Tab.Screen
                    name="SettingsTab" 
                    component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Settings")
                        }
                    })}
                    options={{
                        tabBarIcon: () => (
                            <Icon name="settings"/>
                        )
                    }}/>
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(RoboRamsay)
