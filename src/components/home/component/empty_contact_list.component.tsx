import {View, Text, GestureResponderEvent} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppButton from '@app/components/common/button.component';
import AppColors from '@app/utils/colors';
import strings from '@app/i18n';

interface Props {
  onPressButton: (event: GestureResponderEvent) => void;
}

const EmptyContactListComponent: React.FC<Props> = ({onPressButton}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{strings.home.you_dont_have_contact_yet}</Text>
      <AppButton onPress={onPressButton} text={strings.home.get_some_fake} />
      <Text>{strings.home.or_create_real}</Text>
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
