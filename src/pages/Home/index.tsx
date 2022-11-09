import React from 'react';
import { Text,View  } from "react-native";
import { HeaderComponent } from '../../components/Header';
import { styles } from './style';


export const HomePage = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent/>
      <Text>Home</Text>
    </View>
  );
};

