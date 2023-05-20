import {View, Text, GestureResponderEvent} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppButton from '@app/components/common/button.component';
import AppColors from '@app/utils/colors';

interface Props {
  onPressButton: (event: GestureResponderEvent) => void;
}

const EmptyContactListComponent: React.FC<Props> = ({onPressButton}: Props) => {
  return (
    <View style={styles.container}>
      <Text>You don't have any contact yet</Text>
      <AppButton onPress={onPressButton} text="Get some fake contact" />
      <Text>Or create the real contact with button "+" below</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.background,
  },
});

export default EmptyContactListComponent;
