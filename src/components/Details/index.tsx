import React, { useEffect, useRef } from 'react';
import { Button, Image, Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Item } from '../../types/Item';
import { styles } from './style';
import * as Animatable from 'react-native-animatable';

interface DetailsProps {
  isOpen: boolean;
  toggleModal: () => void;
  selectedItem: Item;
}

export const DetailsComponent = ({ isOpen, toggleModal, selectedItem }: DetailsProps) => {



  return (
    <Modal visible={isOpen} transparent>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={styles.modal}>
          <Animatable.View animation={'slideInUp'} style={styles.modalContentWrapper}>
            <View style={styles.modalHeader}>

              <View style={styles.modalHeaderContent}>
                <Image
                  style={styles.image}
                  source={{ uri: `${selectedItem.image}` }}
                />
                <Text style={styles.title}>{selectedItem.name.toLocaleUpperCase()}</Text>
              </View>

            </View>
            <View>
              <Text>{selectedItem.quantity}</Text>
              <Text>{selectedItem.category}</Text>
              <Text>{selectedItem.description}</Text>
            </View>
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};