import { useEffect } from 'react';
import { Item } from './../types/Item';
import storageItems from './../data/data.json';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = () => {
  useEffect(() => {
    storeItems(storageItems);
    retrieveItems()
  }, []);

  const storeItems = async (items:Item[]) => {
    try {
      await AsyncStorage.setItem(
        'items',
        JSON.stringify(items)
      );
    } catch (error) {
      Alert.prompt('erro:', JSON.stringify(error))
    }
  };

  const retrieveItems = async () => {
    try {
      const value = await AsyncStorage.getItem('items');
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.log('erro:', error)
    }
  };

  return {
    storeItems,
    retrieveItems,
  };
};