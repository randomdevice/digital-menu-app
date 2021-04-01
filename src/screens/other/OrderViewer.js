import React from 'react'
import { ListItem} from 'react-native-elements'
import { FlatList, StatusBar,View, StyleSheet, Text,TouchableHighlight } from "react-native";
import { Entypo } from '@expo/vector-icons'; 


const sample_items =[{
  name:'Pancakes',
  quantity: 'x2',
  price:'$2.00'
}, 
{ 
  name:'Waffle',
  quantity: 'x2',
  price:'$2.00'
}, 
{ 
  name:'Omelet',
  quantity: 'x2',
  price:'$2.00'
}
]


const OrderViewer = () => {

  const renderItem = ({ item }) => { 

    return(
      
      <ListItem containerStyle = {{marginHorizontal:16,marginBottom:'2%', paddingLeft: '3%',borderRadius:6,height:70,backgroundColor:'#c9e9ff'}}>
      
      <ListItem.Content style={{}}>
        <ListItem.Title style = {{fontSize:17}}>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content style = {{alignItems:'center',alignSelf:'center'}}>
        <ListItem.Title style = {{fontSize:17}}>{item.quantity}</ListItem.Title>
      </ListItem.Content>
  
      <ListItem.Content>
            
        <ListItem.Title style = {{fontSize:17,alignSelf:'flex-end',paddingRight:'3%'}}>{item.price}</ListItem.Title>
      </ListItem.Content>
      
      
    </ListItem>

    )
  }  

  const renderHeader = () => {

    return(
      <View style = {{paddingHorizontal:'4%',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end',flex:1,flexDirection:'row',}}>
      <Text style={{fontSize:19}}>Item</Text>
      <Text style={{fontSize:19}}>Count</Text>
      <Text style={{fontSize:19}}>Price</Text>
      </View>
    )
  }

  const renderFooter = () => {

    return(
      <View style = {{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}> 

        <TouchableHighlight style={{flex:0.3,borderRadius:5,backgroundColor:'#4cb6fc',alignItems:'center',justifyContent:'center',height:'45%'}}>
           <Entypo name="plus" size={24} color="white" />
        </TouchableHighlight>    

        <TouchableHighlight style={{flex:0.3,borderRadius:5,backgroundColor:'#fc4c72',alignItems:'center',justifyContent:'center',height:'45%'}}>
           <Entypo name="minus" size={24} color="white" />
        </TouchableHighlight> 

      </View>
    )

  }
  
  return(

    <View style={styles.container}>
      
      <View>
      <FlatList
        
        style={{backgroundColor:'#98b3d6',borderRadius:5,marginHorizontal:16}}
        data={sample_items}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        ListHeaderComponent = {renderHeader}
        ListHeaderComponentStyle = {{marginHorizontal:16,marginBottom:'2%',height:40}}
        ListFooterComponent = {renderFooter} 
        ListFooterComponentStyle={{marginHorizontal:16,marginTop:'2%',height:80}}
      />
      </View>
    </View>
  );

} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent:'center'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default OrderViewer;
