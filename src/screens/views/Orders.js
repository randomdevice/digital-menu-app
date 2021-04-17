import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import OrderCell from '@components/test/orders/OrderCell'
import firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native'

export default function OrdersContainer() {
    const [orders, setOrders] = useState(null)
    const isFocused = useIsFocused();

    useEffect(() => {
      if (isFocused) {
        firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
          .then((snapshot) => {
            let itemsSelected = snapshot.data().currentOrders
            if (itemsSelected != undefined) {
              setOrders(itemsSelected)
            }
          })
      }
    }, [isFocused])

    return (
        <Orders orders={orders}/>
    )
}

function Orders({ orders }) {
    if (orders != null) {
      return (
        <View style={styles.container}>
          <OrderCell orders={orders}/>
        </View>
      )
    }

    return (
      <View style={styles.blank}>
        <Text style={styles.blankText}>No Orders Made Yet 👻</Text>
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: '5%'
  },
  blank: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  blankText: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
