import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@app/components/home/home.screen';
import SplashScreen from '@app/components/splash/splash.screen';
import {RootStackParamList} from './type.navigator';
import ContactDetailScreen from '@app/components/contact_detail/contact_detail.screen';
import AddContactScreen from '@app/components/add_contact/add_contact.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Splash'}>
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'ContactDetail'} component={ContactDetailScreen} />
      <Stack.Screen name={'AddContact'} component={AddContactScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
