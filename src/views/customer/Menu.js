// written by: Alan Chacko
// tested by: Alan Chacko
// debugged by: Alan Chacko

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import firebase from 'firebase'
import Item from '@components/menu/Item'
import { useIsFocused } from '@react-navigation/native'

export default function Menu() {
  const [menu, setMenu] = useState(null)
  const isFocused = useIsFocused()

  // Is called once when the component is loaded.
  // Then gets data and stores it in a local array.
  // Updates app state with setMenu func
  // menu is now an array of objects that can be passed in and read from every item.
  useEffect(() => {
    if (isFocused) {
      let items = []
      firebase.firestore().collection("items").get().then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          items.push({
            key: doc.id, 
            data: doc.data()
          })
        });

        setMenu(items);
      })
    }
  }, [isFocused])

  if (menu != null) {
    return (
      <FlatList
        style={styles.container}
        data={menu}
        renderItem={({ item }) => (
          <Item item={item}/>
        )}
      />
    );
  }

  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 10,
  },
});
