import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';



const MenuItem = ({item}) => { 

  const navigation = useNavigation();
  return(
    <ListItem onPress={() => navigation.navigate("Sample Item Screen")} containerStyle = {{marginHorizontal:16,marginBottom:'2%', paddingLeft: '3%',borderRadius:6,height:70,backgroundColor:'#c9e9ff'}}>
      
      <ListItem.Content style={{flex:0.3}}>
        <Avatar 

            source={
              require('../../../assets/burger.jpg')
            }
            >
          
        </Avatar>
      </ListItem.Content>
      <ListItem.Content style = {{alignItems:'flex-start'}}>
        <ListItem.Title style = {{fontSize:19}}>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.desc}</ListItem.Subtitle>
      </ListItem.Content>
  
        <ListItem.Content>
            
            <ListItem.Subtitle style = {{fontSize:16,alignSelf:'flex-end'}}>{item.price}</ListItem.Subtitle>
        </ListItem.Content>
      
      
    </ListItem>
  )
}

export default MenuItem;