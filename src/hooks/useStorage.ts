import { useEffect, useState } from 'react';
import { Item } from './../types/Item';
import storageItems from './../data/data.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStorage = () => {
const [hasData, setHasData] = useState(false);

  useEffect(() => {
    if (!hasData) {
      storeItems(storageItems);
    }
    retrieveItems()
  }, []);

  const storeItems = async (items:Item[]) => {
    try {
      clearStorage();
      await AsyncStorage.setItem(
        'items',
        JSON.stringify(items)
      );
    } catch (error) {
      console.log('erro ao salvar dados localmente:', JSON.stringify(error))
    }
  };

  const retrieveItems = async () => {
    try {
      const value = await AsyncStorage.getItem('items');
      if (value !== null) {
        setHasData(true);
        return JSON.parse(value);
      }
      setHasData(false);
    } catch (error) {
      console.log('erro ao retornar dados locais:', JSON.stringify(error))
    }
  };

  const clearStorage = async () => {
    AsyncStorage.removeItem('item');
  }

  return {
    storeItems,
    retrieveItems,
  };
};