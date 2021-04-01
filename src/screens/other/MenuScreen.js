import { useLinkProps } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StyleSheet,StatusBar, Text, View,SectionList } from 'react-native';
import { FAB } from 'react-native-paper';
import MenuItem from '../../../components/other/3/MenuItem'
import { useNavigation } from '@react-navigation/native';


const data = [ 
  {
    title:  "Breakfast", 
    data: [{
      name:'Pancakes',
      desc:'desc',
      price:'$2.00'
    }, 
    { 
      name:'Waffle',
      desc:'desc',
      price:'$2.00'
    }, 
    { 
      name:'Omelet',
      desc:'desc',
      price:'$2.00'
    }
    ]
  }, 
  {
    title: 'Lunch',
    data: [{
      name:'Burger',
      desc:'desc',
      price:'$2.00'
    }, 
    { 
      name:'Sandwich',
      desc:'desc',
      price:'$2.00'
    }, 
    { 
      name:'Wrap',
      desc:'desc',
      price:'$2.00'
    }
    ]
  }, 
  {
    title: 'Dinner', 
    data: [{
      name:'Salmon',
      desc:'desc',
      price:'$2.00'
    }, 
    { 
      name:'Chicken',
      desc:'desc',
      price:'$2.00'
    }, 
    { 
      name:'Lasagna',
      desc:'desc',
      price:'$2.00'
    }
    ]
  }
  
];

const MenuScreen = ({navigation}) => { 

  
  const renderItem =({item}) => {

    
    return(
    <MenuItem item={item}/>
    );
  }

  const keyExtractor= useCallback((item) => item.name,[]);

  const renderSectionHeader = useCallback(({ section: { title } }) => (
    
    <View style = {{backgroundColor:'#ffe9a1', marginBottom:'2%',paddingLeft:'3%'}}><Text style={styles.header}>{title}</Text></View>
    
  ),[]); 

  return (
  <View style={styles.container}>

    <SectionList
      
      initialNumToRender = {20}
      sections={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />

    <FAB
      style={styles.fab}
      label="View Order"
      color= "white"
      icon={"cart-outline"}
      onPress={() => navigation.navigate("OrderScreen")}
    /> 

  </View>
  );
}

export default MenuScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    //marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    
  },
  title: {
    fontSize: 24
  }, 
  fab : { 
    position: 'absolute',
    alignSelf:'center',
    bottom:'3%',
    backgroundColor:"#3fba3f"
  }
});




