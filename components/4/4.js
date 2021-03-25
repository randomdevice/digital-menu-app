import React from 'react';
import {Text,StyleSheet,View,} from 'react-native';

const data = {
    content: {
      body: [
        {
          _ordernum: "",
          _ordereditems: "",
          _ordercost: ""
        },
      ]
    }
  };

const ordrComponent = () => {
    return (
        <View style={styles.container}></View>
    )
}