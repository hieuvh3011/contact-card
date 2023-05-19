import {Text, View} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

interface Props {
  titleText: string;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
}

const Header: React.FC<Props> = ({
  titleText,
  leftComponent,
  rightComponent,
}) => {
  return (
    <View style={styles.container}>
      {leftComponent}
      <Text style={styles.text}>{titleText}</Text>
      {rightComponent}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingTop: getStatusBarHeight(),
    paddingBottom: '10@vs',
    backgroundColor: AppColors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: '15@ms',
    color: AppColors.buttonText,
  },
});

export default Header;
