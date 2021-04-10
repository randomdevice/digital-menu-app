import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants';
import firebase from 'firebase'
import OrderStatusBar from '@components/other/2/OrderStatusBar';
import orderComponent from '@components/other/4/orderComponent';
import Suggestions from '@components/other/8/Suggestions';
import RequestWaiterButton from '@components/other/12/RequestWaiterButton';
import DeleteOrderButton from '@components/other/10/DeleteOrderButton';
export class OrderDashboard extends Component {
    render() {
        return (
            <View>
                <Text>
                    This is the Order Page
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: 'white',
      padding: 10,
    },
  });
  
export default OrderDashboard
