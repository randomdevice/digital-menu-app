// written by: Ray Chau, Esteban Salazar
// tested by: Shrey Joshi, Akira Brown
// debugged by: Akira Brown

import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import snack from '@images/snack-logo.png'
import { useNavigation } from '@react-navigation/native'

/* CONTAINER */
// Loads in an item from the menu an loads it in a separate stack page.
const ItemContainer = ({ item }) => {

  let text = {
    key: null,
    title: "Item Name",
    desc: "Description",
    price: "0.00"
  }

  if(item != null) {
    text = {
      key: item.key,
      title: item.data.itemName,
      desc: item.data.itemDescriptionMini,
      price: item.data.itemPrice
    }
  }

  return(
    <Item text={text}/>
  )
}

export default ItemContainer

/* PRESENTATION */
const Item = ({ text }) => {

  const navigation = useNavigation()

  // item.key data to send to ItemViewer
  return(
    <TouchableOpacity onPress={() => navigation.navigate("ItemViewer", { key: text.key, title: text.title })}>
      <View style={styles.listItem}>
        <View style={styles.listContent}>
          <View style={styles.listImage}>
            <Image source={snack} style={{height: 40, width: 40}}/>
          </View>
          <View style={styles.listTextBlock}>
            <View style={styles.listInfo}>
              <Text style={styles.title}>{text.title}</Text>
              <Text numberOfLines={1} style={styles.subtitle}>{text.desc.substring(0,20)}</Text>
            </View>
            <View style={styles.listPrice}>
              <Text style={styles.price}>{"$" + text.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    alignSelf: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  listContent: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  listImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listTextBlock: {
    flex: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listInfo: {
    padding: 10,
  },
  listPrice: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  title: {
    fontFamily: 'monospace',
    fontSize: 18
  },
  subtitle: {
    fontFamily: 'monospace',
    fontSize: 14,
  },
  price: {
    fontFamily: 'monospace',
    fontSize: 18,
  }
});
