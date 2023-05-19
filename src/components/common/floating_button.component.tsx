import {Text, GestureResponderEvent, Pressable} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  icon: JSX.Element;
}

const FloatingButton: React.FC<Props> = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    width: '55@ms',
    height: '55@ms',
    borderRadius: 999,
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '30@vs',
    right: '30@ms',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  text: {
    fontSize: '30@ms',
    color: AppColors.buttonText,
  },
});

export default FloatingButton;
