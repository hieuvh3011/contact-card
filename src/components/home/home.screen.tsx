import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import {useAppSelector} from '@app/redux/hook';

export default function HomeScreen() {
  const contactList = useAppSelector(state => state.contact);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(contactList)}</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
