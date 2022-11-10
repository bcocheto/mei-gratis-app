import React from 'react';
import { Text, View } from "react-native";
import { styles } from './style';
import * as Animatable from 'react-native-animatable';

interface BalanceProps{
  balance: number;
  pendencie: number;
}

export const BalanceComponent = ({balance,pendencie}:BalanceProps) => {

  return (
    <Animatable.View animation='flipInY' style={styles.container}>

      <Animatable.View delay={1000} animation='fadeIn' style={styles.item}>
        <Text style={styles.itemTitle}>ITENS EM ESTOQUE</Text>
        <View>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </Animatable.View>

      <Animatable.View delay={1000} animation='fadeIn' style={styles.item}>
        <Text style={styles.itemTitle}>ITENS FALTANTES</Text>
        <View>
          <Text style={styles.pendencie}>{pendencie}</Text>
        </View>
      </Animatable.View>

    </Animatable.View>
  );
};
