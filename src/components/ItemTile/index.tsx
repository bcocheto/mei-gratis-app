import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, Image, Animated } from "react-native";
import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { Item } from '../../types/Item';
import * as Animatable from 'react-native-animatable';

interface ItemProps {
  item: Item;
  setSelectedItem: Dispatch<SetStateAction<Item>>;
  toggleModal: () => void;
}

export const ItemTileComponent = ({ item, setSelectedItem, toggleModal }: ItemProps) => {
  const animatedScale = useRef(new Animated.Value(0)).current;
  const [titleType, setTitleType] = useState(styles.defaultTitle);
  const [descriptionType, setDescriptionType] = useState(styles.defaultDescription);
  const [alert, setAlert] = useState<string>('');

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  useEffect(() => {
    if (item.quantity <= 2) {
      setTitleType(styles.warningTitle);
      setDescriptionType(styles.warningDescription);
      setAlert('(Estoque baixo)');
      if (item.quantity === 0) {
        setTitleType(styles.ballanceTitle);
        setDescriptionType(styles.ballanceDescription);
        setAlert('(Fora de estoque)');
        return;
      }
    } else {
      setTitleType(styles.defaultTitle);
      setDescriptionType(styles.defaultDescription);
      setAlert('');      
    }
  }, [item]);


  const handleButtonPress = () => {
    setSelectedItem({ ...item });
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 26,
      useNativeDriver: true,
    }).start();
    toggleModal();
  }

  return (
    <Animatable.View delay={500} animation={'flipInX'} style={styles.container}>

      <Image
        style={styles.image}
        source={{ uri: `${item.image}` }}
      />

      <View style={styles.content}>
        <Text numberOfLines={1} style={[styles.title, titleType]}>{item.name}{` ${alert}`}</Text>
        <Text numberOfLines={2} style={[styles.description, descriptionType]}>{item.description}</Text>
      </View>

      <View>
        <Text style={[styles.title, titleType]}>{item.quantity}</Text>
      </View>

      <TouchableOpacity onPress={handleButtonPress}>
        <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
          <Feather name="more-vertical" size={32} color="#808080" />
        </Animated.View>
      </TouchableOpacity>

    </Animatable.View>
  );
};