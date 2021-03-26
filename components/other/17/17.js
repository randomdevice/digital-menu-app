import React from "react";
import { Image, Text, SafeAreaView, StyleSheet } from "react-native";

export default function image() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Item Viewer Image-Hamburger</Text>
      <Image source={require("./assets/hamburger_item_pic.jpg")} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});