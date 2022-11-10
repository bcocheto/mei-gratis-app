import React from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS_ENUM } from '../../enums/ColorsEnum';
import { Item } from '../../types/Item';
import { styles } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export const NewItemComponent = () => {

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      const assets = result['assets'];
    }
  };

  return (
    <Modal transparent>
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
            />
            <Text style={styles.secondary_title}>DESCRIÇÃO</Text>
            <TextInput
              numberOfLines={1}
              style={styles.input}
            />
            <Text style={styles.secondary_title}>QUANTIDADE</Text>
            <TextInput
              numberOfLines={1}
              keyboardType='decimal-pad'
              style={styles.input}
            />
            <Text style={styles.secondary_title}>PREÇO</Text>
            <TextInput
              numberOfLines={1}
              keyboardType='decimal-pad'
              style={styles.input}
            />
          </View>

          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
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
