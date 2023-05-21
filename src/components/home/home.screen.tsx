import {View, FlatList, Pressable, Alert} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
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
import {deleteAll, generateContact} from './home.slice';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from '@app/utils/colors';
import strings from '@app/i18n';

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

  const _onPressDeleteAll = () => {
    Alert.alert(
      strings.common.warning,
      strings.home.are_you_want_to_delete_all,
      [
        {
          text: strings.common.cancel,
        },
        {text: strings.common.ok, onPress: () => dispatch(deleteAll())},
      ],
    );
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

  const _renderHeader = () => {
    return (
      <Header
        titleText={strings.home.contact_card_application}
        rightComponent={
          <Pressable
            onPress={_onPressDeleteAll}
            hitSlop={{
              bottom: 10,
              left: 10,
              right: 10,
              top: 10,
            }}>
            <Icons
              name="trash-can"
              size={moderateScale(17)}
              color={AppColors.background}
            />
          </Pressable>
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <View style={styles.listContainer}>
        {contactSelector.listContact.length !== 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.list}
            data={contactSelector.listContact}
            renderItem={({item}) => _renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <EmptyContactListComponent onPressButton={_getGeneratedItem} />
        )}
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
    paddingBottom: getBottomSpace(),
  },
  list: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '14@ms',
  },
});

export default HomeScreen;
