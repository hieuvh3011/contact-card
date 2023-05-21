import {GestureResponderEvent, Pressable} from 'react-native';
import React from 'react';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  icon?: JSX.Element;
}

const FloatingButton: React.FC<Props> = ({onPress, icon}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon || (
        <Icon
          name="plus"
          size={moderateScale(35)}
          color={AppColors.buttonText}
        />
      )}
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
