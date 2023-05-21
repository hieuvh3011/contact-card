import {View, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import {useAppDispatch, useAppSelector} from '@app/redux/hook';
import CardComponent from '@app/components/common/card.component';
import {ContactEntities} from '@app/entities/contact.entities';
import FloatingButton from '../common/floating_button.component';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@app/route/type.navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../common/header.components';
import AppLoading from '../common/loading.component';
import EmptyContactListComponent from './empty_contact_list.component';
import {generateContact} from './home.slice';

type Props = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  const contactSelector = useAppSelector(state => state.contactList);
  const systemSelector = useAppSelector(state => state.system);
  const navigation = useNavigation<Props>();
  const dispatch = useAppDispatch();

  const _goToAddContact = () => {
    navigation.navigate('AddContact');
  };

  const _getGeneratedItem = () => {
    dispatch(generateContact());
    console.log(generateContact);
  };

  const _renderItem = (item: ContactEntities) => {
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
      <View style={styles.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={contactSelector.listContact}
          renderItem={({item}) => _renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <EmptyContactListComponent onPressButton={_getGeneratedItem} />
          }
        />
      </View>
      <FloatingButton onPress={_goToAddContact} />
      <AppLoading
        isLoading={systemSelector.isLoading}
        text={systemSelector.textLoading}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;
