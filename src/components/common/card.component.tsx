import {View, Text} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';

export default function CardComponent() {
  return (
    <View style={styles.container}>
      <Text>CardComponent</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    width: '80%',
    paddingVertical: '5@vs',
    borderRadius: '5@ms',
  },
});
