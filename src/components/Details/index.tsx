import React, { useEffect, useState } from 'react';
import { Image, Modal, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Item } from '../../types/Item';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

interface DetailsProps {
  isOpen: boolean;
  toggleModal: () => void;
  selectedItem: Item;
}

export const DetailsComponent = ({ isOpen, toggleModal, selectedItem }: DetailsProps) => {
  const [isEditIcon, setIsEditIcon] = useState(true);
  const [deleteItem, setDeleteItem] = useState('');

  useEffect(() => {
    setIsEditIcon(true)
    setDeleteItem('');
  }, [isOpen]);

  const handleEdit = () => {
    setIsEditIcon((prev)=>!prev)
  }

  const handleDelete = () => {
    setDeleteItem('jello');
  }


  return (
    <Modal visible={isOpen} transparent>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={styles.modal}>
          <Animatable.View animation={'slideInUp'} style={styles.modalContentWrapper}>
            <View style={styles.modalHeader}>

              <View style={styles.modalConfig}>
                <TouchableWithoutFeedback onPress={handleEdit}>
                  {isEditIcon ?
                    (
                      <Animatable.View delay={isEditIcon ? 0 : 1000} animation={isEditIcon ? '' :'zoomOut'}>
                        <AntDesign name="edit" size={24} style={styles.icon} />
                      </Animatable.View>
                    ) : (
                      <Animatable.View delay={1000} animation={'zoomIn'}>
                        <AntDesign name="check" size={24} style={styles.icon} />
                      </Animatable.View>
                    )
                  }
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={handleDelete}>
                  <Animatable.View animation={deleteItem}>
                  <AntDesign name="delete" size={24} style={styles.icon} />
                  </Animatable.View>
                </TouchableWithoutFeedback>
              </View>

              <View style={styles.modalHeaderContent}>
                <Image
                  style={styles.image}
                  source={{ uri: `${selectedItem.image}` }}
                />
                <Text style={styles.title}>{selectedItem.name.toLocaleUpperCase()}</Text>
              </View>

            </View>

            <View style={styles.modalContent}>
              {!isEditIcon ? (
              <View>
                <Text style={styles.secondary_title}>QUANTIDADE</Text>
                <Text numberOfLines={1} style={styles.subTitle}>{selectedItem.quantity}</Text>
                <Text style={styles.secondary_title}>CATEGORIA</Text>
                <Text numberOfLines={1} style={styles.subTitle}>{selectedItem.category}</Text>
                <Text style={styles.secondary_title}>DESCRIÇÃO</Text>
                <Text numberOfLines={3} style={styles.subTitle}>{selectedItem.description}</Text>
              </View>
            ):(
              <View>
                <Text style={styles.secondary_title}>QUANTIDADE</Text>
                    <TextInput
                      numberOfLines={1}
                      keyboardType='numeric'
                      style={styles.subTitle}
                      placeholder={String(selectedItem.quantity)}
                    />
                <Text style={styles.secondary_title}>CATEGORIA</Text>
                    <TextInput
                      numberOfLines={1}
                      style={styles.subTitle}
                      placeholder={selectedItem.category}
                    />
                <Text style={styles.secondary_title}>DESCRIÇÃO</Text>
                    <TextInput
                      numberOfLines={3}
                      style={styles.subTitle}
                      placeholder={selectedItem.description}
                    />
              </View>
            )}
            </View>
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};