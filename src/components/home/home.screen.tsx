import {View, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import {useAppSelector} from '@app/redux/hook';
import CardComponent from '@app/components/common/card.component';
import {Contact} from '@app/entities/contact.entities';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export default function HomeScreen() {
  const contactSelector = useAppSelector(state => state.contact);

  const _renderItem = (item: Contact) => {
    return <CardComponent contact={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={contactSelector.listContact}
        renderItem={({item}) => _renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: getStatusBarHeight(),
  },
  list: {
    flex: 1,
    width: '100%',
  },
  listContainer: {},
});
