import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, Image, Button, ScrollView, View, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useRoute } from '@react-navigation/native';
import firebase from 'firebase';

// Container
export default function ItemViewerContainer() {
    const [item, setItem] = useState(null);
    const route = useRoute();
    const key = route.params.key;


    useEffect(() => {
        firebase.firestore().collection("items").doc(key).get().then((doc) => {
            setItem(doc.data())
        });
    }, [])

    if (key != null && item != null) {
      return <ItemViewer ikey={key} item={item}/>
    }

    return (
      <ItemViewer/>
    )
}

const makeOrder = async (payload) => {
  let user = firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid)
  let snapshot = await user.get()
  let prevOrder = await snapshot.data().currentOrders

  if (prevOrder != undefined) {
    let newOrder = [...prevOrder]
    let match = false
    // checks if duplicates exist
    newOrder.forEach((item) => {
      if (item.key == payload.key) {
        item.quant = item.quant + payload.quant
        match = true
      }
    })
    // if no duplicates exist add a new one
    if (!match) {
      newOrder = [...prevOrder, payload ]
    }

    user.set({
      currentOrders: newOrder,
    }, { merge: true })

  } else {
    user.set({
      currentOrders: [ payload ]
    }, { merge: true })
  }
}

// Presentation
function ItemViewer({ikey, item}) {
    let quant, name, price, description, contains, type, prepTime, image
    const [ selected, setSelected ] = useState(false)

    if(item != null) {
        name = item.itemName
        price = item.itemPrice 
        description = item.itemDescription
        contains = item.itemMetaData.contains.join(', ')
		type = item.itemMetaData.type.join(', ')
        prepTime = item.itemPrepTime
		image = getImage(name)

        // Quantity Selector
        if (!selected) {
          quant = <Button onPress={() => setSelected(true)} title={'Order'}/>
        } else {
          let data = {
            ikey,
            name,
            price,
            prepTime,
            setSelected
          }
          quant = <Incrementer data = {data}/>
        }

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollableContent}>
                    <Image
                        style={styles.image}
                        source={{uri: image}}/>
                    <InfoBlock name={name} price={price}/>
                    <TitledBlock title="Description" text={description}/>
                    <TitledBlock title="Contains" text={contains}/>
                    <TitledBlock title="Type" text={type}/>
                    <TitledBlock title="Prep Time" text={prepTime + " minutes"}/>
                </ScrollView>
                <View style={styles.bottomView}>
                    {quant}
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

function getImage(name){
	// Needs more work
	switch (name) {
		case 'Hamburger':
			return 'https://cdn.discordapp.com/attachments/577247906231222273/834258053075173376/Hamburger.jpg'

		case 'Vanilla ice cream':
			return 'https://cdn.discordapp.com/attachments/577247906231222273/834258056686469141/Vanilla_ice_cream.jpg'
			
		case 'Cheese Pizza':
			return 'https://cdn.discordapp.com/attachments/577247906231222273/834258048381354034/Cheese_Pizza.jpg'
			
		case 'Salad':
			return 'https://cdn.discordapp.com/attachments/577247906231222273/834258054269763614/Salad.jpg'
			
		case 'Chili Mushroom Soup':
			return 'https://cdn.discordapp.com/attachments/577247906231222273/834258050638151710/Chili_Mushroom_Soup.jpg'

		case 'Chili Mushroom Soup':
			return 'https://cdn.discordapp.com/attachments/577247906231222273/834258050638151710/Chili_Mushroom_Soup.jpg'

		case 'Spaghetti and Meatballs':
			return 'https://cdn.discordapp.com/attachments/577247906231222273/834258055591886868/Spaghetti_and_Meatballs.jpg'

		case 'Beef Tacos':
			return 'https://cdn.discordapp.com/attachments/577247906231222273/834258046724997120/Beef_Tacos.jpg'

		default:
			return 'https://cdn.discordapp.com/attachments/577247906231222273/834260448936591370/buffet.jpg'
	}
}

const Incrementer = ({ data }) => {
  const [value, setValue] = useState(1)

  const increment = () => {
    if ( value >= 1) {
      setValue(value + 1)
    }
  }

  const decrement = () => {
    if ( value > 1 ) {
      setValue(value - 1)
    }
  }

  let payload = {
    key: data.ikey,
    name: data.name,
    price: data.price,
    eta: data.prepTime,
    quant: value
  }

  const confirmOrder = () => {
    data.setSelected(false)
    makeOrder(payload)
  }

  return (
    <View>
      <View style={styles.increment}>
        <Button disabled={value == 1} onPress={() => decrement()} title="-"/>
        <Text>{value}</Text>
        <Button onPress={() => increment()} title="+"/>
      </View>
      <Button onPress={() => confirmOrder()} title="confirm"/>
    </View>
  )
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
  increment: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
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