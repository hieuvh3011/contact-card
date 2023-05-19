import {View, Text} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '@app/components/common/header.components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@app/route/type.navigator';

type Props = NativeStackScreenProps<RootStackParamList, 'CardDetail'>;

function CardDetailScreen({route}: Props) {
  const {name, phoneNumber, email, linkedIn} = route.params.contact;

  return (
    <View style={styles.container}>
      <Header titleText={name || 'Detail Information'} />
      <Text>{name}</Text>
      <Text>{phoneNumber}</Text>
      <Text>{email}</Text>
      <Text>{linkedIn}</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CardDetailScreen;
