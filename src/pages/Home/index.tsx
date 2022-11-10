import React, { useEffect, useState } from 'react';
import { FlatList, Text,View  } from "react-native";
import { BalanceComponent } from '../../components/Balance';
import { DetailsComponent } from '../../components/Details';
import { FabComponent } from '../../components/Fab';
import { HeaderComponent } from '../../components/Header';
import { ItemTileComponent } from '../../components/ItemTile';
import { useItem } from '../../hooks/useItem';
import { Item } from '../../types/Item';
import { styles } from './style';


export const HomePage = () => {
  const { items, balance, pendencie, getAllItems } = useItem();
  const [selectedItem, setSelectedItem] = useState<Item>({
    id: '',
    name: '',
    description: '',
    category: '',
    price:0,
    quantity: 0,
    image: '',
});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      <HeaderComponent />
      <BalanceComponent balance={balance} pendencie={pendencie}/>
      <Text style={styles.textDivider}>TODOS PRODUTOS</Text>
      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={(item: Item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={
          (item) =>
            <ItemTileComponent
              item={item.item}
              setSelectedItem={setSelectedItem}
              toggleModal={toggleModal}
            />
        }
      />
      <FabComponent dimensions={{ bottom: 40, right: 20 }} />
      <DetailsComponent isOpen={isModalOpen} toggleModal={toggleModal} selectedItem={selectedItem}/>
    </View>
  );
};

