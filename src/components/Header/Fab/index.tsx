import React, { useState } from 'react';
import { Animated, TouchableOpacity, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';


interface FabProps{
  dimensions: ViewStyle;
}

const animation = new Animated.Value(0);

export const FabComponent = ({ dimensions }: FabProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange:['0deg','45deg']
        })
      }
    ]
  }

  const swipeAdd = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange:[0,-10]
        })
      }
    ]
  }
  const swipeDelete = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange:[0,-20]
        })
      }
    ]
  }

  const toggleMenu = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 4,
      useNativeDriver:true,
    }).start();

    setIsOpen((prev) => !prev);
  }

  return (
    <View style={[styles.container, dimensions]}>

      <TouchableOpacity>
        <Animated.View style={[styles.button, styles.subMenu, swipeDelete]}>
          <AntDesign name="delete" size={24} color="white" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity >
        <Animated.View style={[styles.button, styles.subMenu, swipeAdd]}>
          <AntDesign name="addfile" size={24} color="white" />
        </Animated.View>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu, rotation]}>
          <AntDesign name="plus" size={38} color="white" />
        </Animated.View>
      </TouchableWithoutFeedback>
    
    </View>
  );
};
