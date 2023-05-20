import {ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import AppColors from '@app/utils/colors';
import Header from '../common/header.components';
import AppTextInput from '../common/text_input.component';
import {isEmail, isLinkedInUrl, isPhoneNumber} from './validation';
import AppButton from '../common/button.component';
import {useDispatch} from 'react-redux';
import {Contact} from '@app/entities/contact.entities';
import {addItem} from '../home/home.slice';
import {navigationRef} from '@app/route/app.navigator';

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
      setPhoneError('Phone Number cannot be empty');
    } else {
      const contact: Contact = {
        phoneNumber: phone,
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
      setPhoneError('Phone Number is incorrect format');
    } else {
      setPhoneError('');
    }
  };

  const _onChangeEmail = (emailInput: string) => {
    setEmail(emailInput);
    if (!isEmail(emailInput) && emailInput !== '') {
      setEmailError('Email is incorrect format');
    } else {
      setEmailError('');
    }
  };

  const _onChangeLinkedIn = (linkedInInput: string) => {
    setLinkedIn(linkedInInput);
    if (!isLinkedInUrl(linkedInInput) && linkedInInput !== '') {
      setLinkedInError('This is not a LinkedIn url');
    } else {
      setLinkedInError('');
    }
  };

  const _renderAddName = () => {
    return (
      <>
        <AppTextInput
          label="First Name"
          onChangeText={value => {
            setFirstName(value);
          }}
          value={firstName}
          placeholder="Vu"
        />
        <AppTextInput
          label="Middle Name"
          onChangeText={value => {
            setMiddleName(value);
          }}
          value={middleName}
          placeholder="Huy"
        />
        <AppTextInput
          label="Last Name"
          onChangeText={value => {
            setLastName(value);
          }}
          value={lastName}
          placeholder="Hieu"
        />
      </>
    );
  };

  const _renderAddWorkInformation = () => {
    return (
      <>
        <AppTextInput
          label="Title"
          onChangeText={value => {
            setTitle(value);
          }}
          value={title}
          placeholder="Mobile Developer"
        />
        <AppTextInput
          label="Company"
          onChangeText={value => {
            setCompany(value);
          }}
          value={company}
          placeholder="Affinidi"
        />
        <AppTextInput
          label="Email"
          onChangeText={_onChangeEmail}
          value={email}
          placeholder="hieu.vh301195@gmail.com"
          autoCapitalize={'none'}
          keyboardType="email-address"
          errorText={emailError}
        />
        <AppTextInput
          label="LinkedIn"
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
      <Header titleText="Add Contact" hasButtonBack={true} />
      <View style={styles.inputArea}>
        <ScrollView>
          <AppTextInput
            label="Phone Number"
            onChangeText={_onChangePhone}
            value={phone}
            keyboardType="phone-pad"
            placeholder="+65 xxx xxx"
            errorText={phoneError}
          />
          {_renderAddName()}
          {_renderAddWorkInformation()}
          <AppButton onPress={_onPressAddContact} text="Add New Contact" />
        </ScrollView>
      </View>
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
