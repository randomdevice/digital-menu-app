import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView, FlatList, StatusBar } from 'react-native'

export class Menu extends Component {
    constructor({ navigation }) {
        super({ navigation })
        this.navigation = navigation
    }

    render() {
        return (
            <View>
                <Text>
                    Hello this is the menu
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
  
export default Menu