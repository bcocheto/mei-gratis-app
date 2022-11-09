import React from 'react';
import { Text,View  } from "react-native";
import { HeaderComponent } from '../../components/Header';
import { FabComponent } from '../../components/Header/Fab';
import { styles } from './style';


export const HomePage = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent/>
      <Text>Home</Text>
      <FabComponent dimensions={{bottom:40,right:20}}/>
    </View>
  );
};

