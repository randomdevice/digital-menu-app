import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// Container

const OrderCellContainer = ({ orders }) => {
  if (orders != null) {
    return (
      <OrderCell orders={orders}/>
    )
  }
  
  return (
    <View></View>
  )
}

export default OrderCellContainer

// Presentation

const OrderCell = ({ orders }) => {
  const navigation = useNavigation()
  let items = []
  orders.forEach(
    (item) => {
      items.push(<TextCell key={item.key} item={item}/>)
    }
  )

  return (
    <TouchableOpacity onPress = {() => navigation.navigate("OrderViewer", orders)} style={styles.container}>
      <View style={styles.orderCell}>
        <InfoBlock orders={orders}/>
        <TextLabels/>
        {items}
      </View>
    </TouchableOpacity>
  )
}

const InfoBlock = ({ orders }) => {
  let total = 0
  let eta = 0
  orders.forEach((item) => {
    total += item.price * item.quant
    eta += item.eta * item.quant
  })

  return (
    <View style={styles.infoBlock}>
      <View style={styles.infoBlock_text}>
        <Text style={styles.textColor}>ETA: { eta } minutes</Text>
        <Text style={styles.textColor}>Subtotal: ${ total.toFixed(2) }</Text>
        <Text style={styles.textColor}>Total: ${ (total * 1.07).toFixed(2) }</Text>
      </View>
      <View style={styles.infoBlock_status}>
        <Text>PENDING</Text>
      </View>
    </View>
  )
}

const TextLabels = () => {
  return (
    <View style={styles.textLabels}>
      <Text style={styles.textColorHeader}>Item</Text>
      <Text style={styles.textColorHeader}>Price</Text>
      <Text style={styles.textColorHeader}>Quant</Text>
    </View>
  )  
}

const TextCell = ({ item }) => {
  let name, price, quantity
  name = "Name"
  price = "Price"
  quantity = "Quantity"

  if ( item != null) {
    if (item.name.length > 13) {
        name = item.name.substring(0,13) + '...'
    } else {
        name = item.name
    }
    price = item.price
    quantity = item.quant
  }

  return (
    <View style={styles.textCell}>
      <Text style={styles.textSpLeft}>{ name }</Text>
      <Text style={styles.textSpCenter}>${ price }</Text>
      <Text style={styles.textSpRight}>{ quantity }</Text>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    marginVertical: '3%',
  },
  orderCell: {
    width: '100%',
    top: 0,
    paddingVertical: 10,
    paddingHorizontal: 10, 
    alignSelf: 'center',
    backgroundColor: '#1565C0',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  infoBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoBlock_text: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  infoBlock_status: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textLabels: {
    flexDirection: 'row',
    width: '100%',
    heightMax: '5%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textCell: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    heightMax: '5%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 5,
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
  textColorHeader: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textColor: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left'
  }
});