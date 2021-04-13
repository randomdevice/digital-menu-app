import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import Constants from 'expo-constants';
import firebase from 'firebase'
import OrderStatusBar from '@components/other/2/OrderStatusBar';
import OrderComponent from '@components/other/4/orderComponent';
import Suggestions from '@components/other/8/Suggestions';
import RequestWaiterButton from '@components/other/12/RequestWaiterButton';
import DeleteOrderButton from '@components/other/10/DeleteOrderButton';
export class OrderDashboard extends Component {
    render() {
        return (
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <OrderStatusBar/>
              <OrderComponent/>              
              <Suggestions/>
              <RequestWaiterButton/>
              <DeleteOrderButton />
              
            </ScrollView>
          </SafeAreaView>
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
