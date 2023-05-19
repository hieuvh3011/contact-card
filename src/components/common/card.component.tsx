import {GestureResponderEvent, Pressable, Text} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {Contact} from '@app/entities/contact.entities';
import AppColors from '@app/utils/colors';

interface Props {
  contact: Contact;
  onPress: (event: GestureResponderEvent) => void;
}

const CardComponent: React.FC<Props> = (props: Props) => {
  const {name, phoneNumber} = props.contact;
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text>{name}</Text>
      <Text>{phoneNumber}</Text>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '95%',
    paddingVertical: '5@vs',
    paddingHorizontal: '8@ms',
    borderRadius: '5@ms',
    marginVertical: '5@vs',
    alignSelf: 'center',
    backgroundColor: AppColors.cardBackground,
    shadowColor: AppColors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default CardComponent;
