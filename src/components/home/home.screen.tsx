import {View, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import {useAppSelector} from '@app/redux/hook';
import CardComponent from '@app/components/common/card.component';
import {Contact} from '@app/entities/contact.entities';
import FloatingButton from '../common/floating_button.component';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@app/route/type.navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../common/header.components';

type Props = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const contactSelector = useAppSelector(state => state.contactList);
  const navigation = useNavigation<Props>();

  const _goToAddContact = () => {
    navigation.navigate('AddContact');
  };

  const _renderItem = (item: Contact) => {
    return (
      <CardComponent
        contact={item}
        onPress={() => {
          navigation.navigate('ContactDetail', {contact: item});
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header titleText="Contact Card Application" />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={contactSelector.listContact}
        renderItem={({item}) => _renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
      <FloatingButton onPress={_goToAddContact} />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
  },
});
