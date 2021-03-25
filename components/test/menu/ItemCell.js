import React from 'react'
import firebase from 'firebase'
import { View } from 'react-native'

/*
const getItem = async (name) => {
    await firebase.firestore().collection("items").where("itemName","==",name).doc().get()
}
*/

const ItemCell = ({ title }) => {
    return (
        <View>
            <Text>
                Menu Item
            </Text>
        </View>
    )
}

export default ItemCell