import React, { Component } from 'react'

// Redux store config imports
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/actions'

// Tab Navigator import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import Menu from './screens/test/Menu'
import Checkout from './screens/test/Checkout'
import Orders from './screens/test/Orders'

const Tab = createBottomTabNavigator()

export class RoboRamsay extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen 
                    name="Menu" 
                    component={Menu} 
                    options={{
                        tabBarIcon: () => (
                            <Icon name="menu-book"/>
                        )
                    }}/>
                <Tab.Screen 
                    name="Checkout" 
                    component={Checkout} 
                    options={{
                        tabBarIcon: () => (
                            <Icon name="payments"/>
                        )
                    }}/>
                <Tab.Screen 
                    name="Orders" 
                    component={Orders} 
                    options={{
                        tabBarIcon: () => (
                            <Icon name="local-dining"/>
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
