import {View, Text} from 'react-native';
import React from 'react';
import {Contact} from '@app/entities/contact.entities';

interface Props {
  contact: Contact;
}

const CardDetailScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>card_detail.component</Text>
    </View>
  );
};

export default CardDetailScreen;
