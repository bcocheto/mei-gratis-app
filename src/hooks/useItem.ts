import { useState, useCallback, useEffect } from 'react';
import { Item } from './../types/Item';
import { useStorage } from './useStorage';

export const useItem = () => {
  const { storeItems, retrieveItems } = useStorage();
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [pendencie, setPendencie] = useState(0);

  useEffect(() => {
    setBalance(0);
    setPendencie(0);
    getBalance();
    getPendencie();
}, [items]);

  const getAllItems = useCallback(async() => {
    try {
      setIsLoading(true);
      const data = await retrieveItems();
      setItems(data);
      setIsLoading(false);
    } catch (error) {
      console.log('erro ao solicitar dados:',error)
    }
  }, []);

  const createItem = useCallback(async (item: Item) => {
    try {
      setIsLoading(true);
      setItems((prev) => [...prev, item]);
      const data = await storeItems(items);
      setIsLoading(false);
    } catch (error) {
      console.log('erro ao salvar dados:', error)
    }
  }, []);
  
  const deleteItem = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true);
        const newData = items.filter((item: Item) => item.id !== id);
        setItems([...newData]);
        const data = await storeItems(items);
        setIsLoading(false);
      } catch (error) {
        console.log('erro ao salvar dados:', error)
      }
    },
    [items],
  );

  const getBalance = useCallback(() => {
    const data = items.map((item: Item) => {
      setBalance((prev) => prev + item.quantity)
    })
  }, [items]);

  const getPendencie = useCallback(() => {
    const data = items.map((item: Item) => {
      if (item.quantity === 0) {
        setPendencie((prev) => prev + 1)
      }
    })
  }, [items])


  return {
    items,
    balance,
    pendencie,
    isLoading,
    getAllItems,
    createItem,
    deleteItem,
  };
};