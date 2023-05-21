import {View, Text, Image, Linking, Alert} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@app/route/type.navigator';
import Header from '@app/components/common/header.components';
import ImageDirectory from '@app/assets';
import AppColors from '@app/utils/colors';
import ButtonWithImage from '@app/components/common/button_with_image.component';
import {useDispatch} from 'react-redux';
import {deleteItem} from '../home/home.slice';
import {exportContact} from '@app/repository/export_contact.repository';

type Props = NativeStackScreenProps<RootStackParamList, 'ContactDetail'>;

function ContactDetailScreen({route, navigation}: Props) {
  const {contact} = route.params;
  const {
    firstName,
    middleName,
    lastName,
    workPhone,
    email,
    linkedIn,
    title,
    company,
  } = contact;
  const dispatch = useDispatch();

  const sendEmail = () => {
    Linking.openURL(`mailto:${email}`);
  };
  const openLinkedIn = () => {
    Linking.openURL(linkedIn || 'https://www.linkedin.com');
  };

  const exportToVCF = () => {
    exportContact(contact);
  };

  const onPressDeleteContact = () => {
    Alert.alert(
      'Warning',
      'Are you sure that you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'OK', onPress: () => deleteContact()},
      ],
    );
  };

  const deleteContact = () => {
    dispatch(deleteItem(contact));
    navigation.goBack();
  };

  const _renderImage = () => {
    return (
      <View style={styles.imageArea}>
        <Image
          style={styles.image}
          source={ImageDirectory.profilePictureDefault}
        />
      </View>
    );
  };

  const _renderEmailAndLinkedIn = () => {
    if (email === '' && linkedIn === '') {
      return <View />;
    }
    return (
      <View style={styles.emailAndLinkedIn}>
        {email !== '' && (
          <ButtonWithImage
            onPress={sendEmail}
            text={email || ''}
            sourceImage={ImageDirectory.emailIcon}
          />
        )}
        {linkedIn !== '' && (
          <ButtonWithImage
            onPress={openLinkedIn}
            text={linkedIn || ''}
            sourceImage={ImageDirectory.linkedInIcon}
          />
        )}
      </View>
    );
  };

  const _renderTitleAndCompany = () => {
    return (
      <View style={styles.titleAndCompanyArea}>
        <Text>{`Title: ${title}`}</Text>
        <Text>{`Company: ${company}`}</Text>
      </View>
    );
  };

  const _renderExportAndDeleteButton = () => {
    return (
      <View style={styles.exportAndDelete}>
        <ButtonWithImage
          onPress={exportToVCF}
          text={'Export contact to VCF file'}
          sourceImage={ImageDirectory.exportIcon}
        />
        <ButtonWithImage
          onPress={onPressDeleteContact}
          text={'Delete this contact'}
          sourceImage={ImageDirectory.deleteIcon}
          textStyle={styles.deleteText}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header titleText="Personal Information" hasButtonBack={true} />
      {_renderImage()}
      <Text style={styles.phoneNumberText}>{workPhone}</Text>
      <Text
        style={
          styles.nameText
        }>{`${firstName} ${middleName} ${lastName}`}</Text>
      {_renderTitleAndCompany()}
      {_renderEmailAndLinkedIn()}
      {_renderExportAndDeleteButton()}
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppColors.background,
  },
  imageArea: {
    width: '100%',
    paddingVertical: '10@vs',
    alignItems: 'center',
  },
  image: {
    width: '120@ms',
    height: '120@ms',
    borderRadius: '100@ms',
  },
  phoneNumberText: {
    fontSize: '20@ms',
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: '14@ms',
    fontWeight: 'bold',
  },
  emailAndLinkedIn: {
    width: '100%',
    marginVertical: '20@vs',
  },
  exportAndDelete: {
    width: '100%',
  },
  deleteText: {
    color: AppColors.danger,
  },
  titleAndCompanyArea: {
    width: '100%',
    paddingHorizontal: '20@ms',
    marginTop: '20@vs',
  },
});

export default ContactDetailScreen;
