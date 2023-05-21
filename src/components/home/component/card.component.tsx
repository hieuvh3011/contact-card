import {GestureResponderEvent, Pressable, Text} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {ContactEntities} from '@app/entities/contact.entities';
import AppColors from '@app/utils/colors';

interface Props {
  contact: ContactEntities;
  onPress: (event: GestureResponderEvent) => void;
}

const CardComponent: React.FC<Props> = (props: Props) => {
  const {firstName, middleName, lastName, workPhone} = props.contact;
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.name}>
        {`${firstName} ${middleName} ${lastName}`}
      </Text>
      <Text style={styles.phoneNumber}>{workPhone}</Text>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
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
  name: {
    fontSize: '15@ms',
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: '13@ms',
    fontStyle: 'italic',
    marginTop: '4@vs',
  },
});

export default CardComponent;
