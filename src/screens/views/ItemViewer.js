import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, Image, Button, ScrollView, View, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useRoute } from '@react-navigation/native';
import firebase from 'firebase';

export default function ItemViewerContainer() {
    const [item, setItem] = useState(null);
    const route = useRoute();
    const key = route.params.key;

    useEffect(() => {
        firebase.firestore().collection("items").doc(key).get().then((doc) => {
            setItem(doc.data())
        });
    }, [])

    if (item != null) {
        return <ItemViewer item={item}/>
    }

    return (
        <ItemViewer/>
    )
}

function ItemViewer({item}) {
    let name, price, description, contains, prepTime

    if(item != null) {
        name = item.itemName
        price = item.itemPrice 
        description = item.itemDescription
        contains = item.itemMetaData.contains.toString()
        prepTime = item.itemPrepTime

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollableContent}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://placeimg.com/640/480/nature'}}/>
                    <InfoBlock name={name} price={price}/>
                    <TitledBlock title="Description" text={description}/>
                    <TitledBlock title="Contains" text={contains}/>
                    <TitledBlock title="Prep Time" text={prepTime + " minutes"}/>
                </ScrollView>
                <View style={styles.bottomView}>
                    <Button title={'Order'}/>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.loading}>
            <ActivityIndicator size="large"/>
        </SafeAreaView>
    );
}

const InfoBlock = ({ name, price }) => {

    if (name == null) {
      name = "Item Name"
    }
  
    if (price == null) {
      price = "0.00"
    }
  
    return (
      <View style={styles.itemInfoBlock}>
        <Text style={styles.title}>
          {name}
        </Text>
        <Text style={styles.subtitle}>
          PRICE: ${price}
        </Text>
      </View>
    )
  }
  
const TitledBlock = ({ title = "title", text = "text" }) => {
    return (
        <View style={styles.itemDescription}>
        <Text style={styles.subtext}>{title}:</Text>
        <Text>
            {text}
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200
  },
  itemInfoBlock: {
    paddingTop: '3%',
    paddingLeft: '5%',
    paddingBottom: '3%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  itemDescription: {
    width: '90%',
    marginBottom: '5%',
    padding: '3%',
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10
  },
  subtext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollableContent: {
    paddingBottom: '20%',
  },
  bottomView: {
    width: '100%',
    alignSelf: 'center',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'white',
    padding: 10
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});