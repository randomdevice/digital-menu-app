import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import OrderViewCell from '@components/edit-order/OrderViewCell'
import { useRoute } from '@react-navigation/native'
import Item from './Item';
import firebase from 'firebase'

/* CONTAINER */

export const HEIGHT = 30;

export default function OrderViewerContainer() {
  const route = useRoute()
  const [orders, setOrders] = useState(route.params)

  const deleteItem = (orders, item) => {
    let update = orders.filter(data => data != item)
    setOrders(update)
    let user = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
    user.update({
      currentOrders: update
    })
  }

  let globals = {
    orders,
    deleteItem,
  }

  let items = []
  if (orders != null) {
    orders.forEach(
        (item) => {
          items.push(<TextCell key={item.key} globals={globals} item={item}/>)
        }
    )
  }

  let info = {
    items,
    orders
  }

  return (
      <OrderViewer info={info}/>
  )
}

/* PRESENTATION */

function OrderViewer({ info }) {
    return (
      <View style={styles.container}>
        <OrderViewCell info={info}/>
      </View>
    )
}

const TextCell = ({ globals, item }) => {
  let name, price, quantity
  name = "Name"
  price = "Price"
  quantity = "Quantity"

  if ( item != null) {
    if (item.name.length > 8) {
        name = item.name.substring(0,8) + '...'
    } else {
        name = item.name
    }
    price = item.price
    quantity = item.quant
  }

  return (
    <View style={styles.editCell}>
      <View style={styles.textCell}>
        <Text style={styles.textSpLeft}>{ name }</Text>
        <Text style={styles.textSpCenter}>${ price }</Text>
        <Text style={styles.textSpRight}>{ quantity }</Text>
      </View>
      <DeleteButton globals={globals} item={item}/>
    </View>
  )
}

const DeleteButton = ({ globals, item }) => {
  let orders = globals.orders
  return (
    <TouchableOpacity
      onPress={() => globals.deleteItem(orders, item)}
      activeOpacity={0.6}
      underlayColor="#DDDDDD">
      <Text style={styles.buttonCell}>❌</Text>
    </TouchableOpacity>
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
  },
  editCell: {
    flex:1,
    
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%'
  },
  buttonCell: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 3,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  textCell: {
    height:HEIGHT,
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textSpLeft: {
    flex: 1,
    textAlign: 'left',
  },
  textSpCenter: {
    flex: 1,
    textAlign: 'center',
  },  
  textSpRight: {
    flex: 1,
    textAlign: 'right',
  },
});