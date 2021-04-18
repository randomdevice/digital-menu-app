import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import Animated, {
  abs,
  add,
  call,
  clockRunning,
  cond,
  eq,
  not,
  set,
  useCode,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  State,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  snapPoint,
  timing,
  useClock,
  usePanGestureHandler,
  useValue,
  minus,
  clamp,
} from "react-native-redash/lib/module/v1";

//import ItemLayout, { ItemModel, HEIGHT } from "./ItemLayout";
//import Action from "./Action";

let HEIGHT = 30;
const { width } = Dimensions.get("window");
const snapPoints = [-150, -100, 0];
const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#E1E2E3",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },

  textCell: {
    height:HEIGHT,
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textSpLeft: {
    flex: 1,
    textAlign: 'left',
  },
  textSpCenter: {
    flex: 1,
    textAlign: 'center',
  },  
  textSpRight: {
    flex: 1,
    textAlign: 'right',
  }
});

/*

interface ItemProps {
  item: ItemModel;
  onSwipe: () => void;
}

*/

const Item = ({ item, onSwipe}) => {

  
  
  let name, price, quantity
  name = "Name"
  price = "Price"
  quantity = "Quantity" 

  if ( item != null) {
    if (item.name.length > 8) {
        name = item.name.substring(0,8) + '...'
    } else {
        name = item.name
    }
    price = item.price
    quantity = item.quant
  } 


  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const translateX = useValue(0);
  const offsetX = useValue(0);
  const height = useValue(HEIGHT);
  //const deleteOpacity = useValue(1);
  const clock = useClock();
  const to = snapPoint(translateX, velocity.x, snapPoints);
  const shouldRemove = useValue(0);
  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(translateX, add(offsetX, clamp(translation.x,  -9999, minus(offsetX) )))
      ),
      cond(eq(state, State.END), [
        set(translateX, timing({ clock, from: translateX, to })),
        set(offsetX, translateX),
        cond(eq(to, snapPoints[0]), set(shouldRemove, 1)),
      ]),
      cond(shouldRemove, [
        set(height, timing({ from: HEIGHT, to: 0 })),
        //set(deleteOpacity, 0),
        cond(not(clockRunning(clock)), call([], onSwipe)),
      ]),
    ],
    [onSwipe]
  );

  /*     
      <View style={styles.background}>
        <TouchableWithoutFeedback onPress={() => shouldRemove.setValue(1)}>
          <Action x={abs(translateX)} {...{ deleteOpacity }} />
        </TouchableWithoutFeedback>
      </View>
  */

      function onLayout(event) {
        const {x, y, height, width} = event.nativeEvent.layout;
        snapPoints[0] = -width/2;
        snapPoints[1] = -width/4;
    
        
      }
  return (
    

      <PanGestureHandler failOffsetY={[-5, 5]} activeOffsetX={[-5, 5]} {...gestureHandler}>
        <Animated.View style={{flex:1,flexDirection:'row', height, transform: [{ translateX }] }}>
          <View style={styles.textCell} onLayout={(event) => onLayout(event)} >
            <Text style={styles.textSpLeft}>{ name }</Text>
            <Text style={styles.textSpCenter}>${ price }</Text>
            <Text style={styles.textSpRight}>{ quantity }</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    
  );
};

export default Item;
