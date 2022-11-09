import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons';


export const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Estoque</Text>
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={24} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};