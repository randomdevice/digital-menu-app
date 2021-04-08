import React, { Component } from 'react'
import {View, Text} from 'react-native'
import Constants from 'expo-constants';
import firebase from 'firebase'

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
