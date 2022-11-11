import React from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS_ENUM } from '../../enums/ColorsEnum';
import { Item } from '../../types/Item';
import { styles } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';

interface NewProps {
  isCreateOpen: boolean;
  createItem: (item: Item) => Promise<void>;
  toggleCreate: () => void;
}

export const NewItemComponent = ({ isCreateOpen, createItem, toggleCreate }: NewProps) => {
  const newItem: Item = {
    id: uuid.v4().toString(),
    name: '',
    category: '',
    quantity: 0,
    price: 0,
    description: '',
    image:'',
  }

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

  const handleSubmit = () => {
    createItem({ ...newItem });
    toggleCreate();
  }

  return (
    <Modal transparent visible={isCreateOpen}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>

          <View style={styles.modalHeader}>
            <Text style={styles.title}>Novo item</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.secondary_title}>NOME</Text>
            <TextInput
              numberOfLines={1}
              style={styles.input}
              onChangeText={(text: string) => {
                newItem['name'] = text;
              }}
            />
            <Text style={styles.secondary_title}>DESCRIÇÃO</Text>
            <TextInput
              numberOfLines={1}
              style={styles.input}
              onChangeText={(text: string) => {
                newItem['description'] = text;
              }}
            />
            <Text style={styles.secondary_title}>QUANTIDADE</Text>
            <TextInput
              numberOfLines={1}
              keyboardType='decimal-pad'
              style={styles.input}
              onChangeText={(text: string) => {
                newItem['quantity'] = Number(text.replace(',', '.'))
              }}
            />
            <Text style={styles.secondary_title}>PREÇO</Text>
            <TextInput
              numberOfLines={1}
              keyboardType='decimal-pad'
              style={styles.input}
              onChangeText={(text: string) => {
                newItem['price'] = Number(text.replace(',','.'))
              }}
            />
          </View>

          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              key={newItem.image}
              source={{ uri: `${newItem.image ? newItem.image :'https://archive.org/download/no-photo-available/no-photo-available.png'}`}}
            />
            <TouchableWithoutFeedback onPress={pickImage}>
              <MaterialIcons name="image-search" size={24} style={styles.imagePicker} />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: COLORS_ENUM.primary_error
                }]
              }
              onPress={toggleCreate}
            >
              <Text style={[
                styles.text,
                {
                  color: COLORS_ENUM.primary_text
                }]
              }
              >
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: COLORS_ENUM.success
                }]
              }
              onPress={handleSubmit}
            >
              <Text style={[
                styles.text,
                {
                  color: 'white'
                }]
              }
              >
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
