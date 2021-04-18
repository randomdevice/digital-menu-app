import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/* CONTAINER */

const OrderViewCellContainer = ({ info }) => {
  return (
    <OrderViewCell info={info}/>
  )
}

export default OrderViewCellContainer

/* PRESENTATION */

const OrderViewCell = ({ info }) => {
  if (info.length != 0) {
    return (
      <>
        <InfoBlock orders={info.orders}/>
        <View style={styles.orderCell}>
          <Text style={styles.textTitle}>ORDERED</Text>
          <TextLabels/>
          { info.items }
        </View>
      </>
    )
  }

  return (
    <>
      <InfoBlock orders={info.orders}/>
      <View style={styles.orderCell}>
        <Text style={styles.textTitle}>ORDERED</Text>
        <TextLabels/>
      </View>
    </>
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
  textLabels: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  textColorHeader: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textColor: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'monospace',
    textAlign: 'left'
  }
});