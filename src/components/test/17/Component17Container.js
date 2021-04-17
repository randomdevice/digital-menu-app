import React from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
const itemImage = "https://picsum.photos/200/"; //to be changed to firebase url

export default Component17Container = () => {
  return <Component17 />;
};

const Component17 = () => {
  return (
    <SafeAreaView>
      <Image style={styles.container} source={{ uri: itemImage }} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 180,
  },
});
