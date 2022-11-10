import React, { useEffect, useState } from 'react';
import { Image, Modal, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Item } from '../../types/Item';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import * as ImagePicker from 'expo-image-picker';

interface DetailsProps {
  isOpen: boolean;
  selectedItem: Item;
  editItem: (newItem: Item) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  toggleModal: () => void;
}

export const DetailsComponent = ({ isOpen, toggleModal, selectedItem, editItem, deleteItem }: DetailsProps) => {
  const [isEditIcon, setIsEditIcon] = useState(true);
  const [deleteItemAnim, setDeleteItemAnim] = useState('');
  const newItem = { ...selectedItem };

  useEffect(() => {
    setIsEditIcon(true)
    setDeleteItemAnim('');
  }, [isOpen]);

  useEffect


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      const assets = result['assets'];
      newItem['image'] = assets[0].uri;
    }
  };

  const handleEdit = () => {
    setIsEditIcon((prev) => !prev);
  }

  const handleSubmit = async () => {
    await editItem(newItem);
    toggleModal();
  }

  const handleDelete = () => {
    setDeleteItemAnim('swing');
    deleteItem(selectedItem.id);
    toggleModal();
  }


  return (
    <Modal visible={isOpen} transparent>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={styles.modal}>
          <Animatable.View duration={500} animation={'bounceInUp'} style={styles.modalContentWrapper}>
            <View style={styles.modalHeader}>

              <View style={styles.modalConfig}>
                <TouchableWithoutFeedback onPress={handleEdit}>
                  {isEditIcon ?
                    (
                      <Animatable.View delay={isEditIcon ? 0 : 1000} animation={isEditIcon ? '' : 'zoomOut'}>
                        <AntDesign name="edit" size={24} style={styles.icon} />
                      </Animatable.View>
                    ) : (
                      <TouchableWithoutFeedback onPress={handleSubmit}>
                        <Animatable.View delay={1000} animation={'zoomIn'}>
                          <AntDesign name="check" size={24} style={styles.icon} />
                        </Animatable.View>
                      </TouchableWithoutFeedback>
                    )
                  }
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={handleDelete}>
                  <Animatable.View delay={500} animation={deleteItemAnim}>
                    <AntDesign name="delete" size={24} style={styles.icon} />
                  </Animatable.View>
                </TouchableWithoutFeedback>
              </View>


              <View style={styles.modalHeaderContent}>
                <View>
                  <Image
                    key={newItem.image}
                    style={styles.image}
                    source={{ uri: `${newItem.image}` }}
                  />

                  {!isEditIcon && <TouchableWithoutFeedback onPress={pickImage}>
                    <MaterialIcons name="image-search" size={24} color="white" style={styles.imagePicker} />
                  </TouchableWithoutFeedback>
                  }
                </View>
                <View>
                  {isEditIcon ? (
                    <Text style={styles.title}>{selectedItem.name.toLocaleUpperCase()}</Text>
                  ) : (
                    <TextInput
                      numberOfLines={1}
                      style={styles.input}
                      placeholder={selectedItem.name}
                      onChangeText={(text: string) => {
                        newItem['name'] = text
                      }}
                    />
                  )}
                </View>
              </View>
            </View>

            <View style={styles.modalContent}>
              {isEditIcon ? (
                <View>
                  <Text style={styles.secondary_title}>QUANTIDADE</Text>
                  <Text numberOfLines={1} style={styles.subTitle}>{selectedItem.quantity}</Text>
                  <Text style={styles.secondary_title}>PREÇO</Text>
                  <Text numberOfLines={1} style={styles.subTitle}>{`R$ ${selectedItem.price}`}</Text>
                  <Text style={styles.secondary_title}>CATEGORIA</Text>
                  <Text numberOfLines={1} style={styles.subTitle}>{selectedItem.category}</Text>
                  <Text style={styles.secondary_title}>DESCRIÇÃO</Text>
                  <Text numberOfLines={3} style={styles.subTitle}>{selectedItem.description}</Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.secondary_title}>QUANTIDADE</Text>
                  <TextInput
                    numberOfLines={1}
                    keyboardType='numeric'
                    style={styles.input}
                    placeholder={String(selectedItem.quantity)}
                    onChangeText={(text: string) => {
                      newItem['quantity'] = Number(text)
                    }}
                  />
                  <Text style={styles.secondary_title}>PREÇO</Text>
                  <TextInput
                    numberOfLines={1}
                    keyboardType='decimal-pad'
                    style={styles.input}
                    placeholder={String(selectedItem.price)}
                    onChangeText={(text: string) => {
                      newItem['price'] = Number(text.replace(',', '.'))
                    }}
                  />
                  <Text style={styles.secondary_title}>CATEGORIA</Text>
                  <TextInput
                    numberOfLines={1}
                    style={styles.input}
                    placeholder={selectedItem.category}
                    onChangeText={(text: string) => {
                      newItem['category'] = text
                    }}
                  />
                  <Text style={styles.secondary_title}>DESCRIÇÃO</Text>
                  <TextInput
                    numberOfLines={1}
                    style={styles.input}
                    placeholder={selectedItem.description}
                    onChangeText={(text: string) => {
                      newItem['description'] = text
                    }}
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