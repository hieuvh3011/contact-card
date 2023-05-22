import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';
import Header from '@app/components/common/header.components';
import AppTextInput from '@app/components/common/text_input.component';
import {isEmail, isLinkedInUrl, isPhoneNumber} from '@app/utils/validation';
import AppButton from '@app/components/common/button.component';
import {useDispatch} from 'react-redux';
import {ContactEntities} from '@app/entities/contact.entities';
import {addItem} from '@app/redux/contact/contact.slice';
import {navigationRef} from '@app/route/app.navigator';
import strings from '@app/i18n';

// type Props = NativeStackNavigationProp<RootStackParamList, 'AddContact'>;

function AddContactScreen() {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [emailError, setEmailError] = useState('');
  const [linkedInError, setLinkedInError] = useState('');

  const dispatch = useDispatch();

  const _onPressAddContact = () => {
    if (phone === '') {
      setPhoneError(strings.add_contact.error.phone_number_cannot_empty);
    } else {
      const contact: ContactEntities = {
        workPhone: phone,
        firstName,
        middleName,
        lastName,
        title,
        company,
        email,
        linkedIn,
      };
      dispatch(addItem(contact));
      navigationRef.current?.goBack();
    }
  };

  const _onChangePhone = (phoneNumber: string) => {
    setPhone(phoneNumber);
    if (!isPhoneNumber(phoneNumber) && phoneNumber !== '') {
      setPhoneError(strings.add_contact.error.phone_number_format_is_incorrect);
    } else {
      setPhoneError('');
    }
  };

  const _onChangeEmail = (emailInput: string) => {
    setEmail(emailInput);
    if (!isEmail(emailInput) && emailInput !== '') {
      setEmailError(strings.add_contact.error.email_format_is_incorrect);
    } else {
      setEmailError('');
    }
  };

  const _onChangeLinkedIn = (linkedInInput: string) => {
    setLinkedIn(linkedInInput);
    if (!isLinkedInUrl(linkedInInput) && linkedInInput !== '') {
      setLinkedInError(strings.add_contact.error.linked_in_url_incorrect);
    } else {
      setLinkedInError('');
    }
  };

  const _renderAddName = () => {
    return (
      <>
        <AppTextInput
          label={strings.add_contact.first_name}
          onChangeText={value => {
            setFirstName(value);
          }}
          value={firstName}
          placeholder="John"
        />
        <AppTextInput
          label={strings.add_contact.middle_name}
          onChangeText={value => {
            setMiddleName(value);
          }}
          value={middleName}
          placeholder="Something"
        />
        <AppTextInput
          label={strings.add_contact.last_name}
          onChangeText={value => {
            setLastName(value);
          }}
          value={lastName}
          placeholder="Doe"
        />
      </>
    );
  };

  const _renderAddWorkInformation = () => {
    return (
      <>
        <AppTextInput
          label={strings.add_contact.title}
          onChangeText={value => {
            setTitle(value);
          }}
          value={title}
          placeholder="Example Title"
        />
        <AppTextInput
          label={strings.add_contact.company}
          onChangeText={value => {
            setCompany(value);
          }}
          value={company}
          placeholder="Example Company"
        />
        <AppTextInput
          label={strings.add_contact.email}
          onChangeText={_onChangeEmail}
          value={email}
          placeholder="john.doe@mailservice.com"
          autoCapitalize={'none'}
          keyboardType="email-address"
          errorText={emailError}
        />
        <AppTextInput
          label={strings.add_contact.linked_in}
          onChangeText={_onChangeLinkedIn}
          value={linkedIn}
          autoCapitalize={'none'}
          placeholder="https://www.linkedin.com/in/vu-huy-hieu-301195/"
          errorText={linkedInError}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        titleText={strings.add_contact.add_contact}
        hasButtonBack={true}
      />
      <KeyboardAvoidingView style={styles.inputArea} behavior="height">
        <ScrollView>
          <AppTextInput
            label={strings.add_contact.phone_number}
            onChangeText={_onChangePhone}
            value={phone}
            keyboardType="phone-pad"
            placeholder="+65 xxx xxx"
            errorText={phoneError}
          />
          {_renderAddName()}
          {_renderAddWorkInformation()}
          <AppButton
            onPress={_onPressAddContact}
            text={strings.add_contact.add_new_contact}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    alignItems: 'center',
  },
  inputArea: {
    flex: 1,
    width: '100%',
  },
});

export default AddContactScreen;
